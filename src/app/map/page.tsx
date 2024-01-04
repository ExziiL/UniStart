import FilterIcon from "@/frontend/components/filter-icon";
import GoogleMap from "@/frontend/components/google-map";
import LocationList from "@/frontend/components/location-list";
import { Input } from "@/frontend/components/ui/input";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import React from "react";

function Map() {
	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<div className="full-bleed h-[calc(100vh-58px)] p-4 md:p-24 ">
			<div>
				<div className="">
					<h1>Find a Location</h1>
					<Input
						type="email"
						placeholder="Email"
					/>
				</div>
				<FilterIcon onChange={handleFilterChange} />
			</div>
			<div className="grid h-full grid-rows-[auto,_1fr] gap-4 lg:grid-cols-[auto,_1fr] lg:grid-rows-1">
				<ScrollArea>
					<LocationList className="" />
					{/* <ScrollBar orientation="horizontal" /> */}
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
				<div className="w-full">
					<GoogleMap />
				</div>
			</div>
		</div>
	);
}

export default Map;
