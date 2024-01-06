import * as z from 'zod';
import { registrationFormSchema } from './registration-form';
import { signIn } from 'next-auth/react';
import { Session } from 'next-auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

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

    return await fetch('api/register', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                name: values.username,
                email: values.email,
                password: values.password
            })
    })

}

export async function registerGraph(session: Session | null, router: AppRouterInstance) {
    if (!session) throw new Error("session is required");
    const res = await fetch('api/graph', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: session?.user?.email })
    });

    if (res.ok) {
        router.replace("/")
    }
}