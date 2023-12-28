'use client';

import { Button } from '@/frontend/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [_, startTransition] = React.useTransition();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				startTransition(() => {
					setTheme(theme === 'light' ? 'dark' : 'light');
				});
			}}
		>
			{theme === 'dark' ? (
				<Moon
					size={16}
					className="transition-all"
				/>
			) : (
				<Sun
					size={16}
					className="transition-all"
				/>
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}

export default ThemeToggle;
