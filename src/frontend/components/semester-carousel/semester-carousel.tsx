"use client";

import CourseOverviewCard from "@/frontend/components/course-overview-card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/frontend/components/ui/carousel";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import React from "react";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	const OPTIONS: any = { dragFree: true, align: "center" };

	return (
		<div className="my-4 space-y-4 sm:m-4">
			<h1 className="text-2xl font-medium">{semester}. Semester</h1>

			<div className="rounded-md border bg-foreground/5 p-4 dark:bg-foreground/15">
				<Carousel
					opts={OPTIONS}
					className="flex flex-col"
				>
					<CarouselContent>
						{VORLESUNGEN.map(
							(vorlesung, index) =>
								vorlesung.semester == semester && (
									<CarouselItem
										key={index}
										className="basis-auto"
									>
										<CourseOverviewCard vorlesung={vorlesung} />
									</CarouselItem>
								)
						)}
					</CarouselContent>

					<CarouselPrevious className="-left-3 mt-44" />
					<CarouselNext className="-right-3 mt-44" />
				</Carousel>
			</div>
		</div>
	);
}

export default SemesterCarousel;
