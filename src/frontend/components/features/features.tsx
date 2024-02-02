import FeatureCardWrapper from "@/frontend/components/feature-card-wrapper";
import * as React from "react";

const features = [
	{
		title: "Course Overviews",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/vorlesungen",
	},
	{
		title: "Course Reviews",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/vorlesungen/grundlagen-der-mathematik",
	},
	{
		title: "Locations",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/map",
	},
	{
		title: "Chat",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/chat",
	},
	{
		title: "Ai-Chat",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/ai-chat",
	},
	{
		title: "Frequently Asked Questions",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
		href: "/faq",
	},
];

function Features() {
	return (
		<div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
			{features.map((feature) => (
				<FeatureCardWrapper
					key={feature.title}
					feature={feature}
				/>
			))}
		</div>
	);
}

export default Features;
