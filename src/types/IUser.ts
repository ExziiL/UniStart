import { UserGender, UserRole } from '@/enums/user';

interface UserProfile {
    avatar: string;
    bio: string;
}

interface UserAddress {
    country: string;
    city: string;
    street: string;
    streetNr: number;
    postalCode: number;
}

interface UserContactInfo {
    phone: string;
    address: UserAddress;
}

interface UserPrivacySettings {
    showLastSeen: boolean;
}

interface UserChatSettings {
    isOnline: boolean;
    lastSeen: string;
    privacySettings: UserPrivacySettings;
}

interface UserMessage {
    conversationId: string;
    text: string;
    date: string;
    seen: boolean;
}

interface User {
    uuid: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: UserGender.MALE;
    password: string;
    role: UserRole.USER,
    profile?: UserProfile;

    email: string;
    contactInfo?: UserContactInfo;
    chatSettings: UserChatSettings;
    messages?: UserMessage[];
    friends?: number[];
}

export default User;
