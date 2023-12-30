"use client";

import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Review } from "@/types/IReview";
import { ArrowUpDown, Filter } from "lucide-react";
import React from "react";
import CourseReviewsDialog from "../course-reviews-dialog";
import { Separator } from "../ui/separator";

interface CourseReviewsProps {
	reviews: Review[];
}

function CourseReviews({ reviews }: CourseReviewsProps) {
	const numOfReviews = reviews.length;

	// TODO: Make with smaller
	// TODO: Change Star Color of small stars

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<h2 className="text-2xl font-medium text-primary">
					Reviews <span className="pl-1 text-lg font-normal text-ultra-light">({numOfReviews})</span>
				</h2>
				<CourseReviewsDialog />
			</div>

			<div className="flex flex-row gap-8 pb-4 pt-5">
				<div className="flex cursor-pointer flex-row items-center gap-3">
					<ArrowUpDown
						size={18}
						className=""
					/>
					<p>Sort</p>
				</div>
				<div className="flex cursor-pointer flex-row items-center gap-3">
					<Filter
						size={18}
						className=""
					/>
					<p>Filter</p>
				</div>
			</div>

			<div>
				{reviews.map((review, index) => (
					<div key={index}>
						<CourseReview review={review} />

						<Separator className="my-7" />
					</div>
				))}
			</div>
		</div>
	);
}

export default CourseReviews;
