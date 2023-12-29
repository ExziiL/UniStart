import CourseOverviewCard from "@/frontend/components/course-overview-card";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import React from "react";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	return (
		<div className="flex">
			{VORLESUNGEN.map(
				(vorlesung) => vorlesung.semester == semester && <CourseOverviewCard vorlesung={vorlesung} />
			)}
		</div>
	);
}

export default SemesterCarousel;
