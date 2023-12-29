"use client";

import CourseBadge from "@/frontend/components/course-badge";
import ProfessorDetails from "@/frontend/components/professor-details";
import StarRating from "@/frontend/components/star-rating";
import { VorlesungProps } from "@/types/IVorlesung";
import { ArrowRight, Home, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CourseOverViewCardProps extends VorlesungProps {}

function CourseOverviewCard({
	slug,
	name,
	professor,
	description,
	rating,
	location,
	difficulty,
}: CourseOverViewCardProps) {
	return (
		<div className="flex flex-col justify-between gap-3 rounded-md border p-4  ">
			<div className="flex flex-col gap-3 ">
				<h2 className="text-lg font-medium text-primary">{name}</h2>

				<div className="flex flex-row gap-6">
					<IconWithText
						text={rating}
						icon={<Star />}
					/>
					<IconWithText
						text={location}
						icon={<Home />}
					/>
				</div>

				<ProfessorDetails professor={professor} />

				<p className="text-primary">{description}</p>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex justify-between">
					<CourseBadge difficulty={difficulty} />
					<Link href={`/vorlesungen/${slug}`}>
						<div className="flex cursor-pointer items-center gap-2 text-light transition-colors hover:text-primary">
							Read more
							<ArrowRight
								size={20}
								strokeWidth={1.75}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

interface IconWithTextProps {
	text: string | number;
	icon: React.ReactNode;
}

const IconWithText = ({ text, icon }: IconWithTextProps) => {
	const defaultIconProps = {
		size: 20,
		strokeWidth: 2,
		className: "text-primary",
	};

	const iconWithProps = React.cloneElement(icon as React.ReactElement, defaultIconProps);

	return (
		<div className="flex items-center gap-2">
			{iconWithProps}
			{/* size={16}
				strokeWidth={2}
				className="text-primary" */}
			<span className="pt-[2px] text-base font-normal text-primary">{text}</span>
		</div>
	);
};

export default CourseOverviewCard;
