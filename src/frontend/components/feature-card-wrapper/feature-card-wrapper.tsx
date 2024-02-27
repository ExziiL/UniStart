"use client";

import FeatureCard from "@/frontend/components/feature-card";
import { Variants, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useHover } from "usehooks-ts";

function FeatureCardWrapper({ feature }: { feature: { title: string; description: string; href: string } }) {
	const hoverRef = React.useRef<HTMLDivElement>(null);
	const isHovered = useHover(hoverRef);

	const arrowVariants: Variants = {
		tapped: { x: 3 },
		initial: { x: -5, opacity: 0 },
		hovered: { x: -1, opacity: 1 },
	};

	return (
		<motion.div
			whileHover={{ y: -2 }}
			className="cursor-pointer rounded-lg"
			key={feature.title}
			ref={hoverRef}
		>
			<Link
				href={feature.href}
				passHref
			>
				<FeatureCard key={feature.title}>
					<FeatureCard.Title>
						<div className="flex w-full flex-row items-start pt-2 text-base text-primary">
							{feature.title}
						</div>
						<p className="pr-2 text-sm text-ultra-light">{feature.description}</p>
					</FeatureCard.Title>
				</FeatureCard>
			</Link>
		</motion.div>
	);
}

export default FeatureCardWrapper;
