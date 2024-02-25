"use client";

import { useUserContext } from "@/context/user-context/user-context";
import { send } from "@/frontend/components/message-input/actions";
import { Button } from "@/frontend/components/ui/button";
import { Textarea } from "@/frontend/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

type MessageInputProps = {
	conversationid: string;
};

function MessageInput({ conversationid }: MessageInputProps) {
	const [message, setMessage] = React.useState("");
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);
	const { userState, userDispatch } = useUserContext();

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);

		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "inherit"; // Shrink to fit new content

			// Calculate the desired and respect the maximum height
			// 102px for 5 lines of code
			//  82px for 4 lines of code
			const maxHeight = 82; // Set the max height in pixels
			const desiredHeight = Math.min(textarea.scrollHeight, maxHeight);
			textarea.style.height = `${desiredHeight}px`; // Set the new height
		}
	};

	const handleButtonClick = () => {
		send(userState, message, conversationid);
	};

	return (
		<div className="">
			<div className="flex flex-col gap-2 sm:flex-row">
				<Textarea
					ref={textareaRef}
					className="resize-none"
					placeholder="Type your message here."
					value={message}
					onChange={handleTextChange}
					rows={2}
				/>
				<Button
					onClick={handleButtonClick}
					className="h-auto"
					variant="outline"
				>
					<Send
						strokeWidth={1.75}
						size={20}
					/>
				</Button>
			</div>
		</div>
	);
}

export default MessageInput;
