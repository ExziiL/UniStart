import FeatureCardWrapper from "@/frontend/components/feature-card-wrapper";
import { useTranslations } from "next-intl";
import * as React from "react";

const features = [
	{
		title: "Courses",
		description:
			"A comprehensive overview of courses, allowing students to easily navigate through the academic offerings and plan their semester effectively.",
		alt: "Picture of the author",
		href: "/vorlesungen",
	},
	{
		title: "Schedule",
		description:
			"An extended summary that includes all essential dates and deadlines, providing a comprehensive schedule overview.",
		alt: "Calendar description",
		href: "/vorlesungen/grundlagen-der-mathematik",
	},
	{
		title: "Locations",
		description: "This page is not implemended, it simulates a error 404 page",
		alt: "Picture of the author",
		href: "/map",
	},
	{
		title: "Chat",
		description:
			"Connect with peers and professors in real-time to discuss course material and collaborate on projects.",
		alt: "Picture of the author",
		href: "/chat",
	},
	{
		title: "Ai-Chat",
		description:
			"Engage with our smart AI-driven chat system, designed to provide personalized assistance and support.",
		alt: "Picture of the author",
		href: "/ai-chat",
	},
	{
		title: "Frequently Asked Questions",
		description: "Find answers on navigating university life effectively.",
		alt: "Picture of the author",
		href: "/faq",
	},
];

function Features() {
	const t = useTranslations("Home.features");

	const features = [
		{
			title: t("feature1.title"),
			description:
				"A comprehensive overview of courses, allowing students to easily navigate through the academic offerings and plan their semester effectively.",
			href: t("feature1.href"),
		},
		{
			title: t("feature2.title"),
			description:
				"An extended summary that includes all essential dates and deadlines, providing a comprehensive schedule overview.",
			href: t("feature2.href"),
		},
		{
			title: t("feature3.title"),
			description: "This page is not implemended, it simulates a error 404 page",
			href: t("feature3.href"),
		},
		{
			title: t("feature4.title"),
			description:
				"Connect with peers and professors in real-time to discuss course material and collaborate on projects.",
			href: t("feature4.href"),
		},
		{
			title: t("feature5.title"),
			description:
				"Engage with our smart AI-driven chat system, designed to provide personalized assistance and support.",
			href: t("feature5.href"),
		},
		{
			title: t("feature6.title"),
			description: "Find answers on navigating university life effectively.",
			href: t("feature6.href"),
		},
	];

	return (
		<div className="grid w-full max-w-[1024px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
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
