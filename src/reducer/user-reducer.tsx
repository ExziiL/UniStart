export const initialUserState = {
	uuid: 1,
	firstName: "firstName",
	lastName: "lastName",
	password: "password",
	lastActivity: new Date(),
	accountCreated: new Date(),
	role: UserRole.USER,
};

// TODO: change the any here
const userReducer = (state = initialUserState, action: any) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload,
			};
		// hier weitere cases einfügen
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
