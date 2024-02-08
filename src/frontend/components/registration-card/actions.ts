import * as z from 'zod';
import { registrationFormSchema } from './registration-form';
import { signIn } from 'next-auth/react';
import { User } from 'next-auth';

export async function register(action: string, values: z.infer<typeof registrationFormSchema> | null) {
   
    let response;
    switch (action) {
        case 'github': case 'google':
            response = await signIn(action, { redirect: false });
            break;
        case 'credentials':
            response = await emailRegister(values);
            break;
        default:
            console.error('Invalid action');
            break;
    }

    return response;
}

async function emailRegister(values: z.infer<typeof registrationFormSchema> | null) {
    if (!values) throw new Error('Invalid values');

    const userExists = await fetch('api/register?' +
        new URLSearchParams({ email: values.email }), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const { user } = await userExists.json();

    if (user) {
        console.error("user already exists");
        return;
    }

    const response = await fetch('api/register', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                name: values.username,
                email: values.email,
                password: values.password
            })
    })

    if (response.ok) {
        const { user } = await response.json()
        // console.log(user);

        await createNode(user);
    }
    return response;
}


export async function createNode(user: User, hostUrl = "") {
    const res = await fetch(hostUrl + 'api/graph', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user?.email })
    });

    if (!res.ok) {
        throw new Error("User Cretaion in Graph didn't work properly\n" + await res.json());
    }
}