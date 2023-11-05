'use client';

import React from 'react';

import { Rating } from '@smastrom/react-rating';

function StarRating() {
	const [rating, setRating] = React.useState(0);

	console.log(rating);

	return (
		<Rating
			style={{ maxWidth: 100 }}
			value={rating}
			onChange={setRating}
		/>
	);
}

export default StarRating;
