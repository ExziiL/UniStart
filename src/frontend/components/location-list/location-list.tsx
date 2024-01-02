import * as React from "react";

import LocationCard from "@/frontend/components/location-card";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import locations from "@/frontend/constants/old-locations";

function LocationList() {
	return (
		<div>
			<h1>Find a Location</h1>

			{/* <SearchBar /> */}

			<ScrollArea>
				<ul className="flex flex-row gap-4 lg:flex-col">
					{locations.map((location) => (
						<li
							key={location.key}
							className=""
						>
							<LocationCard location={location} />
						</li>
					))}
				</ul>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
}

export default LocationList;
