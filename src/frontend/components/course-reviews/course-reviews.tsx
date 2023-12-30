import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Review } from "@/types/IReview";
import React from "react";
import { Separator } from "../ui/separator";

interface CourseReviewsProps {
	reviews: Review[];
	numOfReviews?: number;
}

function CourseReviews({ reviews, numOfReviews }: CourseReviewsProps) {
	// TODO: Add Star with Ratings
	// TODO: Add add review Button
	// TODO: Add correct Date
	// TODO: Make with smaller
	// TODO: Change Star Color of small stars
	// TODO: Add "Write a Review"-Button Functionality

	return (
		<div>
			<h2 className="text-2xl font-medium text-primary">
				Reviews <span className=" text-ultra-light text-lg font-normal">({numOfReviews})</span>
			</h2>

			{reviews.map((review, index) => (
				<div key={index}>
					<CourseReview review={review} />
					<Separator className="mt-7 last:hidden" />
				</div>
			))}
		</div>
	);
}

export default CourseReviews;
