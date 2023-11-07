'use client';

import React from 'react';

import StarRating from '@/frontend/components/star-rating';
import { useToast } from '@/frontend/hooks/use-toast';

import { useCopyToClipboard, useHover } from 'usehooks-ts';

import { Badge } from '@/frontend/components/ui/badge';
import { ArrowRight, Files } from 'lucide-react';

function CourseOverviewCard() {
	const PROF_EMAIL = 'max.mustermann@hs-aalen.de';

	const hoverEmailRef = React.useRef(null);
	const isEmailHover = useHover(hoverEmailRef);

	const [copiedText, copyText] = useCopyToClipboard();

	const { toast } = useToast();

	return (
		<div className="mt-4 flex max-w-lg flex-col gap-3 rounded-md border p-4 transition-shadow hover:shadow-lg">
			<h2 className="text-lg font-medium ">Grundlagen der Mathemaik</h2>
			<span className="text-zinc-500">
				<p className="text-base font-medium">Max Mustermann</p>
				<p
					className="font-base flex w-fit gap-2 text-sm hover:cursor-pointer hover:text-zinc-800"
					ref={hoverEmailRef}
					onClick={() => {
						// copies the email to the users clipboard
						copyText(PROF_EMAIL);

						toast({
							title: 'E-Mail successfully copied to clipboard',
							description: 'You can now paste it into your email client',
						});
					}}
				>
					{PROF_EMAIL}
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
			<p className="">Eine Description über das Modul, von einem Studenten oder von uns geschrieben?</p>
			<StarRating maxRating={5} />
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
