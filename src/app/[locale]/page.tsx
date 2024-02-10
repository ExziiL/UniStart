import Features from "@/frontend/components/features";
import Testimonials from "@/frontend/components/testimonials";
import { Button } from "@/frontend/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
	const t = useTranslations("Home");

	return (
		<div className="full-bleed flex flex-col items-center gap-32 px-4 py-16 lg:pt-32">
			<div className="flex max-w-[1024px] flex-col gap-16 md:flex-row">
				<div className="flex flex-col">
					<h1 className="text-4xl font-medium">{t("title")}</h1>
					<p className="pb-12 pt-6 text-light">{t("sub-heading")}</p>
					<Button className="w-fit">{t("button")}</Button>
				</div>
				<Image
					src="https://source.unsplash.com/random"
					alt={t("image-alt")}
					width={400}
					height={400}
					style={{ borderRadius: "8px", objectFit: "fill" }}
				/>
			</div>

			<Features />

			<div className="w-full">
				<Testimonials />
			</div>

			<div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
				<h1 className="text-4xl font-medium">{t("title")}</h1>
				<p className="max-w-[480px] pb-12 pt-6 text-light">{t("sub-heading")}</p>
				<Button className="w-fit">{t("button")}</Button>
			</div>
		</div>
	);
}
