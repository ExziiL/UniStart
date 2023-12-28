'use client';

import UserChatSingleMessage from '@/frontend/components/single-conversation';
import { Separator } from '@/frontend/components/ui/separator';
import { USERS } from '@/frontend/constants/users';
import { Edit } from 'lucide-react';
import React from 'react';

function AiChatMessages() {
	const [activeChat, setActiveChat] = React.useState<number | undefined>(undefined);

	const handleUserClick = (userId: number) => {
		console.log(userId, ' clicked');
		setActiveChat(userId);
	};

	return (
		<div>
			{' '}
			<div className="w-96 bg-background">
				<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
					<h2 className="">Messages</h2>
					<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
						<Edit />
					</div>
				</div>
				<div className="">
					{USERS.map((user, index) => (
						<div
							key={user.id}
							onClick={() => handleUserClick(user.id)}
						>
							<UserChatSingleMessage
								user={user}
								activeChat={activeChat}
							/>
							{/* <div>{user.id}</div> */}
							{index !== USERS.length - 1 && (
								<div className="mx-4">
									<Separator />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default AiChatMessages;
