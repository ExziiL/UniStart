import AiChatBar from '@/frontend/components/ai-chat-bar';
import AiConversations from '@/frontend/components/ai-conversations';
import ChatBox from '@/frontend/components/chat-box';
import { Separator } from '@/frontend/components/ui/separator';
import React from 'react';

function AiChat() {
	return (
		<div className="flex h-full flex-row justify-between">
			<AiConversations title="Conversations" />
			<div className="w-full p-4">
				<ChatBox className="rounded-lg bg-zinc-50">
					<AiChatBar />
				</ChatBox>
			</div>
		</div>
	);
}

export default AiChat;
