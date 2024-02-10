import FeatureCardWrapper from "@/frontend/components/feature-card-wrapper";
import { useTranslations } from "next-intl";
import * as React from "react";

function Features() {
	const t = useTranslations("Home.features");

	const features = [
		{
			title: t("feature1.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature1.alt"),
			href: "/vorlesungen",
		},
		{
			title: t("feature2.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature1.alt"),
			href: "/vorlesungen/grundlagen-der-mathematik",
		},
		{
			title: t("feature3.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature3.alt"),
			href: "/map",
		},
		{
			title: t("feature4.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature4.alt"),
			href: "/chat",
		},
		{
			title: t("feature5.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature5.alt"),
			href: "/ai-chat",
		},
		{
			title: t("feature6.title"),
			image: "https://source.unsplash.com/random",
			alt: t("feature6.alt"),
			href: "/faq",
		},
	];

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
