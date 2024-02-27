"use client";

import { UserContextProvider } from "@/context/user-context/user-context";
import { SessionProvider, useSession } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import AuthProvider from "../providers/AuthProvider";
import TanstackProvider from "../providers/TanstackProvider";

export function Providers({ children, ...props }: Readonly<ThemeProviderProps>) {
	return (
		<UserContextProvider>
			<SessionProvider>
				<AuthProvider>
					<TanstackProvider>
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
					</TanstackProvider>
				</AuthProvider>
			</SessionProvider>
		</UserContextProvider>
	);
}
