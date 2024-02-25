"use client";

import { pusherClient } from "@/backend/lib/pusher";
import { useUserContext } from "@/context/user-context/user-context";
import ChatMessage from "@/frontend/components/chat-message";
import MessageInput from "@/frontend/components/message-input";
import { cn } from "@/lib/utils";
import { message } from "@prisma/client";
import { find } from "lodash";
import React from "react";

interface UserChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	messages: message[] | [];
	conversationid: string;
	setMessages: React.Dispatch<React.SetStateAction<message[]>>;
}

function UserChatBox({ children, className, setMessages, ...props }: UserChatBoxProps) {
	const { userState } = useUserContext();

	React.useEffect(() => {
		pusherClient.subscribe(props.conversationid);

		const messageHandler = (message: message) => {
			console.log(message);

			setMessages((current: message[]) => {
				if (find(current, { id: message.id })) {
					return current;
				}
				return [...current, message];
			});
		};

		pusherClient.bind("new:message", messageHandler);

		return () => {
			pusherClient.unsubscribe(props.conversationid);
			pusherClient.unbind("new:message", messageHandler);
		};
	}, [props.conversationid, setMessages]);

	return (
		<div
			className={cn(`flex h-full flex-col justify-end p-4`, className)}
			{...props}
		>
			{children}

			<div className="flex flex-col gap-6">
				{props.messages?.length != 0 ? (
					<>
						<div className="flex flex-col gap-6">
							{props.messages?.map((message, index) => (
								<ChatMessage
									key={index}
									messageData={message}
									variant={message.senderid == userState.id ? "outgoing" : "incoming"}
								></ChatMessage>
							))}
						</div>
						<MessageInput conversationid={props.conversationid} />
					</>
				) : (
					<>
						<div className="mb-24 text-center text-xl text-light">
							There is currently no conversation selected. Please select a conversation.
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default UserChatBox;
