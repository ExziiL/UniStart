import React from 'react';

import { VORLESUNGEN } from '@/frontend/constants/vorlesungen';
import Link from 'next/link';

interface PageProps {
	params: {
		vorlesung: string;
	};
}

function Page({ params }: PageProps) {
	const vorlesung = VORLESUNGEN.find((vorlesung) => vorlesung.slug === params.vorlesung);

	if (!vorlesung) {
		// TODO: add (custom) 404 page
		return (
			<>
				<h1 className="text-xl font-semibold">404 - Vorlesung Not Found</h1>
				<p>Oops! The page you're looking for doesn't exist.</p>
				<p>You may want to head back to the homepage. If you think something is broken, report a problem.</p>
				<div>
					<Link href="/">Go Home</Link>
				</div>
			</>
		);
	}

	return <div className="">{vorlesung.name}</div>;
}

export default Page;
