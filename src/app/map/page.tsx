import GoogleMap from "@/frontend/components/google-map";
import LocationList from "@/frontend/components/location-list";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import React from "react";

function Map() {
	return (
		<div className="full-bleed grid h-[calc(100vh-58px)] grid-rows-[auto,_1fr] gap-4 py-4 md:p-24 lg:grid-cols-[auto,_1fr] lg:grid-rows-1">
			<ScrollArea>
				<LocationList className="" />
				{/* <ScrollBar orientation="horizontal" /> */}
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<div className="w-full">
				<GoogleMap />
			</div>
		</div>
	);
}

export default Map;
