"use client";

import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Button } from "@/frontend/components/ui/button";
import { Review } from "@/types/IReview";
import { Edit3 } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

interface CourseReviewsProps {
	reviews: Review[];
	numOfReviews?: number;
}

function CourseReviews({ reviews, numOfReviews }: CourseReviewsProps) {
	// TODO: Add Star with Ratings
	// TODO: Add correct Date
	// TODO: Make with smaller
	// TODO: Change Star Color of small stars
	// TODO: Add "Write a Review"-Button Modal

	const handleButtonClick = () => {
		console.log("Write a Review Button Clicked");
	};

	return (
		<div>
			<div className="flex justify-between">
				<h2 className="text-2xl font-medium text-primary">
					Reviews <span className=" text-ultra-light text-lg font-normal">({numOfReviews})</span>
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

			{reviews.map((review, index) => (
				<div key={index}>
					<CourseReview review={review} />

					<Separator className="mt-7" />
				</div>
			))}
		</div>
	);
}

export default CourseReviews;
