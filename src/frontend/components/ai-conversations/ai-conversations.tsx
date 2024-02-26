"use client";

import SingleAiConversation from "@/frontend/components/single-ai-conversation";
import { Separator } from "@/frontend/components/ui/separator";
import { AI_CHATS } from "@/frontend/constants/ai-chats";
import { Edit } from "lucide-react";
import React from "react";

interface AiConversationsProps extends React.HTMLAttributes<HTMLDivElement> {
	setSelectedAiChat: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function AiConversations({ setSelectedAiChat }: AiConversationsProps) {
	const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);

	const handleAiClick = (chat: any) => {
		// console.log(userId, " clicked");
		setActiveChat(chat.id);
		setSelectedAiChat(chat);
	};

	return (
		<div className="bg-background">
			<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
				<h2 className="">Conversations</h2>
				<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
					<Edit />
				</div>
			</div>
			<div className="">
				{AI_CHATS.map((chat, index) => (
					<div
						key={chat.id}
						onClick={() => handleAiClick(chat)}
					>
						<SingleAiConversation
							chat={chat}
							activeChat={activeChat}
						/>
						{/* <div>{user.id}</div> */}
						{index !== AI_CHATS.length - 1 && (
							<div className="mx-4">
								<Separator />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default AiConversations;
