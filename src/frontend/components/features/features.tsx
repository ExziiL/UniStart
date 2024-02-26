import FeatureCardWrapper from "@/frontend/components/feature-card-wrapper";
import * as React from "react";

const features = [
	{
		title: "Course Overviews",
		image: "https://images.pexels.com/photos/6238039/pexels-photo-6238039.jpeg?auto=compress&cs=tinysrgb&w=800",
		alt: "Picture of the author",
		href: "/vorlesungen",
	},
	{
		title: "Course Reviews",
		image: "https://images.pexels.com/photos/9821386/pexels-photo-9821386.jpeg?auto=compress&cs=tinysrgb&w=800",
		alt: "Picture of the author",
		href: "/vorlesungen/grundlagen-der-mathematik",
	},
	{
		title: "Locations",
		image: "https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		alt: "Picture of the author",
		href: "/map",
	},
	{
		title: "Chat",
		image: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=800",
		alt: "Picture of the author",
		href: "/chat",
	},
	{
		title: "Ai-Chat",
		image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800",
		alt: "Picture of the author",
		href: "/ai-chat",
	},
	{
		title: "Frequently Asked Questions",
		image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
		alt: "Picture of the author",
		href: "/faq",
	},
];

function Features() {
	return (
		<div className="grid w-full max-w-[1024px] grid-cols-2 gap-6 sm:grid-cols-3">
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
