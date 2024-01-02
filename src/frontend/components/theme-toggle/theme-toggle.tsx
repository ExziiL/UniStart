'use client';

import { Switch } from '@/frontend/components/ui/switch';
import { useTheme } from 'next-themes';
import * as React from 'react';

function ThemeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const [darkmode, setDarkmode] = React.useState(false);

	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		setMounted(true);
		setDarkmode(theme === 'dark');
	}, [theme]);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex justify-center gap-2">
			<Switch
				id="theme-toggle"
				checked={darkmode}
				onCheckedChange={() => {
					setDarkmode(!darkmode);
					setTheme(darkmode ? 'light' : 'dark');
				}}
			/>
			<span className="sr-only">Toggle theme</span>
		</div>
	);
}

export default ThemeToggle;
