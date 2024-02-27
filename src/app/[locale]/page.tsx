import Features from "@/frontend/components/features";
import Testimonials from "@/frontend/components/testimonials";
import { Button } from "@/frontend/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import graduationHat from "../../../public/graduation-hats.svg";

export default function Home() {
	const t = useTranslations("Home");

	return (
		<div className="full-bleed flex flex-col items-center gap-20 px-4 py-16 md:gap-28 lg:pt-10">
			<div className="flex max-w-[1024px] flex-col md:flex-row md:gap-24">
				<div className="flex flex-col md:justify-center">
					<h1 className="text-4xl font-medium">{t("title")}</h1>
					<p className="pb-12 pt-6 text-light">{t("sub-heading")}</p>
					<Button className="w-fit">
						<Link href="/registration">{t("button")}</Link>
					</Button>
				</div>
				<div className="hidden w-1/2 md:block">
					<Image
						priority
						src={graduationHat}
						alt="Picture of the author"
					/>
					<a
						href="https://storyset.com/education"
						className="text-xs text-ultra-light"
					>
						{t("illustration")}
					</a>
				</div>
			</div>

			<Features />

			<div className="w-full">
				<Testimonials />
			</div>

			<div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
				<h1 className="text-4xl font-medium">{t("title")}</h1>
				<p className="max-w-[480px] pb-12 pt-6 text-light">{t("sub-heading")}</p>
				<Button className="w-fit">
					<Link href="/registration">{t("button")}</Link>
				</Button>
			</div>
		</div>
	);
}
