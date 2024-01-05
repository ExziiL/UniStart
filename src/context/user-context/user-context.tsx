import User from "@/types/IUser";
import React from "react";

interface UserContextProps {
	// user: User;
	// setUser: (user: User) => void;
}

export const UserContext = React.createContext<UserContextProps>({});

interface ThemeContextProviderProps {
	children: React.ReactNode;
	initial?: User;
}

export const UserContextProvider: React.FC<ThemeContextProviderProps> = ({ children, initial }) => {
	// const [user, setUser] = React.useState<User>(initial);
	const [user, setUser] = React.useState(initial);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
