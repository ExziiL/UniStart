import ChatMessage from '@/frontend/components/chat-message';
import MessageInput from '@/frontend/components/message-input';
import { cn } from '@/lib/utils';
import React from 'react';

interface ChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
}

function ChatBox({ children, className, ...props }: ChatBoxProps) {
	return (
		// <div className={`${className} flex h-full flex-col ${children ? 'justify-between' : 'justify-end'} p-4`}>
		<div
			className={cn(`flex h-full flex-col justify-end p-4`, className, children && 'justify-between')}
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

export default ChatBox;
