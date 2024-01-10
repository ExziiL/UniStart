"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import AuthProvider from './providers/AuthProvider';
import TanstackProvider from './providers/TanstackProvider';
import { UserContextProvider } from "@/context/user-context/user-context";

export function Providers({ children, ...props }: Readonly<ThemeProviderProps>) {
	return (
		<AuthProvider>
			<TanstackProvider>
				<UserContextProvider>
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
				</UserContextProvider>
			</TanstackProvider>
		</AuthProvider>

	);
}
