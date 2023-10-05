import DashboardLayout from '@/components/DashboardLayout';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='xl'>
          <p>Home</p>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
