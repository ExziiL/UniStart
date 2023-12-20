import ChatBox from '@/frontend/components/chat-box';
import UserBar from '@/frontend/components/user-bar/user-bar';
import UserChatMessages from '@/frontend/components/user-chat-messages';
import React from 'react';

function Chat() {
	return (
		<div className="h-full">
			<UserBar />
			<div className="flex h-full flex-row">
				<UserChatMessages />
				<div className="w-full">
					<ChatBox />
				</div>
			</div>
		</div>
	);
}

export default Chat;
