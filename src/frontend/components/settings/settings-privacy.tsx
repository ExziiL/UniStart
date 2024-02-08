import { Checkbox } from "@/frontend/components/ui/checkbox";
import { Separator } from "@/frontend/components/ui/separator";
import React from "react";

function SettingsPrivacy() {
	return (
		<div className="mx-auto w-full max-w-[960px] space-y-8">
			<div className="">
				<h2 className="text-lg font-semibold text-destructive">Activity</h2>
				<p className="mb-4 mt-1">Once you delete your account, there is no going back. Please be certain.</p>
			</div>
			<div className="space-y-8">
				<div className="flex items-center space-x-2">
					<Checkbox id="profilePic" />
					<label
						htmlFor="profilePic"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Hide Profile Picture
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox id="onlineStatus" />
					<label
						htmlFor="onlineStatus"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Hide Online Status
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox id="friendRequests" />
					<label
						htmlFor="friendRequests"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Disable Friend Requests
					</label>
				</div>
			</div>
		</div>
	);
}

export default SettingsPrivacy;
