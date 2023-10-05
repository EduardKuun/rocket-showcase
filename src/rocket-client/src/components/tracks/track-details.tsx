import { getDifficulty, getDifficultyColor, getType } from '@/lib/trackUtil';
import { Track, TrackRating } from '@/__generated__/graphql';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Color from 'color';
import React from 'react';

interface Props {
	sx?: SxProps<Theme>;
	track: Track;
}

const TrackDetails = ({ track, sx }: Props) => {
	return (
		<Box sx={sx}>
			<Typography variant='h5'>Details</Typography>
			<Card sx={{ mt: 1 }}>
				<CardContent>
					<Box>
						<Box sx={{ mb: 1 }}>
							<Box sx={{ display: 'flex', mb: 1 }}>
								<Typography variant='h6' sx={{ mr: 1 }}>
									Difficulty
								</Typography>
								{(() => {
									const difficulty = getDifficulty(track);
									return (
										<>
											{difficulty ? (
												<Chip
													color='primary'
													size='small'
													sx={{
														bgcolor: Color(getDifficultyColor(difficulty)).alpha(0.1).toString(),
														color: getDifficultyColor(difficulty),
													}}
													label={difficulty}
												/>
											) : (
												<Typography variant='body2' color='textSecondary'>
													N/A
												</Typography>
											)}
										</>
									);
								})()}
							</Box>
							<Box sx={{ display: 'flex' }}>
								<Typography variant='h6' sx={{ mr: 1 }}>
									Type
								</Typography>
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
													}}
													label={type}
												/>
											) : (
												<Typography variant='body2' color='textSecondary'>
													N/A
												</Typography>
											)}
										</>
									);
								})()}
							</Box>
						</Box>
						<Typography variant='body2' color='textSecondary'>
							from {(track.ratings || []).length} review(s) total
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default TrackDetails;
