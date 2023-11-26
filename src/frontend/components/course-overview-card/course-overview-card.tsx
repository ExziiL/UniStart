'use client';

import React from 'react';

import ProfessorDetails from '@/frontend/components/professor-details';
import StarRating from '@/frontend/components/star-rating';
import { Badge } from '@/frontend/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/frontend/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { VorlesungProps } from '@/types/IVorlesung';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CourseOverViewCardProps extends VorlesungProps, VariantProps<typeof badgeDifficulty> {}

const badgeDifficulty = cva('', {
	variants: {
		variant: {
			none: '',
			easy: 'bg-green-100 text-green-500 border-green-500 hover:bg-green-200 hover:text-green-600',
			medium: 'bg-yellow-100 text-yellow-500 border-yellow-500 hover:bg-yellow-200 hover:text-yellow-600 dark:bg-yellow-50 dark:text-yellow-600 dark:border-yellow-600 dark:hover:bg-yellow-200 dark:hover:text-yellow-700',
			hard: 'bg-red-100 text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600',
		},
	},
});

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
		<div className="flex flex-col gap-3 rounded-md border p-4">
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
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Badge className={cn(badgeDifficulty({ variant: difficulty }), 'capitalize')}>
									{difficulty}
								</Badge>
							</TooltipTrigger>
							<TooltipContent>
								<p>{`Andere Studenten haben diese Vorlesung als ${difficulty} empfunden.`}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</span>

				<Link href={`/vorlesungen/${slug}`}>
					<div className="flex cursor-pointer items-center gap-2 text-light transition-colors hover:text-primary">
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
