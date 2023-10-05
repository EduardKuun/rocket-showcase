import { Query } from '@/__generated__/graphql';
import CustomMap from '@/components/CustomMap';
import DashboardLayout from '@/components/DashboardLayout';
import TrackDetails from '@/components/tracks/track-details';
import TrackRatings from '@/components/tracks/track-ratings';
import { rootConfig } from '@/rootConfig';
import { gql, useQuery } from '@apollo/client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Chip, Container, Link, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';

const GET_TRACK_BY_ID = gql`
  query GetTrackById($id: UUID!) {
    trackById(id: $id) {
      name
      id
      latitude
      longitude
      ratings {
        id
        difficulty
        type
        comment
      }
      region {
        name
      }
    }
  }
`;

const TrackRoot = () => {
  const router = useRouter();
  const { trackId } = router.query;
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  const {
    loading: trackLoading,
    error: trackError,
    data: trackData,
    startPolling: trackStartPolling,
  } = useQuery<Query>(GET_TRACK_BY_ID, {
    variables: {
      id: trackId,
    },
  });
  const track = useMemo(() => trackData?.trackById, [trackData]);

  useEffect(() => {
    trackStartPolling(rootConfig.graphqlPollInterval);
  }, []);

  return (
    <>
      <Head>
        <title>Track | {track?.name}</title>
      </Head>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth='lg'>
          <Box sx={{ mb: 4 }}>
            <Link
              component={NextLink}
              href={'/tracks'}
              color='textPrimary'
              style={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <ArrowBackIcon sx={{ mr: 1 }} fontSize='small' />
              <Typography variant='subtitle2'>Tracks</Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ mr: 1 }}>
              {track?.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Chip
              size='small'
              icon={<PlaceIcon />}
              label={track?.region?.name}
              sx={{ mr: 1, mb: 1 }}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            {track && (
              <>
                <TrackDetails track={track} />
                <Box sx={{ mt: 4 }}>
                  <Typography variant='h5' sx={{ mb: 1 }}>
                    Map
                  </Typography>
                  <CustomMap
                    tracks={[track]}
                    center={{ lng: track.longitude, lat: track.latitude }}
                  />
                </Box>
                <TrackRatings sx={{ mt: 4 }} track={track} />
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

TrackRoot.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default TrackRoot;
