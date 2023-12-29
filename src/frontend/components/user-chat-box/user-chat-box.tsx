import ChatMessage from '@/frontend/components/chat-message';
import MessageInput from '@/frontend/components/message-input';
import { cn } from '@/lib/utils';
import e from 'express';
import React from 'react';

interface UserChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	chatBoxMessages?: React.ReactNode;
}

function UserChatBox({ children, className, ...props }: UserChatBoxProps) {
	return (
		<div
			className={cn(`flex h-full flex-col justify-end p-4`, className)}
			{...props}
		>
			{children}

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-6">
					<ChatMessage variant="incoming" />
					<ChatMessage />
					<ChatMessage variant="incoming" />
				</div>
				<MessageInput />
			</div>
		</div>
	);
}

export default UserChatBox;
