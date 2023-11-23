import { COURSE_REVIEWS } from '@/frontend/constants/course-reviews';
import { SingleCourseReviewProps } from '@/types/ICourseReview';
import React from 'react';
import StarRating from '../star-rating';
import { Separator } from '../ui/separator';

interface CourseReviewProps {
	review: SingleCourseReviewProps;
	lastReview?: boolean;
}

function CourseReview({ review, lastReview }: CourseReviewProps) {
	return (
		<div className="pt-7">
			<h2 className="font-medium text-zinc-800">{review.heading}</h2>
			<div className="flex gap-3 pb-2 pt-1">
				<StarRating rating={review.rating} />

				<div className="py-1">
					<Separator orientation="vertical" />
				</div>

				<span className="flex flex-col justify-center text-sm text-zinc-500">2 minutes ago</span>
			</div>
			<p className="text-zinc-800">{review.comment}</p>

			{lastReview || <Separator className="mt-7" />}
		</div>
	);
}

export default CourseReview;
