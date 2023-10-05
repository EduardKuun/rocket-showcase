import DashboardLayout from '@/components/DashboardLayout';
import TracksFilter from '@/components/tracks/TracksFilter';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

const Tracks = () => {
  return (
    <>
      <Head>
        <title>Tracks</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ mr: 1 }}>
              Tracks
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <TracksFilter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Tracks.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default Tracks;
