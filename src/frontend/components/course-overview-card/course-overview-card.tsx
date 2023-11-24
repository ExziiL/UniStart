'use client';

import React from 'react';

import StarRating from '@/frontend/components/star-rating';
import { Badge } from '@/frontend/components/ui/badge';
import { VorlesungProps } from '@/types/IVorlesung';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import ProfessorDetails from '@/frontend/components/professor-details';

interface CourseOverViewCardProps extends VorlesungProps {}

function CourseOverviewCard({
	slug,
	name,
	professor,
	description,
	rating,
	numOfRating,
	difficulty,
}: CourseOverViewCardProps) {
	return (
		<div className="flex flex-col gap-3 rounded-md border p-4 transition-colors">
			<h2 className="text-lg font-medium text-primary">{name}</h2>

			<ProfessorDetails professor={professor} />

			<p className="text-primary">{description}</p>

			<StarRating
				rating={rating}
				maxRating={5}
				numOfRating={numOfRating}
			/>

			<div className="flex justify-between">
				<span>
					<Badge
						difficulty={difficulty}
						className="capitalize"
					>
						{difficulty}
					</Badge>
				</span>

				<Link href={`/vorlesungen/${slug}`}>
					<div className="text-light flex cursor-pointer items-center gap-2 transition-colors hover:text-primary">
						Read more
						<ArrowRight
							size={20}
							strokeWidth={1.75}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CourseOverviewCard;