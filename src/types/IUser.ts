import { UserGender, UserRole } from '@/enums/user';

interface UserProfile {
    bio: string,
}

interface UserAddress {
    country: string,
    city: string,
    street: string,
    streetNumber: number,
    houseNumber: number,
    postalCode: number,
}

interface UserContactInfo {
    countryPrefix: number,
    phone: string,
    email: string,
    address: UserAddress,
}

interface User {
    uuid: number,
    firstName: string,
    lastName: string,
    age: number,
    gender?: UserGender.MALE,
    password: string,
    role: UserRole.USER,
    lastActivity?: Date,
    accountCreated?: Date,
    avatarImage?: string,

    profile?: UserProfile,
    contactInfo?: UserContactInfo,
    universityInfo?: {
        semester: number,
        course: Course.WEBENTWICKLUNG,
        focus: Focus.SOFTWARE_ENGINEERING,
        enrollmendDate: Date,
    }


    siteSettings?: {
        darkModeEnabled: boolean,
        languageSettings: string,
    },
    friends?: number[],
}

export default User;
