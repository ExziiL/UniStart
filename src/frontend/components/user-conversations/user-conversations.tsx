'use client';

import SingleUserConversation from '@/frontend/components/single-user-conversation';
import { Separator } from '@/frontend/components/ui/separator';
import { USERS } from '@/frontend/constants/users';
import { Edit } from 'lucide-react';
import React from 'react';

interface UserConversationsProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
}

function UserConversations({ title }: UserConversationsProps) {
	const [activeChat, setActiveChat] = React.useState<number | undefined>(undefined);

	const handleUserClick = (userId: number) => {
		console.log(userId, ' clicked');
		setActiveChat(userId);
	};

	return (
		<div className="w-96 bg-background">
			<div className="flex items-end justify-between p-4 pb-2 text-lg font-semibold">
				<h2 className="">{title || 'Messages'}</h2>
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
						<SingleUserConversation
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
	);
}

export default UserConversations;
