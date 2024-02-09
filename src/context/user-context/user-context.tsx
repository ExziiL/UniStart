import userReducer from "@/reducer/user-reducer";
import User from "@/types/IUser";
import React from "react";

interface UserContextProps {
	userState: User ;
	userDispatch: React.Dispatch<any>;
}

export const UserContext = React.createContext<UserContextProps | undefined>(undefined);

interface UserContextProviderProps {
	children: React.ReactNode;
	initial?: User;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children, initial }) => {
	// das ist der useReducer Hook aus React, der den state und die dispatch Funktion zurückgibt, nicht zu verwechseln mit dem userReducer aus src/reducer/user-reducer.tsx
	const initialState: User = {id: 0, name: '', email: '', image: ''};

	const [state, dispatch] = React.useReducer(userReducer, initialState);

	const value = React.useMemo(() => ({ userState: state, userDispatch: dispatch }), [state, dispatch])

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error("useUserContext must be used within a UserContextProvider");
	}

	return context;
}
