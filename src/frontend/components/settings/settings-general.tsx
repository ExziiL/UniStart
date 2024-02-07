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
			<div className="space-y-8"></div>
		</div>
	);
}

export default SettingsGeneral;
