'use client';

import StarRating from '@/frontend/components/star-rating';
import React from 'react';

import { Badge } from '@/frontend/components/ui/badge';
import { ArrowRight, Files } from 'lucide-react';

function CourseOverviewCard() {
	const [fileCopyIsHovered, setFileCopyIsHovered] = React.useState(false);

	return (
		<div className="flex max-w-lg flex-col gap-3 rounded-md border p-4">
			<h2 className="text-lg font-medium ">Grundlagen der Mathemaik</h2>
			<span className="text-zinc-500">
				<p className="text-base font-medium">Max Mustermann</p>
				<p
					className="font-base flex w-fit gap-2 text-sm hover:cursor-pointer hover:text-zinc-800"
					onMouseEnter={() => setFileCopyIsHovered(true)}
					onMouseLeave={() => setFileCopyIsHovered(false)}
				>
					max.mustermann@hs-aalen.de
					{fileCopyIsHovered && (
						<span>
							<Files
								size={16}
								strokeWidth={1.5}
							/>
						</span>
					)}
				</p>
			</span>
			<p className="">Eine Description über das Modul, von einem Studenten oder von uns geschrieben?</p>
			<StarRating />
			<div className="flex justify-between">
				<span>
					<Badge rating="hard">Hard</Badge>
				</span>
				<div className="flex cursor-pointer items-center gap-2 text-zinc-500 hover:text-zinc-800">
					Read more
					<ArrowRight
						size={20}
						strokeWidth={1.75}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseOverviewCard;
