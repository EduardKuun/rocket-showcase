import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%',
	paddingTop: 64,
	[theme.breakpoints.up('lg')]: {
		paddingLeft: 280,
	},
}));

interface Props {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			<DashboardLayoutRoot>
				<Box
					sx={{
						display: 'flex',
						flex: '1 1 auto',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					{children}
				</Box>
			</DashboardLayoutRoot>
			<DashboardNavbar onOpenSidebar={() => setIsSidebarOpen(true)} />
			<DashboardSidebar onClose={() => setIsSidebarOpen(false)} open={isSidebarOpen} />
		</>
	);
};

export default DashboardLayout;
