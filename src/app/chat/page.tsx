"use client";

import UserBar from "@/frontend/components/user-bar/user-bar";
import UserChatBox from "@/frontend/components/user-chat-box";
import UserConversations from "@/frontend/components/user-conversations";
import UserConversationsMobile from "@/frontend/components/user-conversations-mobile";
import { message } from "@prisma/client";
import { motion } from "framer-motion";
import React from "react";
import { useWindowSize } from "usehooks-ts";

function Chat() {
	const [activeChat, setActiveChat] = React.useState<string>("");
	const [messages, setMessages] = React.useState<Array<message> | []>([]);
	const [conversationId, setConversationId] = React.useState<string>("");

	const { width = 0 } = useWindowSize();

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
						<UserBar activeChat={activeChat} />
					</motion.div>
				)}
			</div>

			<div className="md:grid md:grid-cols-[auto,_1fr]">
				{width >= 768 ? (
					<div className="min-w-[280px] max-w-xs pl-3">
						<UserConversations
							setMessages={setMessages}
							setCurrentConversationId={setConversationId}
							setActiveChat={setActiveChat}
							activeChat={activeChat}
						/>
					</div>
				) : (
					<UserConversationsMobile
						setMessages={setMessages}
						setCurrentConversationId={setConversationId}
						setActiveChat={setActiveChat}
						activeChat={activeChat}
					/>
				)}

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
