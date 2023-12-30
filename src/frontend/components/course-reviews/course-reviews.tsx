"use client";

import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Button } from "@/frontend/components/ui/button";
import { Review } from "@/types/IReview";
import { ArrowUpDown, Edit3, Filter } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

interface CourseReviewsProps {
	reviews: Review[];
}

function CourseReviews({ reviews }: CourseReviewsProps) {
	const numOfReviews = reviews.length;

	// TODO: Make with smaller
	// TODO: Change Star Color of small stars
	// TODO: Add "Write a Review"-Button Modal

	const handleButtonClick = () => {
		console.log("Write a Review Button Clicked");
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<h2 className="text-2xl font-medium text-primary">
					Reviews <span className="pl-1 text-lg font-normal text-ultra-light">({numOfReviews})</span>
				</h2>
				<Button
					variant="outline"
					onClick={handleButtonClick}
				>
					<Edit3
						size={16}
						className="mr-2"
					/>
					Write a Review
				</Button>
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
