"use client";

import Breadcrumb from "@/frontend/components/breadcrumb";
import SemesterCarousel from "@/frontend/components/semester-carousel";
import React from "react";
import { useWindowSize } from "usehooks-ts";

function Vorlesungen() {
	const { width } = useWindowSize();
	return (
		<div>
			<Breadcrumb sections={["Vorlesungen"]} />

			<div className={`flex flex-col gap-10 py-8 pb-16`}>
				<SemesterCarousel semester={1} />
				<SemesterCarousel semester={2} />
				<SemesterCarousel semester={3} />
			</div>
		</div>
	);
}

export default Vorlesungen;
