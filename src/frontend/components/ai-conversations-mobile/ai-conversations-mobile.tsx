"use client";

import SingleAiConversation from "@/frontend/components/single-ai-conversation";
import { Separator } from "@/frontend/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/frontend/components/ui/sheet";
import { AI_CHATS } from "@/frontend/constants/ai-chats";
import { Edit, MessagesSquare } from "lucide-react";
import React from "react";

interface AiConversationsMobileProps extends React.HTMLAttributes<HTMLDivElement> {
	setSelectedAiChat: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function AiConversationsMobile({ setSelectedAiChat }: AiConversationsMobileProps) {
	const [activeChat, setActiveChat] = React.useState<string | undefined>(undefined);

	const handleAiClick = (chat: any) => {
		setActiveChat(chat.id);
		setSelectedAiChat(chat);
	};

	return (
		<div className="absolute right-0 mr-12 mt-6 bg-muted sm:mr-16">
			<Sheet>
				<SheetTrigger className="pt-4">
					<MessagesSquare
						size={28}
						strokeWidth={1.75}
					/>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader className="flex flex-row items-end justify-between p-4 pb-2 text-lg font-semibold">
						<SheetTitle>Conversations</SheetTitle>
						<div className="cursor-pointer text-primary-muted transition-colors hover:text-primary">
							<Edit />
						</div>
					</SheetHeader>

					<div className="">
						{AI_CHATS.map((chat, index) => (
							<div
								key={chat.id}
								onClick={() => handleAiClick(chat)}
							>
								<SingleAiConversation
									chat={chat}
									activeChat={activeChat}
								/>
								{index !== AI_CHATS.length - 1 && (
									<div className="">
										<Separator />
									</div>
								)}
							</div>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}

export default AiConversationsMobile;
