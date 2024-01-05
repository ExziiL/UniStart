import userReducer, { initialUserState } from "@/reducer/user-reducer";
import User from "@/types/IUser";
import React from "react";

interface UserContextProps {
	// user: User;
	// setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserContextProps>({});

interface UserContextProviderProps {
	children: React.ReactNode;
	initial?: User;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children, initial }) => {
	// das ist der useReducer Hook aus React, der den state und die dispatch Funktion zurückgibt, nicht zu verwechseln mit dem userReducer aus src/reducer/user-reducer.tsx
	const [state, dispatch] = React.useReducer(userReducer, initialUserState);

	return <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error("useUserContext must be used within a UserContextProvider");
	}

	return context;
}
