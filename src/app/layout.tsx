import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import "@smastrom/react-rating/style.css";

import AiQuickChat from "@/frontend/components/ai-quick-chat";
import Navigation from "@/frontend/components/navigation";
import TailwindIndictor from "@/frontend/components/tailwind-indictor";
import { Toaster } from "@/frontend/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<Providers>
					<Navigation />
					<main className="wrapper">
						{children}
						<SpeedInsights />
						<Toaster />
					</main>
					<AiQuickChat />
					<TailwindIndictor />
				</Providers>
			</body>
		</html>
	);
}
