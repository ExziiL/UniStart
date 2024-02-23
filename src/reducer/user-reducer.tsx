import User from "@/types/IUser";

const userReducer = (state: User, action: any) => {
	const initialUserState: User = { id: "0", name: "", email: "", image: "" };

	const user = action.payload?.user;

	switch (action.type) {
		case "SET_USER":
			return {
				...user,
			};
		// hier weitere cases einfügen
		case "CLEAR_USER":
			return {
				...initialUserState,
			};
		// case "ADD_USER":
		// ...

		// case "REMOVE_USER":
		// ...

		// case "UPDATE_USER":
		// ...
		default:
			return state;
	}
};

export default userReducer;
