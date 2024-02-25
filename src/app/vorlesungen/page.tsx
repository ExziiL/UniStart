import SemesterCarousel from "@/frontend/components/semester-carousel";
import React from "react";

function Vorlesungen() {
	return (
		// <div className="grid gap-4 p-4 md:grid-cols-4 lg:p-0 lg:py-4">
		<div className="flex flex-col gap-10">
			<SemesterCarousel semester={1} />
			<SemesterCarousel semester={2} />
			<SemesterCarousel semester={3} />
		</div>
	);
}

export default Vorlesungen;
