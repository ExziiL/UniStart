'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
	text?: string; // Adding text attribute
};

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(({ className, orientation = 'horizontal', decorative = true, children, ...props }, ref) => (
	<SeparatorPrimitive.Root
		ref={ref}
		decorative={decorative}
		orientation={orientation}
		className={cn('shrink-0 bg-border relative', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)}
		{...props}
	>
		{children && <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center bg-white items-center w-auto px-2 text-zinc-400 text-xs uppercase">{children}</p>}
	</SeparatorPrimitive.Root>
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
