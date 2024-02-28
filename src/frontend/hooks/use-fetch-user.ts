// import { userDispatch } from '@/context/user-context'
import { useUserContext } from "@/context/user-context/user-context";
import { Session } from "next-auth";

export const useFetchUser = () => {
	const { userDispatch } = useUserContext();

	const fetchUser = async (session: Session) => {
		try {
			// const response = await fetch(pathname + '/api-calls/user', {
			const response = await fetch("/api-calls/user", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: session?.user?.email }),
			});

			const user = await response.json();
			userDispatch({ type: "SET_USER", payload: { ...user } });
		} catch (error) {
			userDispatch({ type: "CLEAR_USER" });
		}
	};

	return { fetchUser };
};
