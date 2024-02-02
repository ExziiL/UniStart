"use client";

import FeatureCard from "@/frontend/components/feature-card";
import { Variants, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { useHover } from "usehooks-ts";

function FeatureCardWrapper({ feature }: { feature: { title: string; image: string; alt: string } }) {
	const hoverRef = React.useRef<HTMLDivElement>(null);
	const isHovered = useHover(hoverRef);

	const arrowVariants: Variants = {
		tapped: { x: 3 },
		initial: { x: -5, opacity: 0 },
		hovered: { x: -1, opacity: 1 },
	};

	return (
		<motion.div
			whileHover={{ y: -1.5 }}
			className="cursor-pointer rounded-lg"
			key={feature.title}
			ref={hoverRef}
		>
			<FeatureCard key={feature.title}>
				<FeatureCard.Image
					src={feature.image}
					alt={feature.alt}
				/>
				{/* die div hier unten ist das Gradient */}
				<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-lg bg-gradient-to-t from-zinc-900 via-transparent" />

				<FeatureCard.Title>
					<div className="flex w-full flex-row items-center">
						{feature.title}

						{/* ab hier */}
						<motion.span
							variants={arrowVariants}
							initial="initial"
							animate={isHovered ? "hovered" : "initial"}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
							whileTap="tapped"
							className="pl-2"
						>
							<ArrowRight
								size={20}
								strokeWidth={2}
							/>
						</motion.span>
						{/* bis hier */}
					</div>
				</FeatureCard.Title>
			</FeatureCard>
		</motion.div>
	);
}

export default FeatureCardWrapper;
