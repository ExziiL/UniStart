import { Badge, BadgeProps } from "@/frontend/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/frontend/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const badgeDifficulty = cva("", {
	variants: {
		variant: {
			none: "",
			easy: "bg-green-100 text-green-500 border-green-500 hover:bg-green-200 dark:bg-green-800 dark:text-green-400 dark:hover:bg-green-900",
			medium: "bg-yellow-100 text-yellow-500 border-yellow-500 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-400 dark:border-yellow-600 dark:hover:bg-yellow-900",
			hard: "bg-red-100 text-red-500 border-red-500 dark:bg-red-800/50 hover:bg-red-200 dark:hover:bg-red-900/80 dark:text-red-400",
		},
	},
});

interface CourseBadgeProps extends BadgeProps {
	difficulty: "easy" | "medium" | "hard";
}

function CourseBadge({ className, difficulty }: CourseBadgeProps) {
	return (
		<span>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Badge
							className={cn(
								badgeDifficulty({ variant: difficulty }),
								className,
								"cursor-default capitalize"
							)}
						>
							{difficulty}
						</Badge>
					</TooltipTrigger>
					<TooltipContent>
						<p>{`Studenten haben diese Vorlesung als ${difficulty} empfunden.`}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</span>
	);
}

export default CourseBadge;
