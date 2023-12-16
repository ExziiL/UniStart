import React from 'react';

import CourseReview from '@/frontend/components/course-reviews/course-review';
import { COURSE_REVIEWS } from '@/frontend/constants/course-reviews';

function CourseReviews() {
	const lastIndex = COURSE_REVIEWS.length - 1;
	const lastReview = COURSE_REVIEWS[lastIndex];

	// TODO: Add Star with Ratings
	// TODO: Add add review Button
	// TODO: Add correct Date
	// TODO: Make with smaller
	// TODO: Change Star Color of small stars
	// TODO: Add "Write a Review"-Button Functionality

	return (
		<div>
			<h2 className="text-2xl font-medium text-primary">Reviews</h2>
			{COURSE_REVIEWS.map((review, index) => (
				<CourseReview
					review={review}
					key={index}
					// gets the last review and adds "lastReview" prop to it
					{...(index === lastIndex && { lastReview: true })}
				/>
			))}
		</div>
	);
}

export default CourseReviews;
