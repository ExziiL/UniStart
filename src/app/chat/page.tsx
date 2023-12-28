import ChatBox from '@/frontend/components/chat-box';
import Conversations from '@/frontend/components/conversations';
import UserBar from '@/frontend/components/user-bar/user-bar';
import React from 'react';

function Chat() {
	return (
		<div className="">
			<UserBar />
			<div className="flex flex-row">
				{/* TODO: UserCHatMessages ab md: anzeigen, davor anders darstellen */}
				<Conversations />
				<div className="w-full">
					<ChatBox />
				</div>
			</div>
		</div>
	);
}

export default Chat;
