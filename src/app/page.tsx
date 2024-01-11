"use client";

import FeatureCard from "@/frontend/components/feature-card";
import Testimonials from "@/frontend/components/testimonials";
import { Button } from "@/frontend/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Home() {
	return (
		<div className="flex flex-col gap-32 py-16 lg:pt-32">
			<div className="flex flex-col gap-16 md:flex-row">
				<div className="flex flex-col">
					<h1 className="text-4xl font-medium">Introducing your University Helper</h1>
					<p className="pb-8 pt-4 text-light">
						Feeling Lost? Our Application helps you finding your place in on your university campus
					</p>
					<Button className="w-fit">Get started</Button>
				</div>
				<Image
					src="https://source.unsplash.com/random"
					alt="Picture of the author"
					width={400}
					height={400}
					style={{ borderRadius: "8px", objectFit: "contain" }}
				/>
			</div>

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

			<div>
				<Testimonials />
			</div>
		</div>
	);
}
