import UserActivityStatus from "@/frontend/components/user-activity-status";
import UserChatUserActions from "@/frontend/components/user-chat-user-actions";
import { Settings } from "lucide-react";
import React from "react";

interface UserBarProps extends React.HTMLAttributes<HTMLDivElement> {}

function UserBar({}: UserBarProps) {
	return (
		<div>
			<div className="flex h-16 items-center justify-between border-b p-2 px-8">
				<UserActivityStatus />
				<UserChatUserActions>
					<Settings />
				</UserChatUserActions>
			</div>
		</div>
	);
}

export default UserBar;
