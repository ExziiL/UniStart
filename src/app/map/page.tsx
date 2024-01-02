import GoogleMap from "@/frontend/components/google-map";
import LocationList from "@/frontend/components/location-list";
import React from "react";

function Map() {
	return (
		<div className="flex flex-col lg:flex-row ">
			<LocationList />
			<GoogleMap />
		</div>
	);
}

export default Map;
