"use client";

import CourseReview from "@/frontend/components/course-reviews/course-review";
import { Button } from "@/frontend/components/ui/button";
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

	const [showAllReviews, setShowAllReviews] = React.useState(false);
	const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

	const handleShowMoreClick = () => {
		setShowAllReviews(!showAllReviews);
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<h2 className="text-2xl font-medium text-primary">
					Reviews <span className="pl-1 text-lg font-normal text-light">({numOfReviews})</span>
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
				{displayedReviews.map((review, index) => (
					<div key={index}>
						<CourseReview review={review} />

						{index !== displayedReviews.length - 1 && <Separator className="my-7" />}
					</div>
				))}

				<div className="pt-7">
					<p
						className="w-fit cursor-pointer text-light transition-colors hover:text-primary"
						onClick={handleShowMoreClick}
					>
						{showAllReviews ? "Show Less" : `Load more comments (${numOfReviews - 3})`}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CourseReviews;
