import AiChatBar from '@/frontend/components/ai-chat-bar';
import AiChatBox from '@/frontend/components/ai-chat-box';
import AiConversations from '@/frontend/components/ai-conversations';
import ChatMessage from '@/frontend/components/chat-message';
import { Separator } from '@/frontend/components/ui/separator';
import React from 'react';

function AiChat() {
	return (
		<div className="flex h-full flex-row justify-between">
			<AiConversations />
			<div className="w-full p-4">
				<AiChatBox />
			</div>
		</div>
	);
}

export default AiChat;
