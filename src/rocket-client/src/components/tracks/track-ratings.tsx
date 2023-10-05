import { getDifficulty, getDifficultyColor, getType } from '@/lib/trackUtil';
import { Track, TrackRating } from '@/__generated__/graphql';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Chip,
	Grid,
	CardHeader,
	Avatar,
	Stack,
	Rating,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Color from 'color';
import React from 'react';
import moment from 'moment';
import { getRandomDate } from '@/lib/dateUtil';

interface Props {
	sx?: SxProps<Theme>;
	track: Track;
}

const TrackRatings = ({ track, sx }: Props) => {
	return (
		<Box sx={sx}>
			<Typography variant='h5'>Reviews</Typography>
			<Card sx={{ mt: 1 }}>
				<CardContent>
					{track.ratings && track.ratings.length > 0 ? (
						<Grid container spacing={2}>
							{track.ratings.map((rating) => (
								<Grid key={rating.id} item xs={12} sx={{ height: '100%' }}>
									<Card sx={{ mb: 1 }} variant='outlined'>
										<CardContent>
											{' '}
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<Avatar
													src={`https://api.dicebear.com/6.x/lorelei/svg?seed=${rating.id}`}
													sx={{
														mr: 2,
														height: 60,
														width: 60,
														p: 1,
														bgcolor: (theme) =>
															Color(theme.palette.primary.main).alpha(0.1).toString(),
														boxShadow: 10,
													}}
												/>
												<Box>
													<Typography variant='body1'>{rating.comment}</Typography>
													<Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
														<Rating name='rating' value={2} readOnly />
														<Box
															sx={{
																borderRadius: '50%',
																bgcolor: 'text.primary',
																width: 5,
																height: 5,
																mx: 1.5,
															}}
														/>
														<Typography variant='caption'>
															{' '}
															{moment(getRandomDate()).fromNow()}
														</Typography>
													</Box>
												</Box>
											</Box>
											<Box sx={{ mt: 1 }}>
												<Grid container spacing={1}>
													<Grid item>
														<Chip
															color='primary'
															size='small'
															sx={{
																bgcolor: Color(getDifficultyColor(rating.difficulty))
																	.alpha(0.1)
																	.toString(),
																color: getDifficultyColor(rating.difficulty),
															}}
															label={rating.difficulty}
														/>
													</Grid>
													<Grid item>
														{' '}
														<Chip
															color='primary'
															size='small'
															sx={{
																bgcolor: (theme) =>
																	Color(theme.palette.secondary.main).alpha(0.1).toString(),
																color: 'secondary.main',
															}}
															label={rating.type}
														/>
													</Grid>
												</Grid>
											</Box>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					) : (
						'No tracks'
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default TrackRatings;
