"use client";

import { useUserContext } from "@/context/user-context/user-context";
import { useFetchUser } from "@/frontend/hooks/use-fetch-user";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const { data: session } = useSession();
	const { fetchUser } = useFetchUser();

	useEffect(() => {
		if (session) fetchUser(session);
	}, [session]);

	return children;
};

export default AuthProvider;
