import UserChatSingleMessage from '@/frontend/components/user-chat-single-message';
import { USERS } from '@/frontend/constants/users';
import React from 'react';

function UserChatMessages() {
	return (
		<div className="w-96 bg-zinc-50 ">
			{USERS.map((user) => (
				<UserChatSingleMessage
					key={user.id}
					user={user}
				/>
			))}
		</div>
	);
}

export default UserChatMessages;
