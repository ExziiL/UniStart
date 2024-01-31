import User from "@/types/IUser";

export async function send(user: User, message: string, convoId: string) {
    const res = await fetch('api/messages',
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: user.id, image: user.image, message: message, convoId: convoId })
        })

    if (!res.ok) { throw new Error('Message did not send correctly\n' + res.body) }
    return res.json();
}