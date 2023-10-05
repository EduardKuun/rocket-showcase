import RelaunchDaySvg from '@/components/illustrations/relaunch-day-svg';
import { rootConfig } from '@/rootConfig';
import { Box, Button, Container, Theme, Typography, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';

const NotFound: React.FC = () => {
  const mobileDevice = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Error: Not Found</title>
      </Head>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.default',
          display: 'flex',
          minHeight: '100%',
          px: 3,
          py: '80px',
        }}
      >
        <Container maxWidth='lg'>
          <Typography align='center' color='textPrimary' variant={mobileDevice ? 'h4' : 'h1'}>
            Page Not Found
          </Typography>
          <Typography align='center' color='textSecondary' sx={{ mt: 0.5 }} variant='subtitle2'>
            You either tried an invalid route, tried accessing a resource that does not exist or
            came here by mistake. Please try using the navigation menu.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <RelaunchDaySvg height={'auto'} width={400} style={{ maxWidth: '100%' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Button color='primary' component={NextLink} href='/' variant='outlined'>
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
