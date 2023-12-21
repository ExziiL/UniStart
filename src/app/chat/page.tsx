import ChatBox from '@/frontend/components/chat-box';
import UserBar from '@/frontend/components/user-bar/user-bar';
import UserChatMessages from '@/frontend/components/user-chat-messages';
import React from 'react';

function Chat() {
	return (
		<div className="">
			<UserBar />
			<div className="flex flex-row">
				<UserChatMessages />
				<div className="w-full">
					<ChatBox />
				</div>
			</div>
		</div>
	);
}

export default Chat;
