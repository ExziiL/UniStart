"use client";

import IconWithText from "@/frontend/components/icon-with-text";
import ProfessorDetails from "@/frontend/components/professor-details";
import StarRating from "@/frontend/components/star-rating";
import { lecture } from "@prisma/client";
import { Variants, motion } from "framer-motion";
import { ArrowRight, Home, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useHover } from "usehooks-ts";

interface CourseOverViewCardProps extends React.HTMLAttributes<HTMLDivElement> {
	lecture: lecture;
}

function CourseOverviewCard({ lecture, className }: CourseOverViewCardProps) {
	const hoverRef = React.useRef<HTMLDivElement>(null);
	const isHovered = useHover(hoverRef);

	const arrowVariants: Variants = {
		tapped: { x: 3 },
		initial: { x: -5, opacity: 0 },
		hovered: { x: -1, opacity: 1 },
	};

	return (
		<div
			className={`flex h-full w-[320px] flex-col justify-between gap-3 rounded-md border bg-background/80 p-4 md:w-[350px] ${className}`}
		>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<h2 className="truncate text-lg font-medium text-primary">{lecture.name}</h2>

					<div className="flex flex-row gap-6">
						<IconWithText
							text={lecture.rating??""}
							icon={<Star />}
						/>
						<IconWithText
							text={lecture.location}
							icon={<Home />}
						/>
					</div>
				</div>

				<ProfessorDetails professor={lecture.professor} />

				<p className="text-primary">{lecture.description}</p>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex justify-between">
				<Link href={`/vorlesungen/${lecture.slug}`}>
						<motion.div
							className="relative flex cursor-pointer items-center gap-2 text-link/95 transition-colors hover:text-link"
							ref={hoverRef}
						>
							Read more
							<motion.span
								variants={arrowVariants}
								initial="initial"
								animate={isHovered ? "hovered" : "initial"}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
								whileTap="tapped"
								className="absolute w-full pl-[88px]"
							>
								<ArrowRight
									size={20}
									strokeWidth={1.75}
								/>
							</motion.span>
						</motion.div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseOverviewCard;
