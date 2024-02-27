import { capitalize } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import * as React from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
	sections: string[];
}

function Breadcrumb({ sections, className }: BreadcrumbProps) {
	return (
		<div className={`mt-6 flex items-center space-x-1 text-sm text-muted-foreground ${className}`}>
			{sections.map((section, index) => (
				<React.Fragment key={section}>
					{index !== 0 && <ChevronRight size={16} />}
					<div
						className={
							index === sections.length - 1
								? "font-medium text-foreground"
								: "overflow-hidden text-ellipsis whitespace-nowrap"
						}
					>
						{capitalize(section)}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}

export default Breadcrumb;
