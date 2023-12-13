import { Separator } from '@/frontend/components/ui/separator';
import UserChatSingleMessage from '@/frontend/components/user-chat-single-message';
import { USERS } from '@/frontend/constants/users';
import React from 'react';

function UserChatMessages() {
	return (
		<div className="w-96 bg-zinc-50 ">
			{USERS.map((user, index) => (
				<>
					<UserChatSingleMessage
						key={user.id}
						user={user}
					/>
					{index !== USERS.length - 1 && (
						<div className="mx-4">
							<Separator />
						</div>
					)}
				</>
			))}
		</div>
	);
}

export default UserChatMessages;
