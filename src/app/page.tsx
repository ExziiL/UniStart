import FeatureCard from "@/frontend/components/feature-card";
import { Button } from "@/frontend/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col gap-16 py-16">
			<div className="flex flex-row">
				<div>
					<h1>Introducing your University Helper</h1>
					<p>Feeling Lost? Our Application helps you finding your place in on your university campus</p>
					<Button>Get started</Button>
				</div>
				<Image
					src="https://source.unsplash.com/random"
					alt="Picture of the author"
					width={400}
					height={400}
					style={{ borderRadius: "8px", objectFit: "contain" }}
				/>
			</div>

			<div className="fler-row flex gap-4">
				<FeatureCard>
					<FeatureCard.Title>Courses</FeatureCard.Title>
					<FeatureCard.Image
						src="https://source.unsplash.com/random"
						alt="Picture of the author"
						width={125}
						height={125}
					/>
				</FeatureCard>
				<FeatureCard>
					<FeatureCard.Title>Course Reviews</FeatureCard.Title>
					<FeatureCard.Image
						src="https://source.unsplash.com/random"
						alt="Picture of the author"
						width={125}
						height={125}
					/>
				</FeatureCard>
				<FeatureCard>
					<FeatureCard.Title>Locations</FeatureCard.Title>
					<FeatureCard.Image
						src="https://source.unsplash.com/random"
						alt="Picture of the author"
						width={125}
						height={125}
					/>
				</FeatureCard>
			</div>
		</div>
	);
}
