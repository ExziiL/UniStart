import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
			},
			rating: {
				none: '',
				easy: 'bg-green-100 text-green-500 border-green-500 hover:bg-green-200 hover:text-green-600',
				medium: 'bg-yellow-100 text-yellow-500 border-yellow-500 hover:bg-yellow-200 hover:text-yellow-600',
				hard: 'bg-red-100 text-red-500 border-red-500 hover:bg-red-200 hover:text-red-600',
			},
		},
		defaultVariants: {
			variant: 'default',
			rating: 'none',
		},
	}
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, rating, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, rating }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
