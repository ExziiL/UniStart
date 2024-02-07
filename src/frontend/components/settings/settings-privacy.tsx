import { Separator } from "@/frontend/components/ui/separator";
import React from "react";

function SettingsPrivacy() {
	return (
		<div className="mx-auto w-full max-w-[960px] space-y-8 p-4">
			<h1 className="pt-6 text-xl font-semibold text-primary">Privacy Settings</h1>
			<Separator />
			<div className="">
				<h2 className="text-lg font-semibold text-destructive">Activity</h2>
				<p className="mb-4 mt-1">Once you delete your account, there is no going back. Please be certain.</p>
			</div>
		</div>
	);
}

export default SettingsPrivacy;
