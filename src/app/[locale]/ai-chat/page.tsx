"use client";

import AiChatBar from "@/frontend/components/ai-chat-bar";
import AiChatBox from "@/frontend/components/ai-chat-box";
import AiConversations from "@/frontend/components/ai-conversations";
import AiConversationsMobile from "@/frontend/components/ai-conversations-mobile";
import ChatMessage from "@/frontend/components/chat-message";
import { Separator } from "@/frontend/components/ui/separator";
import React from "react";
import { useWindowSize } from "usehooks-ts";

function AiChat() {
	const [selectedAiChat, setSelectedAiChat] = React.useState<string | undefined>("-1");
	const { width = 0 } = useWindowSize();

	return (
		<div className="flex h-full flex-col justify-between lg:flex-row lg:pt-4">
			{width >= 1024 ? (
				<AiConversations setSelectedAiChat={setSelectedAiChat} />
			) : (
				<AiConversationsMobile setSelectedAiChat={setSelectedAiChat} />
			)}

			<div className="w-full pt-4 sm:p-4 ">
				<AiChatBox selectedAiChat={selectedAiChat} />
			</div>
		</div>
	);
}

export default AiChat;
