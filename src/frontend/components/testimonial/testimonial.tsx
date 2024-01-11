import Image from "next/image";
import * as React from "react";

function Testimonial() {
	return (
		<div className="w-full max-w-[680px]">
			<div className="">
				<p className="text-center">
					Rise has made managing my day effortless. We have used it across our team and had definitely helped
					finding the best time to meet and ensure we are not wasting time during some of our busiest hours.
				</p>
				<div className="flex flex-row justify-center gap-4 pt-4 lg:pt-6">
					<Image
						src="https://source.unsplash.com/random"
						alt="Picture of the author"
						className="h-12 w-12 rounded-full"
						width={48}
						height={48}
					/>
					<div>
						<div className="font-medium">Max Mustermann</div>
						<div className="text-ultra-light">CEO at Pepsi</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
