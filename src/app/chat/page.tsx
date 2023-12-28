import ChatBox from '@/frontend/components/chat-box';
import UserBar from '@/frontend/components/user-bar/user-bar';
import UserConversations from '@/frontend/components/user-conversations';
import React from 'react';

function Chat() {
	return (
		<div className="">
			<UserBar />
			<div className="flex flex-row">
				{/* TODO: UserCHatMessages ab md: anzeigen, davor anders darstellen */}
				<UserConversations />
				<div className="w-full">
					<ChatBox />
				</div>
			</div>
		</div>
	);
}

export default Chat;
