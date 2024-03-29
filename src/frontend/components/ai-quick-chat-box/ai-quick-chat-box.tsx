import AiChatBar from "@/frontend/components/ai-chat-bar";
import AiChatEmptyState from "@/frontend/components/ai-chat-empty-state";
import ChatMessage from "@/frontend/components/chat-message";
import MessageInput from "@/frontend/components/message-input";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React from "react";

interface AiQuickChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

function AiQuickChatBox({ className, ...props }: AiQuickChatBoxProps) {
	const chatMessages = [];

	return (
		<div
			className={cn(`flex flex-col justify-between rounded-xl bg-muted p-2`, className)}
			{...props}
		>
			<AiChatBar />

			{/* {chatMessages.length == 0 && <AiChatEmptyState />} */}

			<div className="flex h-[410px] flex-col justify-between gap-2">
				<ScrollArea className="">
					<div className="flex flex-col gap-6 text-light">Hello, how can I help you?</div>
					<ScrollBar orientation="vertical" />
				</ScrollArea>

				<MessageInput conversationid="" />
			</div>
		</div>
	);
}
export default AiQuickChatBox;
