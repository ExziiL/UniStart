"use client";

import { Rating, SharedProps, Star } from "@smastrom/react-rating";
import React from "react";

interface StarRatingProps extends SharedProps {
	numOfRating?: number;
	hideRatingNumber?: boolean;
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ numOfRating, hideRatingNumber, readOnly, style, value }) => {
	const [rating, setRating] = React.useState(0);

	const customStyles = {
		itemShapes: Star,

		itemStrokeWidth: 2,

		activeFillColor: "#D4D4D8",
		activeStrokeColor: "#AFAFB6",
		inactiveFillColor: "#FAFAFA",
		inactiveStrokeColor: "#D4D4D8",
	};

	return (
		<div className="flex items-center gap-2">
			<Rating
				value={rating ? rating : value}
				itemStyles={customStyles}
				style={style}
				onChange={setRating}
				readOnly={readOnly}
			/>

			<div className="flex items-center gap-2">
				<span className="pt-[2px] text-sm text-light">{hideRatingNumber ? null : value}</span>
				{numOfRating && <span className="pt-[2px] text-sm text-light">({numOfRating})</span>}
			</div>
		</div>
	);
};

export default StarRating;
