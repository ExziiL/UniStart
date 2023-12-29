import AiChatBar from '@/frontend/components/ai-chat-bar';
import ChatMessage from '@/frontend/components/chat-message';
import MessageInput from '@/frontend/components/message-input';
import { cn } from '@/lib/utils';
import React from 'react';

interface AiChatBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

function AiChatBox({ className, ...props }: AiChatBoxProps) {
	return (
		// <div className={`${className} flex h-full flex-col ${children ? 'justify-between' : 'justify-end'} p-4`}>
		<div
			className={cn(`flex h-full flex-col justify-between rounded-xl bg-muted p-4`, className)}
			{...props}
		>
			<AiChatBar />
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-6">
					<ChatMessage variant="ai" />
					<ChatMessage />
					<ChatMessage variant="ai" />
				</div>

				<MessageInput />
			</div>
		</div>
	);
}
export default AiChatBox;
