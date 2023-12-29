import UserBar from '@/frontend/components/user-bar/user-bar';
import UserChatBox from '@/frontend/components/user-chat-box';
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
					<UserChatBox />
				</div>
			</div>
		</div>
	);
}

export default Chat;
