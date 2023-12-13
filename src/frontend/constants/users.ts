const USERS = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john.doe@gmail.com',
        profile: {
            avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            bio: 'About me ...'
        },
        contactInfo: {
            phone: '+49 234 567 890',
            address: {
                country: 'Germany',
                city: 'Aalen',
                street: 'Burrenweg',
                streetNr: 12,
                postalCode: 73430
            }
        },
        chatSettings: {
            isOnline: true,
            lastSeen: '2020-10-10T12:00:00.000Z',
            privacySettings: {
                showLastSeen: true,
            },
        },
        messages: [
            {
                conversationId: 'conv123', // Identifier for the conversation
                text: 'Hello, how are you?',
                date: '2020-10-10T12:00:00.000Z',
                seen: true, 
            }
        ],
        friends: [2, 3, 4]
    },
    {
        id: 2,
        name: 'Alice Smith',
        age: 30,
        email: 'alice.smith@example.com',
        profile: {
            avatar: 'https://www.gravatar.com/avatar/somehash',
            bio: 'Explorer of new technologies'
        },
        contactInfo: {
            phone: '+49 234 678 901',
            address: {
                country: 'Germany',
                city: 'Berlin',
                street: 'Kurfürstendamm',
                streetNr: 100,
                postalCode: 10709
            }
        },
        chatSettings: {
            isOnline: false,
            lastSeen: '2020-11-10T15:00:00.000Z',
            privacySettings: {
                showLastSeen: false,
            },
        },
        messages: [
            {
                conversationId: 'conv456',
                text: 'Are we meeting tomorrow?',
                date: '2020-11-10T15:00:00.000Z',
                seen: false,
            }
        ],
        friends: [1, 3]
    },
    {
        id: 3,
        name: 'Bob Johnson',
        age: 28,
        email: 'bob.johnson@example.com',
        profile: {
            avatar: 'https://www.gravatar.com/avatar/differenthash',
            bio: 'Passionate about music and coding'
        },
        contactInfo: {
            phone: '+49 234 987 654',
            address: {
                country: 'Germany',
                city: 'Munich',
                street: 'Maximilianstraße',
                streetNr: 20,
                postalCode: 80539
            }
        },
        chatSettings: {
            isOnline: true,
            lastSeen: '2020-12-01T09:00:00.000Z',
            privacySettings: {
                showLastSeen: true,
            },
        },
        messages: [
            {
                conversationId: 'conv789',
                text: "Let's discuss the project updates",
                date: '2020-12-01T09:00:00.000Z',
                seen: true,
            }
        ],
        friends: [1, 2]
    },
    {
        id: 4,
        name: 'Emily Turner',
        age: 32,
        email: 'emily.turner@example.com',
        profile: {
            avatar: 'https://www.gravatar.com/avatar/uniquehash1',
            bio: 'Digital artist and tech enthusiast'
        },
        contactInfo: {
            phone: '+49 345 678 901',
            address: {
                country: 'Germany',
                city: 'Frankfurt',
                street: 'Zeil',
                streetNr: 22,
                postalCode: 60313
            }
        },
        chatSettings: {
            isOnline: true,
            lastSeen: '2020-11-15T13:00:00.000Z',
            privacySettings: {
                showLastSeen: true,
            },
        },
        messages: [
            {
                conversationId: 'conv102',
                text: 'Can you share the latest design files?',
                date: '2020-11-15T13:00:00.000Z',
                seen: true,
            }
        ],
        friends: [1, 3, 5]
    },
    {
        id: 5,
        name: 'David Brown',
        age: 27,
        email: 'david.brown@example.com',
        profile: {
            avatar: 'https://www.gravatar.com/avatar/uniquehash2',
            bio: 'Music lover and software developer'
        },
        contactInfo: {
            phone: '+49 345 987 650',
            address: {
                country: 'Germany',
                city: 'Hamburg',
                street: 'Reeperbahn',
                streetNr: 5,
                postalCode: 20359
            }
        },
        chatSettings: {
            isOnline: false,
            lastSeen: '2020-12-05T18:30:00.000Z',
            privacySettings: {
                showLastSeen: false,
            },
        },
        messages: [
            {
                conversationId: 'conv103',
                text: 'Looking forward to our meeting next week.',
                date: '2020-12-05T18:30:00.000Z',
                seen: false,
            }
        ],
        friends: [2, 4]
    }
]