import UserActivityStatus from '@/frontend/components/user-activity-status';
import UserChatUserActions from '@/frontend/components/user-chat-user-settings';
import React from 'react';

function UserBar() {
	return (
		<div>
			<div className="flex h-16 items-center justify-between border-b p-2 px-8">
				<UserActivityStatus />
				<UserChatUserActions />
			</div>
		</div>
	);
}

export default UserBar;
