import UserBar from "@/frontend/components/user-bar/user-bar";
import UserChatBox from "@/frontend/components/user-chat-box";
import UserConversations from "@/frontend/components/user-conversations";
import React from "react";

function Chat() {
	return (
		<div className="full-bleed grid grid-cols-[1fr,_3fr]">
			<div className="col-span-2">
				<UserBar />
			</div>
			{/* <div className="flex flex-row"> */}
			{/* TODO: UserCHatMessages ab md: anzeigen, davor anders darstellen */}
			<div className="">
				<UserConversations />
			</div>
			<div className="w-full">
				<UserChatBox />
			</div>
			{/* </div> */}
		</div>
	);
}

export default Chat;
