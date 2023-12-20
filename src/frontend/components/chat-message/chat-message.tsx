import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import React from 'react';

interface ChatMessageProps {
	userMessage?: boolean;
}

function ChatMessage({ userMessage }: ChatMessageProps) {
	return (
		<div className={`${userMessage ? 'items-end' : ''} flex flex-col gap-2`}>
			{!userMessage && (
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			)}
			<div
				className={`${
					userMessage ? 'bg-zinc-800 text-secondary ' : 'text-primary'
				} w-fit rounded-md bg-zinc-100 p-2 px-4`}
			>
				<div className="">Hey, I'm having trouble with my account :(</div>
			</div>
		</div>
	);
}

export default ChatMessage;
