import UserActivityStatus from '@/frontend/components/user-activity-status/user-activity-status';
import { Settings } from 'lucide-react';
import React from 'react';

function UserBar() {
	return (
		<div>
			<div className="flex h-16 items-center justify-between border-b p-2">
				<UserActivityStatus />
				<Settings />
			</div>
		</div>
	);
}

export default UserBar;
