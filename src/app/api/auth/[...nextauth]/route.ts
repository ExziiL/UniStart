import prisma from "@/backend/lib/prisma";
import { setOnlineState } from "@/frontend/components/login-card/actions";
import { createNode } from "@/frontend/components/registration-card/actions";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
	pages: {
		signIn: "/terminplan",
	},
	callbacks: {
		// async signIn({ user, account, profile, email, credentials }) {
		// 	const isAllowedToSignIn = true;
		// 	if (isAllowedToSignIn) {
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}
		// },
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username_email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.username_email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}
				const { username_email, password } = credentials;

				try {
					const user = await prisma.user.findFirst({
						where: {
							OR: [{ email: username_email }, { name: username_email }],
						},
					});

					if (!user || !user?.password) {
						throw new Error("Invalide credentials");
					}
					const passwordMatch = await bcrypt.compare(password, user.password);

					if (!passwordMatch) {
						throw new Error("Invalide credentials");
					}

					return user;
				} catch (error) {
					throw new Error("Something went wrong: " + error);
				}
			},
		}),
	],
	debug: process.env.NODE_ENV === "development",
	events: {
		signIn: async (data) => {
			const online = true;
			await setOnlineState(data.user.email!, online);
		},
		signOut: async (data) => {
			const online = false;

			if (data.session && data.session.user) {
				await setOnlineState(data.session.user?.email!, online);
			}
		},
		createUser: async (data) => {
			const baseUrl = process.env.VERCEL_URL ?? process.env.NEXTAUTH_URL!;
			await createNode(data.user, baseUrl);
		},
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
