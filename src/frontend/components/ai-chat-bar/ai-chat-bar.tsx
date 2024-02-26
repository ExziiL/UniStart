import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import { Separator } from "@/frontend/components/ui/separator";
import { Trash2 } from "lucide-react";
import React from "react";

function AiChatBar() {
	return (
		<div className="">
			<div className="flex flex-row items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="">
						<Avatar>
							<AvatarImage
								src="https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/13.png"
								alt="AI-Bot Profile Picture"
							/>
							<AvatarFallback>Profile Picture</AvatarFallback>
						</Avatar>
					</div>
					<div>
						<h2 className=" font-semibold">Not a Human</h2>
					</div>
				</div>
				<div className="cursor-pointer text-light transition-colors hover:text-foreground">
					<Trash2 />
				</div>
			</div>
			<Separator className="my-4 dark:bg-zinc-700" />
		</div>
	);
}

export default AiChatBar;
