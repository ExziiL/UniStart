import { Review } from "@/types/IReview";
import React from "react";
import StarRating from "../star-rating";
import { Separator } from "../ui/separator";

interface CourseReviewProps extends React.HTMLAttributes<HTMLDivElement> {
	review: Review;
}

function CourseReview({ review }: CourseReviewProps) {
	return (
		<div className="pt-7 text-primary">
			<h2 className="font-medium">{review.headline}</h2>
			<div className="flex gap-3 pb-2 pt-1">
				<StarRating rating={review.rating} />

				<div className="py-1">
					<Separator orientation="vertical" />
				</div>

				<span className="flex flex-col justify-center text-sm text-light">2 minutes ago</span>
			</div>
			<p className="">{review.description}</p>
		</div>
	);
}

export default CourseReview;
