import { Filter } from "lucide-react";
import * as React from "react";

interface FilterIconProps extends React.HTMLAttributes<HTMLDivElement> {
	data: any;
}

function FilterIcon({ data }: FilterIconProps) {
	return (
		<div className="flex cursor-pointer flex-row items-center gap-3">
			<Filter
				size={18}
				className=""
			/>
			<p>Filter</p>
		</div>
	);
}

export default FilterIcon;
