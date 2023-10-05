import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import Box from '@mui/material/Box';
import { rootConfig } from '@/rootConfig';
import { ICoordinate } from '@/lib/models/custom/ICoordinate';
import { Track } from '@/__generated__/graphql';
import { colors, Typography, useTheme } from '@mui/material';
import { borderRadiusValues, neutral } from '@/theme/base-theme-options';
import useLocation from '@/hooks/useLocation';

interface Props {
	tracks?: Track[];
	initialLocation?: ICoordinate | null;
	height?: number | string;
	center?: LngLatLike;
}

const CustomMap = ({ center, tracks = [], initialLocation = null, height = '500px' }: Props) => {
	const mapContainer = useRef<HTMLElement | string>('');
	const map = useRef<Map | null>(null);
	const theme = useTheme();
	const { myLocation } = useLocation();

	const [myLocationMarker, setMyLocationMarker] = useState<Marker | null>(null);
	const [positionMarkers, setPositionMarkers] = useState<Marker[]>([]);

	const [zoom, setZoom] = useState(7);
	const [searchRadius, setSearchRadius] = useState(100);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/eduardkuun/clfv37a6w00cy01t6ui2ocmjw',
			center: center || (myLocation ? [myLocation.longitude, myLocation.latitude] : [10, 0]),
			zoom: myLocation ? zoom : 1,
			accessToken: rootConfig.mapboxAccessToken,
		});
	}, [myLocation]);

	useEffect(() => {
		if (!myLocation) return undefined;
		myLocationMarker?.remove();
		if (map.current) {
			setMyLocationMarker(
				new mapboxgl.Marker({ color: 'black' })
					.setLngLat([myLocation.longitude, myLocation.latitude])
					.addTo(map.current)
			);
		}
	}, [myLocation]);

	const removePositionMarkers = () => {
		for (const marker of positionMarkers) {
			marker.remove();
		}
	};

	const addPositionMarkers = (targetTracks: Track[]) => {
		if (!map.current) return undefined;

		removePositionMarkers();
		const newMarkers: Marker[] = [];
		for (const track of targetTracks) {
			const popUp = new Popup({ closeButton: true, anchor: 'left' }).setHTML(
				`<div style="
					color: ${neutral[800]};
					font-size: ${theme.typography.h6.fontSize};
					font-weight: ${theme.typography.h6.fontWeight};
					margin: ${theme.spacing(2, 0, 1, 0)};
				">${track.name}</div>`
			);

			newMarkers.push(
				new mapboxgl.Marker({ color: 'red' })
					.setLngLat([track.longitude, track.latitude])
					.setPopup(popUp)
					.addTo(map.current)
			);
		}
		setPositionMarkers(newMarkers);
	};

	useEffect(() => {
		addPositionMarkers(tracks);
	}, [tracks, map.current]);

	return (
		<Box>
			<Box
				ref={mapContainer}
				sx={{ height, boxShadow: 1, borderRadius: borderRadiusValues.card }}
			/>
		</Box>
	);
};

export default CustomMap;
