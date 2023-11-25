'use client';

import { Separator } from '@/frontend/components/ui/separator';
import { VorlesungProps } from '@/types/IVorlesung';
import React from 'react';
import ProfessorDetails from '../professor-details';
import { Badge } from '../ui/badge';

interface DetailedCourseOverviewProps {
	vorlesung: VorlesungProps;
}

function DetailedCourseOverview({ vorlesung }: DetailedCourseOverviewProps) {
	return (
		<div className="text-primary">
			<h1 className="text-xl font-medium">{vorlesung.name}</h1>
			<Badge
				difficulty={vorlesung.difficulty}
				className="mb-4 mt-2 capitalize"
			>
				{vorlesung.difficulty}
			</Badge>

			<ProfessorDetails
				professor={vorlesung.professor}
				className=" mb-6"
			/>

			<p className="max-w-xl">{vorlesung.longDescription}</p>
		</div>
	);
}

export default DetailedCourseOverview;
