"use client";

import SingleAiConversation from "@/frontend/components/single-ai-conversation";
import { Separator } from "@/frontend/components/ui/separator";
import { USERS } from "@/frontend/constants/users";
import { Edit } from "lucide-react";
import React from "react";

interface AiConversationsProps extends React.HTMLAttributes<HTMLDivElement> {}

function AiConversations() {
	const [activeChat, setActiveChat] = React.useState<number | undefined>(undefined);

	const handleAiClick = (userId: number) => {
		console.log(userId, " clicked");
		setActiveChat(userId);
	};

	return (
		<div className="bg-background">
			<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
				<h2 className="">Conversation</h2>
				<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
					<Edit />
				</div>
			</div>
			<div className="">
				{USERS.map((chat, index) => (
					<div
						key={chat.id}
						onClick={() => handleAiClick(chat.id)}
					>
						<SingleAiConversation
							chat={chat}
							activeChat={activeChat}
						/>
						{/* <div>{user.id}</div> */}
						{index !== USERS.length - 1 && (
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
