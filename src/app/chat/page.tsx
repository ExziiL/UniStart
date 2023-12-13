import UserBar from '@/frontend/components/user-bar/user-bar';
import UserChatMessages from '@/frontend/components/user-chat-messages';
import React from 'react';

function Chat() {
	return (
		<div>
			<UserBar />
			<UserChatMessages />
		</div>
	);
}

export default Chat;
