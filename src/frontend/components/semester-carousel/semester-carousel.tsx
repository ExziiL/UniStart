import CourseOverviewCard from "@/frontend/components/course-overview-card";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import React from "react";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	return (
		<div className="space-y-4 sm:m-4">
			<h1 className="text-2xl font-medium">{semester}. Semester</h1>

			<div className="overflow-x-auto rounded-md border bg-foreground/5 p-4 dark:bg-foreground/15">
				<div className="flex w-max gap-4 space-x-4">
					{VORLESUNGEN.map(
						(vorlesung, index) =>
							vorlesung.semester == semester && (
								<CourseOverviewCard
									key={index}
									vorlesung={vorlesung}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
}

export default SemesterCarousel;
