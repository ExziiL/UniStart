import StarRating from '@/frontend/components/star-rating';
import * as React from 'react';

function CourseOverviewCard() {
	return (
		<div>
			<h2>Grundlagen der Mathemaik</h2>
			<span>
				<p>Max Mustermann</p>
				<p>max.mustermann@hs-aalen.de</p>
			</span>
			<p className="">Eine Description über das Modul, von einem Studenten oder von uns geschrieben?</p>
			<StarRating />
			{/* <Pill /> */}
			Read more
		</div>
	);
}

export default CourseOverviewCard;
