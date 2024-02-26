"use client";

import AiChatBar from "@/frontend/components/ai-chat-bar";
import AiChatBox from "@/frontend/components/ai-chat-box";
import AiConversations from "@/frontend/components/ai-conversations";
import ChatMessage from "@/frontend/components/chat-message";
import { Separator } from "@/frontend/components/ui/separator";
import React from "react";

function AiChat() {
	const [selectedAiChat, setSelectedAiChat] = React.useState<string | undefined>("-1");

	return (
		<div className="flex h-full flex-row justify-between">
			<AiConversations setSelectedAiChat={setSelectedAiChat} />
			<div className="w-full p-4">
				<AiChatBox selectedAiChat={selectedAiChat} />
			</div>
		</div>
	);
}

export default AiChat;
