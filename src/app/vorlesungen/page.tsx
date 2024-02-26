import Breadcrumb from "@/frontend/components/breadcrumb";
import SemesterCarousel from "@/frontend/components/semester-carousel";
import React from "react";

function Vorlesungen() {
	return (
		<>
			<Breadcrumb sections={["Vorlesungen"]} />

			<div className="flex flex-col gap-10 py-8">
				<SemesterCarousel semester={1} />
				<SemesterCarousel semester={2} />
				<SemesterCarousel semester={3} />
			</div>
		</>
	);
}

export default Vorlesungen;
