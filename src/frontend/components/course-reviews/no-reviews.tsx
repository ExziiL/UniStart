import React from "react";
import CourseReviewsDialog from "../course-reviews-dialog";

interface NoReviewsProps {
	numOfReviews: number;
}

function NoReviews({ numOfReviews }: NoReviewsProps) {
	return (
		<div className="flex flex-col">
			<h2 className="text-2xl font-medium text-primary">
				Reviews <span className="pl-1 text-lg font-normal text-light">({numOfReviews})</span>
			</h2>

			<div className="flex flex-col items-center justify-center gap-8 pt-8">
				<div className="flex flex-col gap-1 text-center">
					<p className="text-light">There are currently no reviews for this course.</p>
					<p className="text-light">Be the first one to write a review.</p>
				</div>

				<div>
					<CourseReviewsDialog />
				</div>
			</div>
		</div>
	);
}

export default NoReviews;
