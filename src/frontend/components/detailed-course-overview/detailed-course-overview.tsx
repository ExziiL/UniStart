"use client";

import CourseBadge from "@/frontend/components/course-badge";
import IconWithText from "@/frontend/components/icon-with-text";
import { Badge } from "@/frontend/components/ui/badge";
import { VorlesungProps } from "@/types/IVorlesung";
import { Calendar, CalendarDays, GraduationCap, Home, Star } from "lucide-react";
import React from "react";
import ProfessorDetails from "../professor-details";

interface DetailedCourseOverviewProps {
	vorlesung: VorlesungProps;
}

function DetailedCourseOverview({ vorlesung }: DetailedCourseOverviewProps) {
	return (
		<div className="text-primary">
			<div className="flex flex-col gap-4">
				<div className="flex h-full gap-4">
					<h1 className="text-xl font-medium">{vorlesung.name}</h1>

					<CourseBadge
						className="capitalize"
						difficulty={vorlesung.difficulty}
					/>
				</div>

				<div className="flex flex-row gap-6">
					<IconWithText
						text={vorlesung.rating}
						icon={<Star />}
					/>
					<IconWithText
						text={vorlesung.location}
						icon={<Home />}
					/>
					<IconWithText
						text={vorlesung.semester + ". Semester"}
						icon={<GraduationCap />}
					/>
				</div>

				<div className="flex flex-col gap-1 text-light">
					<div className="flex flex-row items-center gap-2">
						<CalendarDays
							className="mb-1"
							size={18}
						/>
						<div className="flex">
							<p className="">{`${vorlesung.dates.firstLecture.weekday}, ${vorlesung.dates.firstLecture.time.start} - ${vorlesung.dates.firstLecture.time.end}`}</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-2">
						<CalendarDays
							className="mb-1"
							size={18}
						/>
						<div className="flex">
							<p className="">{`${vorlesung.dates.secondLecture.weekday}, ${vorlesung.dates.secondLecture.time.start} - ${vorlesung.dates.secondLecture.time.end}`}</p>
						</div>
					</div>
				</div>

				<ProfessorDetails
					professor={vorlesung.professor}
					className="mb-6"
				/>
			</div>

			<p className="">{vorlesung.longDescription}</p>
		</div>
	);
}

export default DetailedCourseOverview;
