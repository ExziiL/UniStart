"use client";

import { Rating, SharedProps } from "@smastrom/react-rating";
import React from "react";

interface StarRatingProps {
	rating: number;
	maxRating?: SharedProps["items"];
	numOfRating?: number;
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating, numOfRating }) => {
	const [userRating, setUserRating] = React.useState(0);

	return (
		<div className="flex items-center gap-2">
			<Rating
				items={maxRating}
				style={{ maxWidth: 100 }}
				value={rating ? rating : userRating}
				onChange={setUserRating}
				readOnly
			/>

			<div className="flex items-center gap-2">
				<span className="pt-[2px] text-sm text-light">{rating}</span>
				{numOfRating && <span className="pt-[2px] text-sm text-light">({numOfRating})</span>}
			</div>
		</div>
	);
};

export default StarRating;
