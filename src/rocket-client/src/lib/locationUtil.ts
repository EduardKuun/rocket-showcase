import { deg2rad } from './mathUtil';
import { ICoordinate } from './models/custom/ICoordinate';

export const getDistanceInKm = (
	pos1: ICoordinate,
	pos2: ICoordinate,
	decimalPlaces: number = 0
): number => {
	const earthRadiusKm = 6371; // Radius of the earth in kilometers
	const dLat = deg2rad(pos2.latitude - pos1.latitude);
	const dLon = deg2rad(pos2.longitude - pos1.longitude);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(pos1.latitude)) *
			Math.cos(deg2rad(pos2.latitude)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distance = earthRadiusKm * c; // Distance in kilometers
	return parseFloat(distance.toFixed(decimalPlaces));
};
