import { UserGender, UserRole } from '@/enums/user';

// interface UserProfile {
//     bio: string,
// }

// interface UserAddress {
//     country: string,
//     city: string,
//     street: string,
//     streetNumber: number,
//     houseNumber: number,
//     postalCode: number,
// }

// interface UserContactInfo {
//     countryPrefix: number,
//     phone: string,
//     email: string,
//     address: UserAddress,
// }

// interface User {
//     uuid: number,
//     firstName: string,
//     lastName: string,
//     age: number,
//     gender?: UserGender.MALE,
//     password: string,
//     role: UserRole.USER,
//     lastActivity?: Date,
//     accountCreated?: Date,
//     avatarImage?: string,

//     profile?: UserProfile,
//     contactInfo?: UserContactInfo,
//     universityInfo?: {
//         semester: number,
//         course: Course.WEBENTWICKLUNG,
//         focus: Focus.SOFTWARE_ENGINEERING,
//         enrollmendDate: Date,
//     }


//     siteSettings?: {
//         darkModeEnabled: boolean,
//         languageSettings: string,
//     },
//     friends?: number[],
// }

/* interface User {
	uuid: number,
	// TODO: change the input into empty strings
	name: string,
	email: string,
	firstName?: string,
	lastName?: string,
	age?: number,
	gender: string,
	password?: string,
	role: string,
	profile?: {
		profilePicture: {
			avatarUrl: string,
		},
		bio: string,
	},
	contactInfo: {
		countryPrefix?: number,
		phone?: string,
		// email: string,
		address?: {
			country: string,
			city: string,
			street: string,
			houseNumber: number,
			zipCode: string,
		},
	},
	activity?: {
		isOnline: Boolean,
		lastActivity: Date,
		accountCreated: Date,
	},
	university?: {
		name: string,
		faculty: string,
		course: string,
		focus: string,
		enrollment: string,
		semester: number,
	},
	siteSettings?: {
		theme: string,
		language: string,
	},
	privacySettings?: {
		//* possible additions to the privacy settings
		// isEmailPublic: true,
		// isPhonePublic: true,
		// isAddressPublic: true,
		// isProfilePublic: true,
		// isActivityPublic: true,
		// isUniversityPublic: true,
		// isSiteSettingsPublic: true,
		// isPrivacySettingsPublic: true,
		hideOnlineStatus: Boolean,
		verified: Boolean,
	},
} */

interface User {
	uuid: number,
	name: string,
	email: string,
	image: string,
	password?: string,

	role?: string,
	firstName?: string,
	lastName?: string,
	
	
	profile?: {
		bio: string,
	},
	contactInfo: {
		age?: number,
		gender?: string,
		countryPrefix?: number,
		phone?: string,
		address?: {
			country: string,
			city: string,
			street: string,
			houseNumber: number,
			postalCode: string,
		},
	},
	universityInfo?: {
		name: string,
		faculty: string,
		semester: number,
		course: string,
		focus: string,
		enrollment: Date,
	},
	siteSettings?: {
		theme: string,
		language: string,
	},
	privacySettings?: {
		//* possible additions to the privacy settings
		// isEmailPublic: true,
		// isPhonePublic: true,
		// isAddressPublic: true,
		// isProfilePublic: true,
		// isActivityPublic: true,
		// isUniversityPublic: true,
		// isSiteSettingsPublic: true,
		// isPrivacySettingsPublic: true,
		hideOnlineStatus: boolean,
		verified: boolean,
	},
	createdAt?: Date,
	updatedAt?: Date,
}

export default User;
