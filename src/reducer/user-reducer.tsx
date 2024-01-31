import { UserGender, UserRole } from "@/enums/user";

export const initialUserState = {
	id: 1,
	// TODO: change the input into empty strings
	name: "(User)Name",
	email: "contactInfo@email",
	image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
	password: "password",

	role: UserRole.USER,
	firstName: "firstName",
	lastName: "lastName",

	profile: {
		bio: "This is the bio description for the user",
	},
	contactInfo: {
		age: 21,
		gender: UserGender.MALE,
		countryPrefix: 49,
		phone: "0123456789",
		address: {
			country: "contactInfo.address.country",
			city: "contactInfo.address.city",
			street: "contactInfo.address.street",
			houseNumber: 21,
			postalCode: "contactInfo.address.zipCode",
		},
	},
	university: {
		name: "university.name",
		faculty: "university.faculty",
		semester: 1,
		course: "university.course",
		focus: "university.focus",
		enrollment: "university.enrollment",
	},
	siteSettings: {
		theme: "light",
		language: "de",
	},
	privacySettings: {
		//* possible additions to the privacy settings
		// isEmailPublic: true,
		// isPhonePublic: true,
		// isAddressPublic: true,
		// isProfilePublic: true,
		// isActivityPublic: true,
		// isUniversityPublic: true,
		// isSiteSettingsPublic: true,
		// isPrivacySettingsPublic: true,
		hideOnlineStatus: false,
		verified: false,
	},
	createdAt: new Date(),
	updatedAt: new Date(),

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
