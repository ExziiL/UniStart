"use client";

import UserBar from "@/frontend/components/user-bar/user-bar";
import UserChatBox from "@/frontend/components/user-chat-box";
import UserConversations from "@/frontend/components/user-conversations";
import { message } from "@prisma/client";
import { motion } from "framer-motion";
import React from "react";

function Chat() {
	const [messages, setMessages] = React.useState<Array<message> | []>([]);
	const [conversationId, setConversationId] = React.useState<string>("");

	return (
		<div className="full-bleed grid grid-cols-1 grid-rows-[auto,_1fr]">
			<div className="col-span-2 row-auto 2xl:col-span-3">
				{messages?.length != 0 && (
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ type: "spring", stiffness: 50 }}
					>
						<UserBar className="" />
					</motion.div>
				)}
			</div>
			{/* <div className="flex flex-row"> */}
			{/* TODO: UserCHatMessages ab md: anzeigen, davor anders darstellen */}
			<div className="grid grid-cols-[auto,_1fr]">
				<div className="min-w-[280px] max-w-xs pl-3">
					{/* TODO: erst ab  size lg anzeigen, davor eine mobile ansicht darstellen */}
					<UserConversations
						setMessages={setMessages}
						setCurrentConversationId={setConversationId}
					/>
				</div>
				<div className="w-full max-w-4xl content-center justify-self-center">
					<UserChatBox
						messages={messages}
						conversationid={conversationId}
						setMessages={setMessages}
					/>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default Chat;
