import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/lib/utils';
import { message } from '@prisma/client';

const chatMessageVariants = cva('w-fit rounded-md bg-light-foreground p-2 px-4', {
	variants: {
		variant: {
			outgoing: 'bg-foreground/95 text-secondary',
			incoming: 'text-primary',
			ai: 'border border-light/15 bg-light/15',
		},
		// size: {
		// 	default: 'h-10 px-4 py-2',
		// 	sm: 'h-9 rounded-md px-3',
		// 	lg: 'h-11 rounded-md px-8',
		// 	icon: 'h-10 w-10',
		// },
	},
	defaultVariants: {
		variant: 'outgoing',
		// size: 'default',
	},
});

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chatMessageVariants> {
	userMessage?: boolean;
	message: message;
}

function ChatMessage({ variant, message }: ChatMessageProps) {
	const isOutgoingMessage = variant === 'outgoing' || variant == undefined;

	return (
		<div className={`${isOutgoingMessage ? 'items-end' : ''} flex flex-col gap-2`}>
			{!isOutgoingMessage && (
				<Avatar>
					<AvatarImage src={message.image ?? undefined} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			)}

			<div className={cn(chatMessageVariants({ variant }))}>
				<div className="">{message.content}</div>
			</div>
		</div>
	);
}

export default ChatMessage;
