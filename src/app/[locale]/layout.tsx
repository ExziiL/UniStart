import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import "@smastrom/react-rating/style.css";

import AiQuickChatTrigger from "@/frontend/components/ai-quick-chat-trigger";
import Navigation from "@/frontend/components/navigation";
import TailwindIndictor from "@/frontend/components/tailwind-indictor";
import { Toaster } from "@/frontend/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: "en" | "de" };
}) {
	const messages = useMessages();

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<Navigation />
						<main className="wrapper">
							{children}
							<SpeedInsights />
							<Toaster />
							<AiQuickChatTrigger />
						</main>
						<TailwindIndictor />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
