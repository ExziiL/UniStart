import ProfileFormInputs from "@/frontend/components/settings-form-profile-inputs/settings-form-profile-inputs";
import { Button } from "@/frontend/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/frontend/components/ui/select";
import { Trash2, Upload } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

function SettingsGeneral() {
	return (
		<div className="mx-auto w-full max-w-[960px] space-y-8 p-4">
			<h1 className="pt-6 text-xl font-semibold text-primary">General Settings</h1>
			<Separator />
			<div className="">
				<div className="mb-12">
					<h2 className="text-lg font-medium text-primary">Preferred Language</h2>
					<div>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue
									placeholder="Language"
									defaultValue="de"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">English</SelectItem>
								<SelectItem value="de">German</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-destructive">Delete account</h2>
					<p className="mb-4 mt-1">
						Once you delete your account, there is no going back. Please be certain.
					</p>
					<Button variant="destructive">
						<Trash2
							size={18}
							className="mr-2"
						/>
						Delete your account
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SettingsGeneral;
