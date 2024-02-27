"use client";

import CourseOverviewCard from "@/frontend/components/course-overview-card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/frontend/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import { lecture } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchLectures } from "./actions";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	const OPTIONS: any = { dragFree: true, align: "center" };
	const { isPending, isError, error, data } = useQuery({
		queryKey: ["lectures"],
		queryFn: fetchLectures,
		retry: false,
	});

	if (isPending) {
		return <div>Waiting for data</div>;
	}
	if (isError) {
		return <div>{error.message}</div>;
	}

	const lectures: lecture[] = data.lectures;

	return (
		<div className="my-4 space-y-4 sm:m-4">
			<h1 className="text-2xl font-medium">{semester}. Semester</h1>

			<div className="rounded-md border bg-foreground/5 p-4 dark:bg-foreground/15">
				<Carousel
					opts={OPTIONS}
					className="flex flex-col"
				>
					<CarouselContent>
						{lectures.map(
							(lecture, index) =>
								lecture.semester == semester && (
									<CarouselItem
										key={index}
										className="basis-auto"
									>
										<CourseOverviewCard lecture={lecture} />
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
