"use client";

import CourseBadge from "@/frontend/components/course-badge";
import IconWithText from "@/frontend/components/icon-with-text";
import { Badge } from "@/frontend/components/ui/badge";
import { VorlesungProps } from "@/types/IVorlesung";
import { Calendar, CalendarDays, GraduationCap, Home, Star } from "lucide-react";
import React from "react";
import ProfessorDetails from "../professor-details";

interface DetailedCourseOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
	vorlesung: VorlesungProps;
}

function DetailedCourseOverview({ vorlesung, className }: DetailedCourseOverviewProps) {
	const [isDescriptionExpanded, setDescriptionExpanded] = React.useState(false);

	const toggleDescription = () => {
		setDescriptionExpanded(!isDescriptionExpanded);
	};

	const maxCharacters = 292;

	const descriptionPreview =
		vorlesung.longDescription.slice(0, maxCharacters) +
		(vorlesung.longDescription.length > maxCharacters ? "..." : "");
	const showFade = !isDescriptionExpanded && vorlesung.longDescription.length > maxCharacters;

	return (
		<div className={`text-primary` + className}>
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

			{/* <p className="">{vorlesung.longDescription}</p> */}

			<>
				<div
					className={`relative ${
						showFade
							? "[mask-image:linear-gradient(to_bottom,transparent,white_0%,white_40%,transparent)]"
							: ""
					}`}
				>
					<p className="">{isDescriptionExpanded ? vorlesung.longDescription : descriptionPreview}</p>
				</div>

				{vorlesung.longDescription.length > maxCharacters && (
					<p
						className="w-fit cursor-pointer pt-4 text-sm text-link hover:underline"
						onClick={toggleDescription}
					>
						{isDescriptionExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
					</p>
				)}
			</>
		</div>
	);
}

export default DetailedCourseOverview;
