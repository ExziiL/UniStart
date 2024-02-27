"use client";

import { Rating, SharedProps } from "@smastrom/react-rating";
import React from "react";

interface StarRatingProps extends SharedProps {
	numOfRating?: number;
	hideRatingNumber?: boolean;
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ numOfRating, hideRatingNumber, readOnly, value, style }) => {
	const [rating, setRating] = React.useState(value);

	return (
		<div className="flex items-center gap-2">
			<Rating
				value={rating}
				style={style}
				onChange={setRating}
				readOnly={readOnly}
			/>

			<div className="flex items-center gap-2">
				<span className="pt-[2px] text-sm text-light">{hideRatingNumber ? null : rating}</span>
				{numOfRating && <span className="pt-[2px] text-sm text-light">({numOfRating})</span>}
			</div>
		</div>
	);
};

export default StarRating;
