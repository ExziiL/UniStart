import FeatureCard from "@/frontend/components/feature-card";
import { motion } from "framer-motion";
import * as React from "react";

const features = [
	{
		title: "Course Overviews",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
	{
		title: "Course Reviews",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
	{
		title: "Locations",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
	{
		title: "Chat",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
	{
		title: "Ai-Chat",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
	{
		title: "Frequently Asked Questions",
		image: "https://source.unsplash.com/random",
		alt: "Picture of the author",
	},
];

function Features() {
	return (
		<div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
			{features.map((feature) => (
				<motion.div
					whileHover={{ y: -7.5 }}
					className="rounded-lg"
					key={feature.title}
				>
					<FeatureCard key={feature.title}>
						<FeatureCard.Image
							src={feature.image}
							alt={feature.alt}
						/>
						{/* die div hier unten ist das Gradient */}
						<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-lg bg-gradient-to-t from-zinc-900 via-transparent" />
						<FeatureCard.Title>{feature.title}</FeatureCard.Title>
					</FeatureCard>
				</motion.div>
			))}
		</div>
	);
}

export default Features;
