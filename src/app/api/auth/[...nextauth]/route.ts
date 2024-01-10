import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"
import prisma from "@/backend/lib/prisma";
import { createNode } from "@/frontend/components/registration-card/registration";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                const { email, password } = credentials;

                try {
                    const user = await prisma.user.findUnique({
                        where: { email: email }
                    })

                    if (!user || !user?.password) {
                        throw new Error("Invalide credentials")
                    }
                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!passwordMatch) {
                        throw new Error("Invalide credentials");
                    }

                    return user;
                } catch (error) {
                    throw new Error("Something went wrong: \n" + error)
                }


            },
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    events: {
        createUser: async (data) => {
            console.log("User created");  
            
            const baseUrl = process.env.VERCEL_URL ?? process.env.NEXTAUTH_URL!

            await createNode(data.user, baseUrl);
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }