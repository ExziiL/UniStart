"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Archive, ChevronDown, Trash2, User } from "lucide-react";
import React from "react";

interface SingleUserConversationProps {
	chat: any;
	activeChat?: string;
}

function SingleUserConversation({ chat, activeChat }: SingleUserConversationProps) {
	const [isHovered, setIsHovered] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement>(null);
	const messagePreview = chat.messages && chat.messages.length > 0 ? chat.messages[0].content : "";

	const handleTrashIconClick = (event: any) => {
		// event.stopPropagation();
	};

	return (
		<div
			className={` w-fill mx-2 my-2 flex cursor-pointer gap-4 rounded-md px-3 py-3 transition-all hover:bg-muted ${
				activeChat === chat.id ? "bg-muted" : ""
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex w-full flex-col gap-1">
				<div className="flex justify-between"></div>
				<div className="relative flex justify-between">
					<p className="line-clamp-1 text-primary-muted">{messagePreview}</p>

					<AnimatePresence>
						{isHovered && (
							<motion.div
								layout
								ref={dropdownRef}
								initial={{ x: 8, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 8, opacity: 0 }}
								transition={{ duration: 0.15 }}
								className="absolute right-0 bg-muted pb-1 pl-2 text-zinc-500"
							>
								<Trash2
									size={20}
									onClick={handleTrashIconClick}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default SingleUserConversation;
