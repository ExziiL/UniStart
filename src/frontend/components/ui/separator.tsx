'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
	text?: string; // Adding text attribute
};

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, children, ...props }, ref) => (
	<SeparatorPrimitive.Root
		ref={ref}
		decorative={decorative}
		orientation={orientation}
		className={cn(
			'relative shrink-0 bg-border',
			orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
			className
		)}
		{...props}
	>
		{children && (
			<p className="absolute left-1/2 top-1/2 flex w-auto -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-background px-2 text-xs uppercase text-light">
				{children}
			</p>
		)}
	</SeparatorPrimitive.Root>
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
