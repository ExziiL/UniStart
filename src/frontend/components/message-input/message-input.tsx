import { Textarea } from '@/frontend/components/ui/textarea';
import React from 'react';

function MessageInput() {
	return (
		<div className="">
			<Textarea placeholder="Type your message here." />
			<p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
		</div>
	);
}

export default MessageInput;
