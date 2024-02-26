import { Button } from "@/frontend/components/ui/button";
import { Bird, ChevronLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function NotFound() {
	return (
		<div>
			<div className="flex h-full w-full flex-col items-center justify-center space-y-4">
				<Bird
					className="mb-8 h-40 w-40 text-primary"
					strokeWidth={1}
				/>
				<h2 className="text-4xl font-semibold">Page not found.</h2>
				<div className="pt-4">
					<Button
						variant="ghost"
						asChild
						className="font-medium"
					>
						<Link href="/">
							<ChevronLeft
								size={20}
								className="mr-2"
							/>
							Take me home
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
