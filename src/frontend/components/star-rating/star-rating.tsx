'use client';

import React from 'react';

import { Rating, SharedProps } from '@smastrom/react-rating';

interface StarRatingProps {
	maxRating?: SharedProps['items'];
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ maxRating }) => {
	const [rating, setRating] = React.useState(0);

	return (
		<div className="flex items-center gap-2">
			<Rating
				items={maxRating}
				style={{ maxWidth: 100 }}
				value={rating}
				onChange={setRating}
			/>
			<span className="pt-[2px] text-base font-semibold">
				{rating} von {maxRating ? maxRating : 5}
			</span>
		</div>
	);
};

export default StarRating;
