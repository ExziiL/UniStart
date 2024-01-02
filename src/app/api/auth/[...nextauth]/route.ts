import { connectMongo } from "@/backend/lib/mongo";
import User from "@/backend/models/user";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "name", type: "text" },
                password: { label: "password", type: "password" }
            },


            async authorize(credentials) {
                console.log("Credentials: ", credentials);
                const { name, password } = credentials as { name: string, password: string };

                try {
                    await connectMongo();
                    const user = await User.findOne({ name });

                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
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