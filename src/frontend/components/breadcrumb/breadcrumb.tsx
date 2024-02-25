import { capitalize } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import * as React from "react";

interface BreadcrumbProps {
	sections: string[];
}

function Breadcrumb({ sections }: BreadcrumbProps) {
	return (
		<div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
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
