import { Avatar, AvatarFallback, AvatarImage } from '@/frontend/components/ui/avatar';
import UserChatSingleMessage from '@/frontend/components/user-chat-single-message';
import React from 'react';

function UserChatMessages() {
	return (
		<div className="bg-zinc-50">
			<UserChatSingleMessage />
			<UserChatSingleMessage />
		</div>
	);
}

export default UserChatMessages;
