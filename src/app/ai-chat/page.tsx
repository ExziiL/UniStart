import AiChatBar from '@/frontend/components/ai-chat-bar';
import ChatBox from '@/frontend/components/chat-box';
import ConversationsOverview from '@/frontend/components/conversations-overview';
import { Separator } from '@/frontend/components/ui/separator';
import React from 'react';

function AiChat() {
	return (
		<div className="flex h-full flex-row justify-between">
			<ConversationsOverview />
			<div className="w-full p-4">
				<ChatBox className="rounded-lg bg-zinc-50">
					<AiChatBar />
				</ChatBox>
			</div>
		</div>
	);
}

export default AiChat;
