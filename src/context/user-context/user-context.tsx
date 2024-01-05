import userReducer, { initialState } from "@/reducer/user-reducer";
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
	// const [user, setUser] = React.useState<User>(initial);
	const [state, dispatch] = React.useReducer(userReducer, initialState);

	return <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error("useUserContext must be used within a UserContextProvider");
	}

	return context;
}
