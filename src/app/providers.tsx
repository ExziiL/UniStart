'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			enableColorScheme={true}
			// defaultTheme="system"
			enableSystem={false}
			// disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
