import { Button } from "@/frontend/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/frontend/components/ui/popover";
import { MessageCircle } from "lucide-react";
import React from "react";

function AiQuickChat() {
	return (
		<div className="fixed bottom-8 right-8 z-50">
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className="h-14 w-14 rounded-full"
					>
						<MessageCircle />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="mb-1 mr-2">Place content here</PopoverContent>
			</Popover>
		</div>
	);
}

export default AiQuickChat;
