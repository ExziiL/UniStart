import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
	const session = await getServerSession(authOptions);

	//if (session) redirect('/ ')

	return (
		<div className="flex flex-col">
			<Link href={'/registration'}>Go to Registration</Link>
			<Link href={'/login'}>Go to Login</Link>
			<Link href={'/terminplan'}>Go to Terminplan</Link>
			<Link href={'/vorlesungen'}>Go to Vorlesungen</Link>
		</div>
	);
}
