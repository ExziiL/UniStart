import AiChatBar from "@/frontend/components/ai-chat-bar";
import AiChatEmptyState from "@/frontend/components/ai-chat-empty-state";
import ChatMessage from "@/frontend/components/chat-message";
import MessageInput from "@/frontend/components/message-input";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React from "react";

interface AiChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

function AiChatBox({ className, ...props }: AiChatBoxProps) {
	const chatMessages = [];

	return (
		// <div className={`${className} flex h-full flex-col ${children ? 'justify-between' : 'justify-end'} p-4`}>
		<div
			className={cn(` flex max-h-min flex-col justify-between rounded-xl bg-muted p-4`, className)}
			{...props}
		>
			<AiChatBar />

			{/* {chatMessages.length == 0 && <AiChatEmptyState />} */}

			<div className="flex h-[calc(100vh-200px)] flex-col gap-6">
				<ScrollArea className="h-max">
					<div className="flex h-min flex-col gap-6">
						<ChatMessage variant="ai" />
						<ChatMessage />
						<ChatMessage variant="ai" />
						<ChatMessage />
						<ChatMessage variant="ai" />
						<ChatMessage />
						<ChatMessage variant="ai" />
						<ChatMessage />
						<ChatMessage variant="ai" />
						<ChatMessage />
					</div>
					<ScrollBar orientation="vertical" />
				</ScrollArea>

				<MessageInput />
			</div>
		</div>
	);
}
export default AiChatBox;
