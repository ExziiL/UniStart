import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Link href={'/registration'}>Go to registration</Link>
		</div>
	);
}
