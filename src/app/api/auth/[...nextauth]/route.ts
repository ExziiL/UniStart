import { connectMongo } from "@/backend/databases/mongo";
import User from "@/backend/models/user";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions: AuthOptions = {
    providers: [
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