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

interface Props {
  tracks: Track[];
}

const TracksList = ({ tracks }: Props) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {tracks.map((track) => (
          <Grid xs={12} item key={track.id}>
            <Card>
              <CardActionArea
                sx={{ height: '100%' }}
                LinkComponent={NextLink}
                href={`/tracks/${track.id}`}
              >
                <CardContent sx={{ py: 1.5, px: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 1 }}>
                      <Typography variant='h6'>{track.name}</Typography>
                      <Typography variant='subtitle2' color='textSecondary'>
                        {track.region?.name}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                                    mr: 1,
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
                                    mr: 1,
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
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TracksList;
