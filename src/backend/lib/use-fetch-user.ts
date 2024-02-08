// import { userDispatch } from '@/context/user-context'
import { getSession } from 'next-auth/react';
import { useUserContext } from '@/context/user-context/user-context';


export const useFetchUser = () => {
    const { userDispatch } = useUserContext();

    const fetchUser = async () => {

        try {
            const session = await getSession();
            
            const response = await fetch('/api/user',
            {
                method: 'POST', headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(session?.user?.email)
            });
            
            const user = await response.json();
            
            userDispatch({ type: 'SET_USER', payload: user })
        } catch (error) {
            
        }
    }

    return fetchUser
}