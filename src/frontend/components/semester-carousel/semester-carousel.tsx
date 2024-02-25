"use client";

import CourseOverviewCard from "@/frontend/components/course-overview-card";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import React from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchLectures } from "./actions";
import { lecture } from "@prisma/client";

interface SemesterCarouselProps {
	semester: number;
}

function SemesterCarousel({ semester }: SemesterCarouselProps) {
	const {isPending, isError, error, data } = useQuery({
		queryKey: ['lectures'], queryFn: fetchLectures, retry: false 
	})

	if (isPending) {
		return (
			<div>Waiting for data</div>
		)
	}
	if (isError) {
		return (<div>{error.message}</div>)
	}
	
	const lectures: lecture[] = data.lectures

	return (
		<div className="m-4 space-y-4">
			<h1 className="text-2xl font-medium">{semester}. Semester</h1>

			<ScrollArea className="">
				<div className="flex w-max gap-4">
					{lectures.map(
						(lecture, index) =>
							lecture.semester == semester && (
								<CourseOverviewCard
									key={index}
									lecture={lecture}
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
