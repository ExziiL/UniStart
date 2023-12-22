import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import '@smastrom/react-rating/style.css';

import Navigation from '@/frontend/components/navigation';
import ThemeProvider from '@/frontend/components/theme-provider';
import { Toaster } from '@/frontend/components/ui/toaster';
import { AuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navigation />
						<main className="mx-auto max-w-[960px]">
							{children}
							<SpeedInsights />
							<Toaster />
						</main>
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
