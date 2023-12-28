import AiChatMessages from '@/frontend/components/ai-chat-messages';
import ChatBox from '@/frontend/components/chat-box';
import ConversationsOverview from '@/frontend/components/conversations-overview';
import React from 'react';

function AiChat() {
	return (
		<div className="flex flex-row">
			<ConversationsOverview />
			<div className="w-full">
				<ChatBox />
			</div>
		</div>
	);
}

export default AiChat;
