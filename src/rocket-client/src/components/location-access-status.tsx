import { Alert, Box, SxProps, Theme, Tooltip } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

interface Props {
  component?: (state: PermissionState) => React.ReactNode;
  sx?: SxProps<Theme>;
  intervalMs?: number;
}

const LocationAccessStatus = ({ component, sx, intervalMs = 5000 }: Props) => {
  const [locationState, setLocationState] = useState<PermissionState>('prompt');
  const providedComponent = useMemo(
    () => component && component(locationState),
    [locationState, component],
  );

  const initLocationAccess = async () => {
    navigator?.permissions?.query({ name: 'geolocation' }).then(function (result) {
      setLocationState(result.state);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      initLocationAccess();
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [locationState]);

  return (
    <Box sx={sx}>
      {providedComponent ||
        (locationState === 'denied' && (
          <Tooltip
            placement='left'
            title='Allow your browser to access your location to unlock location features.'
          >
            <Alert severity='error'>Location Disabled</Alert>
          </Tooltip>
        ))}
    </Box>
  );
};

export default LocationAccessStatus;
