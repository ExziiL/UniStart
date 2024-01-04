"use client";

import { Button } from "@/frontend/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/frontend/components/ui/drawer";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/frontend/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import * as React from "react";
import { useMediaQuery } from "usehooks-ts";

interface FilterIconProps extends React.HTMLAttributes<HTMLDivElement> {
	data?: any;
}

function FilterIcon({ data }: FilterIconProps) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return <div>{isMobile ? <MobileFilterMenu /> : <FilterMenu />}</div>;
}

export default FilterIcon;

const FilterButton = () => {
	return (
		<Button
			variant="outline"
			className="flex w-fit cursor-pointer flex-row items-center"
		>
			<Filter
				size={16}
				className="mr-2"
			/>
			<p>Filter</p>
		</Button>
	);
};

const FilterMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<FilterButton />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const MobileFilterMenu = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				<FilterButton />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
					<DrawerDescription>This action cannot be undone.</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
