import CourseOverviewCard from '@/frontend/components/course-overview-card';
import { BadgeProps } from '@/frontend/components/ui/badge';
import React from 'react';

import { VORLESUNGEN } from '@/frontend/constants/vorlesungen';

function Vorlesungen() {
	return (
		<div className="grid gap-4 p-4 md:grid-cols-2 lg:p-0 lg:py-4">
			{VORLESUNGEN.map((vorlesung) => (
				<CourseOverviewCard
					key={vorlesung.name}
					name={vorlesung.name}
					professor={vorlesung.professor}
					email={vorlesung.email}
					description={vorlesung.description}
					rating={vorlesung.rating}
					numOfRating={vorlesung.numOfRating}
					difficulty={(vorlesung.difficulty as BadgeProps['rating']) || 'none'}
				/>
			))}
		</div>
	);
}

export default Vorlesungen;
