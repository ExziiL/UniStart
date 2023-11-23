'use client';

import React from 'react';

import { Rating, SharedProps } from '@smastrom/react-rating';

interface StarRatingProps {
	rating: number;
	maxRating?: SharedProps['items'];
	numOfRating?: number;
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating, numOfRating }) => {
	const [userRating, setUserRating] = React.useState(0);

	return (
		<div className="flex items-center gap-3">
			<Rating
				items={maxRating}
				style={{ maxWidth: 100 }}
				value={rating ? rating : userRating}
				onChange={setUserRating}
				readOnly
			/>
			<div className="flex items-center gap-2">
				<span className="pt-[2px] text-base font-medium">{rating}</span>
				{numOfRating && <span className="pt-[2px] text-sm text-zinc-400">({numOfRating})</span>}
			</div>
		</div>
	);
};

export default StarRating;
