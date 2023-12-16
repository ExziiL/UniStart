import CourseBadge from '@/frontend/components/course-badge';
import ProfessorDetails from '@/frontend/components/professor-details';
import StarRating from '@/frontend/components/star-rating';
import { VorlesungProps } from '@/types/IVorlesung';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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
		<div className="flex flex-col justify-between gap-3 rounded-md border p-4  ">
			<div className="flex flex-col gap-3 ">
				<h2 className="text-lg font-medium text-primary">{name}</h2>

				<ProfessorDetails professor={professor} />

				<p className="text-primary">{description}</p>
			</div>

			<div className="flex flex-col gap-3">
				<StarRating
					rating={rating}
					maxRating={5}
					numOfRating={numOfRating}
				/>

				<div className="flex justify-between">
					<CourseBadge difficulty={difficulty} />

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
		</div>
	);
}

export default CourseOverviewCard;
