"use client";

import Features from "@/frontend/components/features";
import Testimonials from "@/frontend/components/testimonials";
import { Button } from "@/frontend/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="full-bleed flex flex-col items-center gap-32 px-4 py-16 lg:pt-32">
			<div className="flex max-w-[1024px] flex-col gap-16 md:flex-row">
				<div className="flex flex-col">
					<h1 className="text-4xl font-medium">Explore & Engage: Your University Companion!</h1>
					<p className="pb-12 pt-6 text-light">
						Navigate your campus, connect with peers, and find your place in university life - all with
						ease!
					</p>
					<Button className="w-fit">Get started - it is free!</Button>
				</div>
				<Image
					src="https://source.unsplash.com/random"
					alt="Picture of the author"
					width={400}
					height={400}
					style={{ borderRadius: "8px", objectFit: "contain" }}
				/>
			</div>

			<Features />

			<div className="w-full">
				<Testimonials />
			</div>

			<div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center">
				<h1 className="text-4xl font-medium">Explore & Engage: Your University Companion!</h1>
				<p className="max-w-[480px] pb-12 pt-6 text-light">
					Navigate your campus, connect with peers, and find your place in university life - all with ease!
				</p>
				<Button className="w-fit">Get started - it is free!</Button>
			</div>
		</div>
	);
}
