import Testimonial from "@/frontend/components/testimonial";
import * as React from "react";

const testimonials = [
	{
		text: "Rise has made managing my day effortless. We have used it across our team and had definitely helped finding the best time to meet and ensure we are not wasting time during some of our busiest hours.",
		name: "Max Mustermann",
		company: "CEO at Pepsi",
	},
	{
		text: "As a current student at Aalen University, I've been continuously impressed by the wealth of resources and opportunities available. The diverse course offerings allow me to tailor my education to my interests, while the passionate faculty and vibrant campus life make every day a new adventure. It's a place where curiosity is nurtured and dreams are turned into reality.",
		name: "Tobi Lütke",
		company: "Alumni at Aalen University",
	},
	{
		text: " The university's focus on holistic development, safety, and supportive environment ensures that students not only excel academically but also grow personally.",
		name: "Maria Ehrich",
		company: "Student",
	},
	{
		text: "Coming to Aalen University from abroad, I found a welcoming and inclusive community. The multicultural environment has allowed me to learn about different cultures while sharing my own. The support services for international students have made my transition smooth, and I've found a home away from home here.",
		name: "Amro Albanna",
		company: "International Student",
	},
];

function Testimonials() {
	return (
		<div className="flex w-full justify-center">
			{testimonials.map((testimonial) => (
				<Testimonial testimonial={testimonial} />
			))}
		</div>
	);
}

export default Testimonials;
