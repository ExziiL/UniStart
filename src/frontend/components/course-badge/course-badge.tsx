import { Badge } from '@/frontend/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/frontend/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

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

interface CourseBadgeProps extends VariantProps<typeof badgeDifficulty> {
	difficulty: 'easy' | 'medium' | 'hard';
}

function CourseBadge({ difficulty }: CourseBadgeProps) {
	return (
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
	);
}

export default CourseBadge;
