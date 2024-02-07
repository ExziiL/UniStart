import ProfileFormInputs from "@/frontend/components/settings-form-profile-inputs/settings-form-profile-inputs";
import { Button } from "@/frontend/components/ui/button";
import { Trash2, Upload } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

function SettingsGeneral() {
	return (
		<div className="mx-auto w-full max-w-[960px] space-y-8 p-4">
			<h1 className="pt-6 text-xl font-semibold text-primary">General Settings</h1>
			<Separator />
			<div className="">
				<h2 className="text-lg font-semibold text-destructive">Delete account</h2>
				<p className="mb-4 mt-1">Once you delete your account, there is no going back. Please be certain.</p>
				<Button variant="destructive">
					<Trash2
						size={18}
						className="mr-2"
					/>
					Delete your account
				</Button>
			</div>
		</div>
	);
}

export default SettingsGeneral;
