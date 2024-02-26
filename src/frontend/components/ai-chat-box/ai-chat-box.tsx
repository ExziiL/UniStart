import AiChatBar from "@/frontend/components/ai-chat-bar";
import AiChatEmptyState from "@/frontend/components/ai-chat-empty-state";
import ChatMessage from "@/frontend/components/chat-message";
import MessageInput from "@/frontend/components/message-input";
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { AI_CHATS } from "@/frontend/constants/ai-chats";
import { cn } from "@/lib/utils";
import React from "react";

interface AiChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	selectedAiChat: any;
}

function AiChatBox({ selectedAiChat, className, ...props }: AiChatBoxProps) {
	return (
		// <div className={`${className} flex h-full flex-col ${children ? 'justify-between' : 'justify-end'} p-4`}>
		<div
			className={cn(
				`flex  max-h-min flex-col justify-between rounded-xl bg-muted p-4`,
				selectedAiChat == "-1" ? "h-[calc(100vh-95px)]" : "",
				className
			)}
			{...props}
		>
			<AiChatBar />

			{(AI_CHATS.length == 0 || selectedAiChat == "-1") && <AiChatEmptyState />}

			<div className="flex h-[calc(100vh-200px)] flex-col justify-end gap-6">
				<ScrollArea className="h-max">
					<div className="flex h-min flex-col gap-6">
						{selectedAiChat?.messages?.map((messages: any, index: number) => (
							<div key={index}>
								{messages.role === "assistant" ? (
									<ChatMessage
										messageData={messages}
										variant="ai"
									/>
								) : (
									<ChatMessage messageData={messages} />
								)}
							</div>
						))}
					</div>
					<ScrollBar orientation="vertical" />
				</ScrollArea>

				{/* ! NEED TO FIX THAT, ADD CONVERSATIONID TO AI CHAT HERE */}
				<MessageInput conversationid="" />
			</div>
		</div>
	);
}
export default AiChatBox;
