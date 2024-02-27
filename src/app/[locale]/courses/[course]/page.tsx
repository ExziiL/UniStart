"use client";

import React from "react";

import Breadcrumb from "@/frontend/components/breadcrumb";
import CourseReviews from "@/frontend/components/course-reviews";
import NoReviews from "@/frontend/components/course-reviews/no-reviews";
import DetailedCourseOverview from "@/frontend/components/detailed-course-overview";
import { VORLESUNGEN } from "@/frontend/constants/vorlesungen";
import { VorlesungProps } from "@/types/IVorlesung";
import Link from "next/link";

interface PageProps {
	params: {
		locale: string;
		course: VorlesungProps["slug"];
	};
}

function Page({ params }: PageProps) {
	const vorlesung = VORLESUNGEN.find((vorlesung) => vorlesung.slug === params.course);
	const numOfReviews = vorlesung?.reviews.length || 0;

	if (!vorlesung) {
		// TODO: add (custom) 404 page
		return (
			<div className="flex flex-col gap-4">
				<h1 className="text-xl font-semibold text-primary">405 - Vorlesung Not Found</h1>
				<p className="text-primary">{`Oops! The page you're looking for doesn't exist.`}</p>
				<p className="text-primary">{`You may want to head back to the homepage. If you think something is broken, report a problem.`}</p>
				<div>
					<Link href="/">Go Home</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="col-start-2 flex flex-col gap-8">
			<Breadcrumb sections={["Vorlesungen", vorlesung.name]} />

			<DetailedCourseOverview
				vorlesung={vorlesung}
				className=" mb-8"
			/>

			{numOfReviews == 0 ? (
				<NoReviews numOfReviews={numOfReviews} />
			) : (
				<CourseReviews reviews={vorlesung.reviews} />
			)}
		</div>
	);
}

export default Page;
