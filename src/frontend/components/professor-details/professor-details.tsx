import { ProfessorProps } from '@/types/IProfessor';
import React from 'react';

import { Files } from 'lucide-react';

import { useToast } from '@/frontend/hooks/use-toast';
import { useCopyToClipboard, useHover } from 'usehooks-ts';

interface ProfessorDetailsProps {
	professor: ProfessorProps;
}

function ProfessorDetails({ professor }: ProfessorDetailsProps) {
	const hoverEmailRef = React.useRef(null);
	const isEmailHover = useHover(hoverEmailRef);

	const [copiedText, copyText] = useCopyToClipboard();

	const { toast } = useToast();

	return (
		<span className="text-zinc-500">
			<p className="text-base font-medium">{professor.name}</p>
			<p
				className="font-base flex w-fit gap-2 text-sm hover:cursor-pointer hover:text-zinc-800"
				ref={hoverEmailRef}
				onClick={() => {
					// copies the email to the users clipboard
					copyText(professor.email);

					toast({
						title: 'E-Mail successfully copied to clipboard',
						description: 'You can now paste it into your email client',
					});
				}}
			>
				{professor.email}
				{isEmailHover && (
					<span>
						<Files
							size={16}
							strokeWidth={1.5}
						/>
					</span>
				)}
			</p>
		</span>
	);
}

export default ProfessorDetails;
