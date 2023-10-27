import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col">
			<Link href={'/registration'}>Go to Registration</Link>
			<Link href={'/login'}>Go to Login</Link>
			<Link href={'/terminplan'}>Go to Terminplan</Link>
		</div>
	);
}
