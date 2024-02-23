"use client";

import SingleAiConversation from "@/frontend/components/single-ai-conversation";
import { Separator } from "@/frontend/components/ui/separator";
import { Edit } from "lucide-react";
import React from "react";

interface AiConversationsProps extends React.HTMLAttributes<HTMLDivElement> {}

function AiConversations() {
	const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);

	const handleAiClick = (userId: string) => {
		// console.log(userId, " clicked");
		setActiveChat(userId);
	};

	// PROVISORISCHES RETURN! LOSCHEN WENN DIE users aus der DB eingebunden werden
	return (
		<div>
			Provisorisches return, unten ist das eigentliche, bei dem man USERS mit den users aus der DB tauschen muss{" "}
		</div>
	);

	// return (
	// 	<div className="bg-background">
	// 		<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
	// 			<h2 className="">Conversation</h2>
	// 			<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
	// 				<Edit />
	// 			</div>
	// 		</div>
	// 		<div className="">
	// 			{USERS.map((chat, index) => (
	// 				<div
	// 					key={chat.id}
	// 					onClick={() => handleAiClick(chat.id)}
	// 				>
	// 					<SingleAiConversation
	// 						chat={chat}
	// 						activeChat={activeChat}
	// 					/>
	// 					{/* <div>{user.id}</div> */}
	// 					{index !== USERS.length - 1 && (
	// 						<div className="mx-4">
	// 							<Separator />
	// 						</div>
	// 					)}
	// 				</div>
	// 			))}
	// 		</div>
	// 	</div>
	// );
}

export default AiConversations;
