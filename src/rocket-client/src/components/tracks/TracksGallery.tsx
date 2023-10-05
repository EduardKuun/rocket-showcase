import { TrackDifficultyMap } from '@/lib/maps/TrackDifficulty';
import { Track, TrackDifficulty } from '@/__generated__/graphql';
import { Box, Card, CardContent, CardMedia, Chip, colors, Grid } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Color from 'color';
import React from 'react';
import { TbRoute2 } from 'react-icons/tb';
import NextLink from 'next/link';
import { getDifficulty, getDifficultyColor, getType } from '@/lib/trackUtil';
import useLocation from '@/hooks/useLocation';
import { getDistanceInKm } from '@/lib/locationUtil';

interface Props {
  tracks: Track[];
}

const TracksGallery = ({ tracks }: Props) => {
  const { myLocation } = useLocation();

  return (
    <Box>
      <Grid container spacing={3}>
        {tracks.map((track) => (
          <Grid xs={12} sm={6} md={4} xl={3} item key={track.id}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea
                sx={{ height: '100%' }}
                LinkComponent={NextLink}
                href={`/tracks/${track.id}`}
              >
                <CardMedia
                  sx={{
                    height: '200px',
                    position: 'relative',
                    color: getDifficultyColor(getDifficulty(track)),
                    bgcolor: (theme) =>
                      Color(getDifficultyColor(getDifficulty(track)))
                        .alpha(0.1)
                        .toString(),
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
                    <TbRoute2 fontSize={100} />
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography variant='h5'>{track.name}</Typography>
                  <Typography variant='subtitle2' color='textSecondary'>
                    {track.region?.name}
                  </Typography>
                  <Box sx={{ mt: 1, display: 'flex' }}>
                    <Box>
                      {(() => {
                        const difficulty = getDifficulty(track);
                        return (
                          <>
                            {difficulty ? (
                              <Chip
                                color='primary'
                                size='small'
                                sx={{
                                  bgcolor: Color(getDifficultyColor(difficulty))
                                    .alpha(0.1)
                                    .toString(),
                                  color: getDifficultyColor(difficulty),
                                  mr: 0.5,
                                  mb: 0.5,
                                }}
                                label={difficulty}
                              />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })()}

                      {(() => {
                        const type = getType(track);
                        return (
                          <>
                            {type ? (
                              <Chip
                                color='primary'
                                size='small'
                                sx={{
                                  bgcolor: (theme) =>
                                    Color(theme.palette.secondary.main).alpha(0.1).toString(),
                                  color: 'secondary.main',
                                  mr: 0.5,
                                  mb: 0.5,
                                }}
                                label={type}
                              />
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })()}
                    </Box>

                    <Box flexGrow={1} />
                    <Typography
                      sx={{ whiteSpace: 'nowrap' }}
                      variant='caption'
                      color='textSecondary'
                    >
                      {(track.ratings || []).length} review(s)
                    </Typography>
                  </Box>
                  {myLocation && (
                    <Typography variant='caption' color='textSecondary'>
                      {getDistanceInKm(myLocation, {
                        latitude: track.latitude,
                        longitude: track.longitude,
                      })}{' '}
                      km away
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TracksGallery;
