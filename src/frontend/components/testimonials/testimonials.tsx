import Testimonial from "@/frontend/components/testimonial";
import * as React from "react";
import { InfiniteMovingCards } from "../infinite-moving-cards";

const testimonials = [
	{
		quote: "Rise has made managing my day effortless. We have used it across our team and had definitely helped finding the best time to meet and ensure we are not wasting time during some of our busiest hours.",
		name: "Max Mustermann",
		title: "CEO at Pepsi",
	},
	{
		quote: "As a current student at Aalen University, I've been continuously impressed by the wealth of resources and opportunities available. The diverse course offerings allow me to tailor my education to my interests, while the passionate faculty and vibrant campus life make every day a new adventure. It's a place where curiosity is nurtured and dreams are turned into reality.",
		name: "Tobi Lütke",
		title: "Alumni at Aalen University",
	},
	{
		quote: " The university's focus on holistic development, safety, and supportive environment ensures that students not only excel academically but also grow personally.",
		name: "Maria Ehrich",
		title: "Student",
	},
	{
		quote: "Coming to Aalen University from abroad, I found a welcoming and inclusive community. The multicultural environment has allowed me to learn about different cultures while sharing my own. The support services for international students have made my transition smooth, and I've found a home away from home here.",
		name: "Amro Albanna",
		title: "International Student",
	},
];

function Testimonials() {
	return (
		<div className="flex w-full justify-center">
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

export default Testimonials;
