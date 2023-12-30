import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Review } from "@/types/IReview";
import { VorlesungProps } from "@/types/IVorlesung";
import React from "react";
import { Separator } from "../ui/separator";

interface CourseReviewsProps {
	reviews: Review[];
}

function CourseReviews({ reviews }: CourseReviewsProps) {
	// const lastIndex = COURSE_REVIEWS.length - 1;
	// const lastReview = COURSE_REVIEWS[lastIndex];

	// TODO: Add Star with Ratings
	// TODO: Add add review Button
	// TODO: Add correct Date
	// TODO: Make with smaller
	// TODO: Change Star Color of small stars
	// TODO: Add "Write a Review"-Button Functionality

	return (
		<div>
			<h2 className="text-2xl font-medium text-primary">Reviews</h2>

			{reviews.map((review, index) => (
				<>
					<CourseReview
						key={index}
						review={review}
						// lastReview={index === reviews.length - 1}
					/>

					<Separator className="mt-7 last:hidden" />
				</>
			))}
		</div>
	);
}

export default CourseReviews;
