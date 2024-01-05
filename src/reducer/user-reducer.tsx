export const initialState = {
	user: null,
};

// TODO: change the any here
const userReducer = (state = initialState, action: any) => {
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
