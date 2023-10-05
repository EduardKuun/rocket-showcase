import { useState } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, colors, ListItem } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Color from 'color';
import { neutral } from '@/theme/base-theme-options';

interface Props {
	active?: boolean;
	children?: React.ReactNode;
	chip?: React.ReactNode;
	depth: number;
	icon?: React.ReactNode;
	info?: React.ReactNode;
	open?: boolean;
	path?: string;
	title: string;
}

const DashboardSidebarItem = ({
	active = false,
	children,
	chip,
	depth,
	icon,
	info,
	open: openProp = false,
	path,
	title,
	...other
}: Props) => {
	const [open, setOpen] = useState(!!openProp);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	let paddingLeft = 24;

	if (depth > 0) {
		paddingLeft = 32 + 8 * depth;
	}

	// Branch
	if (children) {
		return (
			<ListItem
				disableGutters
				sx={{
					display: 'block',
					mb: 2,
					py: 0,
					px: 2,
					pl: 2.5,
				}}
				{...other}
			>
				<Button
					size='large'
					endIcon={
						!open ? <ChevronRightIcon fontSize='small' /> : <ExpandMoreIcon fontSize='small' />
					}
					onClick={handleToggle}
					startIcon={icon}
					sx={{
						transition: '0s',
						color: 'neutral.400',
						justifyContent: 'flex-start',
						pl: `${paddingLeft}px`,
						pr: 3,
						py: 2,
						textAlign: 'left',
						width: '100%',
						...(active && {
							backgroundColor: Color(neutral[800]).darken(0.2).toString(),
							color: 'neutral.100',
							fontWeight: 'fontWeightBold',
						}),
						'&:hover': {
							backgroundColor: Color(neutral[800]).darken(0.2).toString(),
						},
						'& .MuiButton-startIcon': {
							color: active ? 'primary.main' : 'neutral.400',
							mr: 2,
						},
						'& .MuiButton-endIcon': {
							color: 'neutral.400',
						},
					}}
				>
					<Box sx={{ flexGrow: 1 }}>{title}</Box>
					{info}
				</Button>
				<Collapse in={open} sx={{ mt: 0.5 }}>
					{children}
				</Collapse>
			</ListItem>
		);
	}

	// Leaf
	return (
		<ListItem
			disableGutters
			sx={{
				display: 'flex',
				mb: 2,
				py: 0,
				px: 2,
				pl: 2.5,
				borderRight: 3,
				borderRightColor: 'transparent',
				...(active && {
					borderRightColor: 'primary.main',
				}),
			}}
		>
			<Button
				LinkComponent={NextLink}
				href={path}
				startIcon={icon}
				endIcon={chip}
				disableRipple
				size='large'
				sx={{
					transition: '0s',
					color: 'neutral.400',
					justifyContent: 'flex-start',
					pl: `${paddingLeft}px`,
					pr: 3,
					py: 2,
					textAlign: 'left',
					width: '100%',
					...(active && {
						backgroundColor: Color(neutral[800]).darken(0.2).toString(),
						color: 'neutral.100',
						fontWeight: 'fontWeightBold',
					}),
					'& .MuiButton-startIcon': {
						color: active ? 'primary.main' : 'neutral.400',
						mr: 2,
					},
					'&:hover': {
						backgroundColor: Color(neutral[800]).darken(0.2).toString(),
					},
				}}
			>
				<Box sx={{ flexGrow: 1 }}>{title}</Box>
				{info}
			</Button>
		</ListItem>
	);
};

export default DashboardSidebarItem;
