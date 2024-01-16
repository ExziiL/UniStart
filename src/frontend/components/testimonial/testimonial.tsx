import Image from "next/image";
import * as React from "react";

interface TestimonialProps {
	testimonial: {
		text: string;
		name: string;
		company: string;
	};
}

function Testimonial({ testimonial }: TestimonialProps) {
	return (
		<div className="w-full max-w-[680px]">
			<div className="">
				<p className="text-center text-primary">{testimonial.text}</p>
				<div className="flex flex-row justify-center gap-4 pt-4 lg:pt-6">
					<Image
						src="https://source.unsplash.com/random"
						alt="Picture of the author"
						className="h-12 w-12 rounded-full"
						width={48}
						height={48}
					/>
					<div>
						<div className="font-medium">{testimonial.name}</div>
						<div className="text-ultra-light">{testimonial.company}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
