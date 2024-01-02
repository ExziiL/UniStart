import CourseOverviewCard from "@/frontend/components/course-overview-card";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import React from "react";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	return (
		<div className="m-4 space-y-4">
			<h1 className="text-2xl font-medium">{semester}. Semester</h1>
			<ScrollArea className="">
				<div className="flex w-max gap-4">
					{VORLESUNGEN.map(
						(vorlesung, index) =>
							vorlesung.semester[0] == semester && (
								<CourseOverviewCard
									key={index}
									vorlesung={vorlesung}
								/>
							)
					)}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
}

export default SemesterCarousel;
