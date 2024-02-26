import { Badge, BadgeProps } from "@/frontend/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const badgeDifficulty = cva("", {
	variants: {
		variant: {
			none: "",
			"Computer Science":
				"bg-blue-50 text-blue-400 border-blue-400 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900",
			Study: "bg-green-100 text-green-500 border-green-500 hover:bg-green-200 dark:bg-green-800 dark:text-green-400 dark:border-green-600 dark:hover:bg-green-900",
			University:
				"bg-yellow-50 text-yellow-500 border-yellow-400 dark:bg-yellow-800/50 hover:bg-yellow-100 dark:hover:bg-yellow-900/80 dark:text-yellow-400",
		},
	},
});

interface CourseBadgeProps extends BadgeProps {
	text: "Computer Science" | "Study" | "University";
}

function CourseBadge({ className, text }: CourseBadgeProps) {
	return (
		<div>
			<Badge className={cn(badgeDifficulty({ variant: text }), className, "cursor-default capitalize")}>
				{text}
			</Badge>
		</div>
	);
}

export default CourseBadge;
