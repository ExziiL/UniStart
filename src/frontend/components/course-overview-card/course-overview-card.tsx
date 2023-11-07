'use client';

import React from 'react';

import StarRating from '@/frontend/components/star-rating';
import { useToast } from '@/frontend/hooks/use-toast';

import { useCopyToClipboard, useHover } from 'usehooks-ts';

import { Badge, BadgeProps } from '@/frontend/components/ui/badge';
import { ArrowRight, Files } from 'lucide-react';

interface CourseOverViewCardProps {
	name: string;
	professor: string;
	email: string;
	description: string;
	rating: number;
	numOfRating: number;
	difficulty: BadgeProps['rating'];
}

function CourseOverviewCard({
	name,
	professor,
	email,
	description,
	rating,
	numOfRating,
	difficulty,
}: CourseOverViewCardProps) {
	const PROF_EMAIL = 'max.mustermann@hs-aalen.de';

	const hoverEmailRef = React.useRef(null);
	const isEmailHover = useHover(hoverEmailRef);

	const [copiedText, copyText] = useCopyToClipboard();

	const { toast } = useToast();

	return (
		<div className="flex flex-col gap-3 rounded-md border p-4 transition-shadow hover:shadow-lg">
			<h2 className="text-lg font-medium ">{name}</h2>
			<span className="text-zinc-500">
				<p className="text-base font-medium">{professor}</p>
				<p
					className="font-base flex w-fit gap-2 text-sm hover:cursor-pointer hover:text-zinc-800"
					ref={hoverEmailRef}
					onClick={() => {
						// copies the email to the users clipboard
						copyText(email);

						toast({
							title: 'E-Mail successfully copied to clipboard',
							description: 'You can now paste it into your email client',
						});
					}}
				>
					{email}
					{isEmailHover && (
						<span>
							<Files
								size={16}
								strokeWidth={1.5}
							/>
						</span>
					)}
				</p>
			</span>
			<p className="">{description}</p>
			<StarRating
				rating={rating}
				maxRating={5}
				numOfRating={numOfRating}
			/>
			<div className="flex justify-between">
				<span>
					<Badge
						rating={difficulty}
						className=" capitalize"
					>
						{difficulty}
					</Badge>
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
