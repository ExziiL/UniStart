"use client";

import { Button } from "@/frontend/components/ui/button";
import { Textarea } from "@/frontend/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

function MessageInput() {
	const [message, setMessage] = React.useState("");
	const textareaRef = React.useRef<HTMLTextAreaElement>(null);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);

		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "inherit"; // Shrink to fit new content

			// Calculate the desired and respect the maximum height
			const maxHeight = 102; // Set the max height in pixels
			const desiredHeight = Math.min(textarea.scrollHeight, maxHeight);
			textarea.style.height = `${desiredHeight}px`; // Set the new height
		}
	};

	const handleButtonClick = () => {
		console.log(message);
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
					rows={1}
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

			{/* <p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p> */}
		</div>
	);
}

export default MessageInput;
