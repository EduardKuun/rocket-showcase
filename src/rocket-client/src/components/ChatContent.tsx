import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Message } from '@/lib/types/chat';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import ReactMarkdown from 'react-markdown';
import { Document } from 'langchain/document';
import {
	Alert,
	Avatar,
	Box,
	CircularProgress,
	Container,
	IconButton,
	LinearProgress,
	Skeleton,
	TextField,
	Tooltip,
	colors,
} from '@mui/material';
import { AiOutlineClear } from 'react-icons/ai';
import SendIcon from '@mui/icons-material/Send';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { pinecone } from '@/utils/pineconeClient';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone';
import { PineconeStore } from 'langchain/vectorstores';

const AiAvatar = () => {
	return (
		<Avatar
			src={'https://api.dicebear.com/6.x/bottts/svg'}
			sx={{
				height: 60,
				width: 60,
				p: 1,
				bgcolor: 'background.paper',
				boxShadow: 1,
			}}
		/>
	);
};

const ChatContent = () => {
	const [query, setQuery] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [sourceDocs, setSourceDocs] = useState<Document[]>([]);
	const [error, setError] = useState<string | null>(null);
	const initialMessageState: {
		messages: Message[];
		pending?: string;
		history: [string, string][];
		pendingSourceDocs?: Document[];
	} = {
		messages: [
			{
				message: 'Hi, what would you like to know?',
				type: 'apiMessage',
			},
		],
		history: [],
		pendingSourceDocs: [],
	};
	const [messageState, setMessageState] = useState<{
		messages: Message[];
		pending?: string;
		history: [string, string][];
		pendingSourceDocs?: Document[];
	}>(initialMessageState);

	const { messages, pending, history, pendingSourceDocs } = messageState;

	const messageListRef = useRef<HTMLDivElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		textAreaRef.current?.focus();
	}, []);

	//handle form submission
	async function handleSubmit(e: any) {
		e.preventDefault();

		setError(null);

		if (!query) {
			alert('Please input a question');
			return;
		}

		const question = query.trim();

		setMessageState((state) => ({
			...state,
			messages: [
				...state.messages,
				{
					type: 'userMessage',
					message: question,
				},
			],
			pending: undefined,
		}));

		setLoading(true);
		setQuery('');
		setMessageState((state) => ({ ...state, pending: '' }));

		const ctrl = new AbortController();

		try {
			console.log('TEST');
			fetchEventSource('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					question,
					history,
				}),
				signal: ctrl.signal,
				onmessage: (event) => {
					if (event.data === '[DONE]') {
						setMessageState((state) => ({
							history: [...state.history, [question, state.pending ?? '']],
							messages: [
								...state.messages,
								{
									type: 'apiMessage',
									message: state.pending ?? '',
									sourceDocs: state.pendingSourceDocs,
								},
							],
							pending: undefined,
							pendingSourceDocs: undefined,
						}));
						setLoading(false);
						ctrl.abort();
					} else {
						const data = JSON.parse(event.data);
						if (data.sourceDocs) {
							setMessageState((state) => ({
								...state,
								pendingSourceDocs: data.sourceDocs,
							}));
						} else {
							setMessageState((state) => ({
								...state,
								pending: (state.pending ?? '') + data.data,
							}));
						}
					}
				},
			});
		} catch (error) {
			setLoading(false);
			setError('An error occurred while fetching the data. Please try again.');
			console.log('error', error);
		}
	}

	//prevent empty submissions
	const handleEnter = useCallback(
		(e: any) => {
			if (e.key === 'Enter' && query) {
				handleSubmit(e);
			} else if (e.key == 'Enter') {
				e.preventDefault();
			}
		},
		[query]
	);

	const chatMessages = useMemo(() => {
		return [
			...messages,
			...(pending
				? [
						{
							type: 'apiMessage',
							message: pending,
							sourceDocs: pendingSourceDocs,
						},
				  ]
				: []),
		];
	}, [messages, pending, pendingSourceDocs]);

	//scroll to bottom of chat
	useEffect(() => {
		if (messageListRef.current) {
			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
		}
	}, [chatMessages]);

	const handleReset = () => {
		setMessageState(initialMessageState);
		setQuery('');
		setError(null);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<Container maxWidth='xl'>
				<main>
					<div>
						<div ref={messageListRef}>
							{chatMessages.map((message, index) => {
								let icon;
								let className;
								if (message.type === 'apiMessage') {
									icon = <AiAvatar />;
								} else {
									icon = (
										<Avatar
											src={'https://api.dicebear.com/6.x/lorelei/svg'}
											sx={{
												height: 60,
												width: 60,
												p: 1,
												bgcolor: 'background.paper',
												boxShadow: 1,
											}}
										/>
									);
								}
								return (
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
										}}
										key={`chatMessage-${index}`}
									>
										{message.type === 'apiMessage' && <Box sx={{ mr: 2 }}>{icon}</Box>}
										<Box
											sx={{
												my: 2,
												width: '100%',
												bgcolor:
													message.type === 'userMessage' ? 'primary.main' : 'background.paper',
												color: (theme) =>
													message.type === 'userMessage'
														? theme.palette.getContrastText(theme.palette.primary.main)
														: 'text.primary',
												px: 2,
												borderRadius: 1,
												boxShadow: 1,
												lineHeight: 1.75,
												'& pre': {
													bgcolor: 'neutral.800',
													px: 3,
													py: 2,
													borderRadius: 1,
												},
												'& code': {
													borderRadius: '8px',
													px: '4px',
													py: '2px',
													bgcolor: 'neutral.800',
													color: 'neutral.100',
													fontWeight: 500,
													whiteSpace: 'pre-wrap !important',
												},
												'& ol, ul': {
													m: '1rem',
												},
												'& a': {
													color: colors.blue[600],
													'&:hover': {
														color: colors.blue[400],
													},
												},
											}}
										>
											<ReactMarkdown linkTarget='_blank'>{message.message}</ReactMarkdown>
										</Box>
										{message.type === 'userMessage' && <Box sx={{ ml: 2 }}>{icon}</Box>}
									</Box>
								);
							})}
						</div>
					</div>
				</main>

				{error && (
					<Alert sx={{ mt: 2 }} variant='filled' severity='error'>
						{error}
					</Alert>
				)}
			</Container>
			<Box flexGrow={1} />
			<Box
				sx={{
					position: 'sticky',
					bottom: 0,
					p: 2,
					bgcolor: 'background.default',
					width: '100%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Tooltip title='Clean Conversation'>
						<span>
							<IconButton
								size='large'
								onClick={handleReset}
								disabled={messages.length <= 1}
								sx={{
									bgcolor: 'secondary.main',
									'&:hover': {
										bgcolor: 'secondary.dark',
									},
									mr: 2,
									color: (theme) => theme.palette.getContrastText(theme.palette.secondary.main),
								}}
							>
								<AiOutlineClear style={{ fontSize: 39, padding: 4 }} />
							</IconButton>
						</span>
					</Tooltip>

					<Box sx={{ width: '100%' }}>
						<TextField
							placeholder={loading ? 'Hm...' : 'Ask me anything...'}
							fullWidth
							disabled={loading}
							size='small'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							multiline
							maxRows={10}
							InputProps={{
								sx: {
									bgcolor: 'background.paper',
								},
								endAdornment: (
									<>
										{loading ? (
											<CircularProgress color='secondary' />
										) : (
											<IconButton
												onClick={handleSubmit}
												color='secondary'
												disabled={!query || loading}
											>
												<SendIcon />
											</IconButton>
										)}
									</>
								),
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ChatContent;
