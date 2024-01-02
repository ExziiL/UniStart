"use client";

import locations from "@/frontend/constants/old-locations";
import type { Marker } from "@googlemaps/markerclusterer";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import {
	APIProvider,
	AdvancedMarker,
	InfoWindow,
	Map,
	Pin,
	useAdvancedMarkerRef,
	useMap,
} from "@vis.gl/react-google-maps";
import * as React from "react";

function GoogleMap() {
	const center = { lat: 48.83973343575915, lng: 10.071188908940478 };
	const ref = React.useRef<HTMLDivElement>(null);
	const [open, setOpen] = React.useState(false);

	return (
		<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
			<Map
				zoom={17}
				center={center}
				mapId={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}`}
			>
				<Markers points={locations} />

				{open && (
					<InfoWindow
						position={center}
						onCloseClick={() => setOpen(false)}
					>
						<div ref={ref}>
							<h1>InfoWindow</h1>
							<p>Content</p>
						</div>
					</InfoWindow>
				)}
			</Map>
		</APIProvider>
	);
}

export default GoogleMap;

type Point = google.maps.LatLngLiteral & { key: string };

type MarkersProps = {
	points: Point[];
};

// Video zu dem code: https://www.youtube.com/watch?v=ZvoMak9yApU
// const Markers = ({ points }: MarkersProps) => {
// 	const map = useMap();
// 	const [markers, setMarkers] = React.useState<{ [key: string]: Marker }>({});
// 	const clusterer = React.useRef<MarkerClusterer | null>(null);

// 	React.useEffect(() => {
// 		if (!map) return;

// 		if (!clusterer.current) {
// 			clusterer.current = new MarkerClusterer({ map });
// 		}
// 	}, [map]);

// 	React.useEffect(() => {
// 		clusterer.current?.clearMarkers();
// 		clusterer.current?.addMarkers(Object.values(markers));
// 	}, [markers]);

// 	const setMarkerRef = (marker: Marker | null, key: string) => {
// 		if (marker && markers[key]) return; // marker already set
// 		if (!marker && !markers[key]) return; // no marker and nothing to remove either

// 		setMarkers((prev) => {
// 			if (marker) {
// 				return { ...prev, [key]: marker };
// 			} else {
// 				const newMarkers = { ...prev };
// 				delete newMarkers[key];
// 				return newMarkers;
// 			}
// 		});
// 	};

// 	return (
// 		<>
// 			{points.map((point) => (
// 				<AdvancedMarker
// 					position={point}
// 					key={point.key}
// 					ref={(marker) => setMarkerRef(marker, point.key)}
// 				>
// 					<span style={{ fontSize: "1.5rem" }}>🔥</span>
// 				</AdvancedMarker>
// 			))}
// 		</>
// 	);
// };
// -------------------------------------
const Markers = ({ points }: MarkersProps) => {
	const [markerRef, marker] = useAdvancedMarkerRef();
	const [infowindowShown, setInfowindowShown] = React.useState(false);

	const toggleInfoWindow = () => {
		setInfowindowShown((prevState) => !prevState);
	};

	const closeInfoWindow = () => setInfowindowShown(false);

	return (
		<>
			{points.map((point) => (
				<AdvancedMarker
					ref={markerRef}
					position={point}
					onClick={toggleInfoWindow}
				>
					<span style={{ fontSize: "1.5rem" }}>🔥</span>
				</AdvancedMarker>
			))}

			{infowindowShown && (
				<InfoWindow
					anchor={marker}
					onCloseClick={closeInfoWindow}
				>
					You can drag and drop me.
				</InfoWindow>
			)}
		</>
	);
};
