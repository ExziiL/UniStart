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
	return (
		<div className="flex gap-3 text-primary">
			<div className="flex flex-col justify-center">
				<Voting votes={review.votes} />
			</div>
			<div>
				<h2 className="font-medium">{review.headline}</h2>
				<div className="flex gap-3 pb-2 pt-1">
					<StarRating
						value={review.courserating}
						style={{ maxWidth: 100, minWidth: 75 }}
						readOnly
					/>

					<div className="py-1">
						<Separator orientation="vertical" />
					</div>

					<span className="flex flex-col justify-center text-sm text-light">
						{review.date.toLocaleDateString("de-DE", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</span>

					<div className="py-1">
						<Separator orientation="vertical" />
					</div>

					<span className="flex flex-col justify-center text-sm text-light">{review.semester}. Sem.</span>

					<div className="py-1">
						<Separator orientation="vertical" />
					</div>

					<span className="flex flex-col justify-center text-sm text-light">{review.focus}</span>
				</div>
				<p className="">{review.description}</p>
			</div>
		</div>
	);
}

const Voting = ({ votes }: any) => {
	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<div className="cursor-pointer text-ultra-light transition-colors hover:text-light">
				<ThumbsUp size={20} />
			</div>
			<span className=" text-lg font-medium text-primary">{votes}</span>
			<div className="cursor-pointer text-ultra-light transition-colors hover:text-light">
				<ThumbsDown size={20} />
			</div>
		</div>
	);
};

export default CourseReview;
