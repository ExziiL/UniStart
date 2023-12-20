import ChatMessage from '@/frontend/components/chat-message';
import MessageInput from '@/frontend/components/message-input';
import React from 'react';

function ChatBox() {
	return (
		<div className="flex h-full flex-col justify-end gap-6 p-4">
			<ChatMessage />
			<ChatMessage userMessage />
			<ChatMessage />
			<MessageInput />
		</div>
	);
}

export default ChatBox;
