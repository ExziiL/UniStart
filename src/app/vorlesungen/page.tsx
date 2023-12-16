import CourseOverviewCard from '@/frontend/components/course-overview-card';
import { BadgeProps } from '@/frontend/components/ui/badge';
import React from 'react';

import { VORLESUNGEN } from '@/frontend/constants/vorlesungen';

function Vorlesungen() {
	return (
		<div className="grid gap-4 p-4 md:grid-cols-2 lg:p-0 lg:py-4">
			{VORLESUNGEN.map((vorlesung) => (
				<CourseOverviewCard
					slug={vorlesung.slug}
					key={vorlesung.name}
					name={vorlesung.name}
					professor={vorlesung.professor}
					description={vorlesung.description}
					longDescription={vorlesung.longDescription}
					rating={vorlesung.rating}
					numOfRating={vorlesung.numOfRating}
					difficulty={vorlesung.difficulty}
				/>
			))}
		</div>
	);
}

export default Vorlesungen;
