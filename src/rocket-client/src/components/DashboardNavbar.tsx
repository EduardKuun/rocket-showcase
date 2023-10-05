import { AppBar, Toolbar, styled, Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsPopover from './SettingsPopover';
import LocationAccessStatus from './location-access-status';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
}));

interface Props {
  onOpenSidebar: () => void;
}

const DashboardNavbar = ({ onOpenSidebar }: Props) => {
  return (
    <DashboardNavbarRoot
      color='transparent'
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        {/**logo here */}
        <Box flexGrow={1} />
        <LocationAccessStatus />
        <SettingsPopover sx={{ ml: 1 }} />
        <IconButton
          onClick={onOpenSidebar}
          sx={{
            ml: 1,
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize='small' />
        </IconButton>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
