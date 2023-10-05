import DashboardLayout from '@/components/DashboardLayout';
import TracksFilter from '@/components/tracks/TracksFilter';
import { borderRadiusValues } from '@/theme/base-theme-options';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  colors,
} from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { TbMotorbike } from 'react-icons/tb';
import { TbSettings } from 'react-icons/tb';
import { GiProtectionGlasses } from 'react-icons/gi';

const Marketplace = () => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='xl'>
          <Box sx={{ width: 900, margin: 'auto', maxWidth: '100%' }}>
            <Grid container spacing={4} alignItems='center' justifyContent='center'>
              <Grid item xs={12} md={6}>
                <CardActionArea
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    transition: '0.1s',
                    borderRadius: borderRadiusValues.card,
                  }}
                >
                  <Card
                    sx={{
                      transition: '0.1s',
                      svg: {
                        color: colors.orange[600],
                        transition: '0.1s',
                      },

                      '&:hover': {
                        bgcolor: colors.orange[600],
                        '*': {
                          color: '#fff',
                        },
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: '200px',
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          margin: 0,
                          transform: 'translate(-50%,-50%)',
                        }}
                      >
                        <TbMotorbike fontSize={120} />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography variant={'h4'}>Vehicles</Typography>
                      <Typography variant='subtitle2'>
                        Dirt bikes, ATVs, boats, mountain bikes etc.
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    transition: '0.1s',
                    borderRadius: borderRadiusValues.card,
                  }}
                >
                  <Card
                    sx={{
                      transition: '0.1s',
                      svg: {
                        color: colors.purple[600],
                        transition: '0.1s',
                      },

                      '&:hover': {
                        bgcolor: colors.purple[600],
                        '*': {
                          color: '#fff',
                        },
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: '200px',
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          margin: 0,
                          transform: 'translate(-50%,-50%)',
                        }}
                      >
                        <GiProtectionGlasses fontSize={120} />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography variant={'h4'}>Gear</Typography>
                      <Typography variant='subtitle2'>
                        Dirt bikes, ATVs, boats, mountain bikes etc.
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea
                  sx={{
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    transition: '0.1s',
                    borderRadius: borderRadiusValues.card,
                  }}
                >
                  <Card
                    sx={{
                      transition: '0.1s',
                      svg: {
                        color: colors.blue[600],
                        transition: '0.1s',
                      },

                      '&:hover': {
                        bgcolor: colors.blue[600],
                        '*': {
                          color: '#fff',
                        },
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: '200px',
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          margin: 0,
                          transform: 'translate(-50%,-50%)',
                        }}
                      >
                        <TbSettings fontSize={120} />
                      </Box>
                    </CardMedia>
                    <CardContent>
                      <Typography variant={'h4'}>Parts</Typography>
                      <Typography variant='subtitle2'>
                        Dirt bikes, ATVs, boats, mountain bikes etc.
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Marketplace.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default Marketplace;
