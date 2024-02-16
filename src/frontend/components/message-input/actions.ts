import User from "@/types/IUser";

export async function send(user: User, message: string, convoId: string) {
    const res = await fetch('api/message',
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: user.image,
                message: message,
                conversationId: convoId,
                sender: user.id
            })
        })

    if (!res.ok) { throw new Error('Message did not send correctly\n' + res.body) }
    return res.json();
}