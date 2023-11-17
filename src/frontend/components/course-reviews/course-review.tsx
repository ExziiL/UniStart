import { COURSE_REVIEWS } from '@/frontend/constants/course-reviews';
import React from 'react';

function CourseReview() {
	const courseReviews = COURSE_REVIEWS[0];
	return (
		<div>
			<h2 className="text-zinc-800">{courseReviews.heading}</h2>
		</div>
	);
}

export default CourseReview;
