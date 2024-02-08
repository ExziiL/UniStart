import { User } from 'next-auth';

export async function setOnlineState(email: String, isonline: boolean) {
    const res = await fetch('api/online',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ useremail: email, online: isonline })
        })

    if (!res.ok) {
        throw new Error("Fail setting online state: \n" + await res.json());
    }

    return res.json();
}