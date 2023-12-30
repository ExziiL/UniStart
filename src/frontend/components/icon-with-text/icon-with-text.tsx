import * as React from "react";

interface IconWithTextProps {
	text: string | number;
	icon: React.ReactNode;
}

const IconWithText = ({ text, icon }: IconWithTextProps) => {
	const defaultIconProps = {
		size: 20,
		strokeWidth: 2,
		className: "text-primary",
	};

	const iconWithProps = React.cloneElement(icon as React.ReactElement, defaultIconProps);

	return (
		<div className="flex items-center gap-2">
			{iconWithProps}
			{/* size={16}
				strokeWidth={2}
				className="text-primary" */}
			<span className="pt-[2px] text-base font-normal text-primary">{text}</span>
		</div>
	);
};

export default IconWithText;
