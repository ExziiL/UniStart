'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			enableColorScheme={true}
			// defaultTheme="system"
			// enableSystem
			// disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
