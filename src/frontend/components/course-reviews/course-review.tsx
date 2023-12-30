import { Button } from "@/frontend/components/ui/button";
import { Separator } from "@/frontend/components/ui/separator";
import { Review } from "@/types/IReview";
import { ArrowBigDown, ArrowBigUp, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import StarRating from "../star-rating";

interface CourseReviewProps extends React.HTMLAttributes<HTMLDivElement> {
	review: Review;
}

function CourseReview({ review }: CourseReviewProps) {
	const upvotes = review.upvotes;
	const downvotes = review.downvotes;

	return (
		<div className="flex gap-3 pt-7 text-primary">
			<div className="flex flex-col justify-center">
				<Voting
					upvotes={upvotes}
					downvotes={downvotes}
				/>
			</div>
			<div>
				<h2 className="font-medium">{review.headline}</h2>
				<div className="flex gap-3 pb-2 pt-1">
					<StarRating rating={review.rating} />

					<div className="py-1">
						<Separator orientation="vertical" />
					</div>

					<span className="flex flex-col justify-center text-sm text-light">
						{review.date.toLocaleDateString("de-DE", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
				</div>
				<p className="">{review.description}</p>
			</div>
		</div>
	);
}

const Voting = ({ upvotes, downvotes }: { upvotes: number; downvotes: number }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<div className="cursor-pointer text-ultra-light transition-colors hover:text-primary">
				<ThumbsUp size={20} />
			</div>
			<span className=" text-lg font-medium text-primary">{upvotes - downvotes}</span>
			<div className="cursor-pointer text-ultra-light transition-colors hover:text-primary">
				<ThumbsDown size={20} />
			</div>
		</div>
	);
};

export default CourseReview;
