"use client";

import { useUserContext } from "@/context/user-context/user-context";
import UserActivityStatus from "@/frontend/components/user-activity-status";
import UserChatUserActions from "@/frontend/components/user-chat-user-actions";
import * as action from "@/frontend/components/user-conversations/actions";
import { toast } from "@/frontend/hooks/use-toast";
import User from "@/types/IUser";
import { useQuery } from "@tanstack/react-query";
import { Settings } from "lucide-react";
import React from "react";

interface UserBarProps extends React.HTMLAttributes<HTMLDivElement> {
	userId?: string;
	activeChat: string | undefined;
}

function UserBar({ userId, activeChat }: UserBarProps) {
	const { userState } = useUserContext();
	const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
	const [selectedUser, setSelectedUser] = React.useState<User | undefined>();

	const getUsers = useQuery({
		queryKey: ["getUsers"],
		queryFn: () => action.fetchUsers(userState.id),
		enabled: shouldFetch,
	});

	React.useEffect(() => {
		if (getUsers.isPending) {
		}
		if (getUsers.isError) {
			toast({
				title: "Error getting users",
				description: getUsers.error.message,
			});
		}
		if (!getUsers.isError && getUsers.data) {
			setShouldFetch(false);
			getUsers.data?.users.map((user: any) =>
				setSelectedUser(getUsers.data?.users.find((user: User) => user.id === activeChat))
			);
		}
	}, [getUsers]);

	return (
		<div>
			<div className="flex h-16 items-center justify-between border-b p-2 px-8">
				<UserActivityStatus selectedUser={selectedUser} />
				<UserChatUserActions userId={selectedUser?.id}>
					<Settings />
				</UserChatUserActions>
			</div>
		</div>
	);
}

export default UserBar;
