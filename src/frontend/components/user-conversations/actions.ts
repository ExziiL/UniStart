import User from "@/types/IUser";

const fetchUsers = async (id: string | number) => {

    const response = await fetch('api/conversationusers', {
        method: 'POST',
        headers: { 'Content-Type': 'application' },
        body: JSON.stringify(id)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

const createConversation = async (users: string[]) => {
    if (users.length < 2) throw new Error("No User selected vor conversation");
    const response = await fetch('api/conversations',
        {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ members: users, isgroup: users.length > 2 }
            )
        });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

const fetchConversation = async (userid: string) => {
    const response = await fetch('api/conversations',
        {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: userid })
        });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

const fetchMessages = async (conversationid: string) => {
    const response = await fetch('api/messages', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationid: conversationid })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

export { fetchUsers, createConversation, fetchConversation, fetchMessages }