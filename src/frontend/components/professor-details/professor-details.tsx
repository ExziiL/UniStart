import { ProfessorProps } from '@/types/IProfessor';
import React from 'react';

import { Files } from 'lucide-react';

import { useToast } from '@/frontend/hooks/use-toast';
import { useCopyToClipboard, useHover } from 'usehooks-ts';

interface ProfessorDetailsProps {
	professor: ProfessorProps;
	className?: string;
}

function ProfessorDetails({ professor, className }: ProfessorDetailsProps) {
	const hoverEmailRef = React.useRef(null);
	const isEmailHover = useHover(hoverEmailRef);

	const [copiedText, copyText] = useCopyToClipboard();

	const { toast } = useToast();

	return (
		<div className={`${className} transition-colors`}>
			<p className="text-base font-medium text-primary ">{professor.name}</p>
			<p
				className="font-base text-light flex w-fit gap-2 text-sm hover:cursor-pointer hover:text-primary"
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
		</div>
	);
}

export default ProfessorDetails;
