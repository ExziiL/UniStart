import Testimonial from "@/frontend/components/testimonial";
import { useTranslations } from "next-intl";
import * as React from "react";
import InfiniteMovingCards from "../infinite-moving-cards";

function Testimonials() {
	const t = useTranslations("Home.testimonials");

	const testimonials = [
		{
			quote: t("testimonial1.quote"),
			name: t("testimonial1.name"),
			title: t("testimonial1.title"),
		},
		{
			quote: t("testimonial2.quote"),
			name: t("testimonial2.name"),
			title: t("testimonial2.title"),
		},
		{
			quote: t("testimonial3.quote"),
			name: t("testimonial3.name"),
			title: t("testimonial3.title"),
		},
		{
			quote: t("testimonial4.quote"),
			name: t("testimonial4.name"),
			title: t("testimonial4.title"),
		},
	];

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
