import UserBar from '@/frontend/components/user-bar/user-bar';
import UserChatSingleOverview from '@/frontend/components/user-chat-single-overview';
import React from 'react';

function Chat() {
	return (
		<div>
			<UserBar />
			<UserChatSingleOverview />
		</div>
	);
}

export default Chat;
