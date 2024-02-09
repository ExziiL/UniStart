
"use client";

import { useSession } from "next-auth/react"
import { ReactNode, useEffect } from "react";
import { useFetchUser } from "@/frontend/hooks/use-fetch-user";
import { useUserContext } from "@/context/user-context/user-context";

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { data: session } = useSession();
    const { fetchUser } = useFetchUser();

    useEffect(() => {
        if (session) fetchUser(session)
    }, [session, fetchUser])

    return children
}

export default AuthProvider;
