import * as React from "react";

import LocationCard from "@/frontend/components/location-card";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import locations from "@/frontend/constants/old-locations";

interface LocationListProps extends React.HTMLAttributes<HTMLDivElement> {}

function LocationList({}: LocationListProps) {
	return (
		<div className="">
			<h1>Find a Location</h1>

			{/* <SearchBar /> */}

			<div className="lg:h-full">
				<ul className="flex flex-row gap-4 lg:flex-col ">
					{locations.map((location) => (
						<li
							key={location.key}
							className=""
						>
							<LocationCard location={location} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default LocationList;
