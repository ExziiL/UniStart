"use client";

import { useUserContext } from '@/context/user-context/user-context';
import ChatMessage from '@/frontend/components/chat-message';
import MessageInput from '@/frontend/components/message-input';
import { cn } from '@/lib/utils';
import { message } from '@prisma/client';
import e from 'express';
import React from 'react';

interface UserChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	messages: message[] | [];
	conversationid: string;
}

function UserChatBox({ children, className, ...props }: UserChatBoxProps) {
	const { userState } = useUserContext();
	return (
		<div
			className={cn(`flex h-full flex-col justify-end p-4`, className)}
			{...props}
		>
			{children}

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-6">
					{props.messages?.map((message, index) =>
						<ChatMessage
							key={index}
							message={message}
							variant={message.senderid == userState.id ? "outgoing" : "incoming"}
						></ChatMessage>)}
					{/* <ChatMessage variant="incoming" />
					<ChatMessage />
					<ChatMessage variant="incoming" /> */}
				</div>
				<MessageInput conversationid={props.conversationid} />
			</div>
		</div>
	);
}

export default UserChatBox;
