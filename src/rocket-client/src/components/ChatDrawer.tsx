import CloseIcon from '@mui/icons-material/Close';
import { Box, Chip, Container, Drawer, IconButton, Theme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChatContent from './ChatContent';

interface Props {
	open: boolean;
	onClose: () => void;
}

const ChatDrawer = ({ open, onClose }: Props) => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'), {
		noSsr: true,
	});

	const handleClose = () => {
		onClose();
	};

	return (
		<Drawer
			onClose={handleClose}
			open={open}
			anchor='right'
			PaperProps={{
				sx: {
					bgcolor: 'background.default',
					width: isMobile ? '100%' : 800,
					maxWidth: '100%',
				},
			}}
		>
			<Container maxWidth='xl' sx={{ pt: 3 }}>
				<Box sx={{ display: 'flex' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant='h4' sx={{ mr: 1 }}>
							Chat
						</Typography>
						<Chip size='small' variant='outlined' label='AI' color='secondary' />
					</Box>
					<Box flexGrow={1} />
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</Box>
			</Container>

			<ChatContent />
		</Drawer>
	);
};

export default ChatDrawer;
