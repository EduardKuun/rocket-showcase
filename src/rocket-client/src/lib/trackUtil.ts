import { Track, TrackDifficulty } from '@/__generated__/graphql';
import { colors } from '@mui/material';
import { TrackDifficultyMap } from './maps/TrackDifficulty';
import { ICoordinate } from './models/custom/ICoordinate';
import { deg2rad } from './mathUtil';

export const getTracksWithinRadius = (
	tracks: Track[],
	myCoordinate: ICoordinate,
	radius: number
): Track[] => {
	const R = 6371; // Earth's radius in km
	const result: Track[] = [];

	for (const track of tracks) {
		const dLat = deg2rad(track.latitude - myCoordinate.latitude);
		const dLon = deg2rad(track.longitude - myCoordinate.longitude);
		const lat1 = deg2rad(myCoordinate.latitude);
		const lat2 = deg2rad(track.latitude);

		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const d = R * c;

		if (d <= radius) {
			result.push(track);
		}
	}

	return result;
};

export const getDifficulty = (track: Track) => {
	if ((track.ratings || []).length === 0) return undefined;

	const difficultyRatings = track.ratings!.map(
		(rating) => TrackDifficultyMap.find((e) => e.source === rating.difficulty)!.destination
	);
	const unrounedDifficultyRating =
		difficultyRatings.reduce((a, b) => a + b) / difficultyRatings.length;
	const difficultyRating = Math.round(unrounedDifficultyRating);
	const ordinalRating =
		difficultyRating <
		TrackDifficultyMap.find((e) => e.source === TrackDifficulty.Easy)!.destination
			? TrackDifficultyMap.find((e) => e.source === TrackDifficulty.Easy)!.destination
			: difficultyRating >
			  TrackDifficultyMap.find((e) => e.source === TrackDifficulty.Advanced)!.destination
			? TrackDifficultyMap.find((e) => e.source === TrackDifficulty.Advanced)!.destination
			: difficultyRating;
	return TrackDifficultyMap.find((e) => e.destination === ordinalRating)!.source;
};

export const getType = (track: Track) => {
	if ((track.ratings || []).length === 0) return undefined;
	const trackTypes = track.ratings!.map((rating) => rating.type);
	return trackTypes
		.sort(
			(a, b) => trackTypes.filter((v) => v === a).length - trackTypes.filter((v) => v === b).length
		)
		.pop();
};

export const getDifficultyColor = (difficulty: TrackDifficulty | undefined) => {
	switch (difficulty) {
		case TrackDifficulty.Easy:
			return colors.green[500];
		case TrackDifficulty.Beginner:
			return colors.blue[500];
		case TrackDifficulty.Intermediate:
			return colors.red[500];
		case TrackDifficulty.Advanced:
			return colors.purple[500];
		default:
			return undefined;
	}
};
