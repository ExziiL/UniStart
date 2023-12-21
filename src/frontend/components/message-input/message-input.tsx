'use client';

import { Button } from '@/frontend/components/ui/button';
import { Textarea } from '@/frontend/components/ui/textarea';
import { Send } from 'lucide-react';
import React from 'react';

function MessageInput() {
	const [message, setMessage] = React.useState('');

	const handleButtonClick = () => {
		console.log(message);
	};

	return (
		<div className="">
			<div className="flex flex-col gap-2 sm:flex-row">
				<Textarea
					className="resize-none"
					placeholder="Type your message here."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					rows={1}
				/>
				<Button onClick={handleButtonClick}>
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
