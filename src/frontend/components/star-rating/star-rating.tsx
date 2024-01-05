"use client";

import { Rating, SharedProps, Star } from "@smastrom/react-rating";
import { useTheme } from "next-themes";
import React from "react";

interface StarRatingProps extends SharedProps {
	numOfRating?: number;
	hideRatingNumber?: boolean;
}

// function StarRating({maxRating}) {
const StarRating: React.FC<StarRatingProps> = ({ numOfRating, hideRatingNumber, readOnly, value, style }) => {
	const [rating, setRating] = React.useState(value);
	const { theme } = useTheme();

	// add darkmode colors and apply them
	const customStyles = {
		itemShapes: Star,

		itemStrokeWidth: 2,

		activeFillColor: "#D4D4D8",
		activeStrokeColor: "#AFAFB6",
		inactiveFillColor: "#FAFAFA",
		inactiveStrokeColor: "#D4D4D8",
	};

	const customStylesDark = {
		itemShapes: Star,

		itemStrokeWidth: 2,

		activeFillColor: "#A1A1AA",
		activeStrokeColor: "#A1A1AA",
		inactiveFillColor: "#3F3F46",
		inactiveStrokeColor: "#52525B",
	};

	return (
		<div className="flex items-center gap-2">
			<Rating
				value={rating}
				itemStyles={theme === "light" ? customStyles : customStylesDark}
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
