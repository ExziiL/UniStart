import React from "react";

import CourseReviews from "@/frontend/components/course-reviews";
import DetailedCourseOverview from "@/frontend/components/detailed-course-overview";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import { VorlesungProps } from "@/types/IVorlesung";
import Link from "next/link";

interface PageProps {
	params: {
		vorlesung: VorlesungProps["slug"];
	};
}

function Page({ params }: PageProps) {
	const vorlesung = VORLESUNGEN.find((vorlesung) => vorlesung.slug === params.vorlesung);

	if (!vorlesung) {
		// TODO: add (custom) 404 page
		return (
			<>
				<h1 className="text-xl font-semibold text-primary">404 - Vorlesung Not Found</h1>
				<p className="text-primary">{`Oops! The page you're looking for doesn't exist.`}</p>
				<p className="text-primary">{`You may want to head back to the homepage. If you think something is broken, report a problem.`}</p>
				<div>
					<Link href="/">Go Home</Link>
				</div>
			</>
		);
	}

	return (
		<div className="flex flex-col gap-16 p-4">
			<DetailedCourseOverview vorlesung={vorlesung} />
			<CourseReviews
				numOfReviews={vorlesung.numOfReviews}
				reviews={vorlesung.reviews}
			/>
		</div>
	);
}

export default Page;
