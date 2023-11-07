import React from 'react';

import { VORLESUNGEN } from '@/frontend/constants/vorlesungen';

interface PageProps {
	params: {
		vorlesung: string;
	};
}

function Page({ params }: PageProps) {
	const correctVorlesung = VORLESUNGEN.find((vorlesung) => vorlesung.slug === params.vorlesung);

	console.log(params);
	return <div className="">{correctVorlesung ? correctVorlesung.name : 'vorlesung not found'}</div>;
}

export default Page;
