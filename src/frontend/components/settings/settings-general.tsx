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
			<div className="space-y-8">
				<div className="flex flex-row gap-6">
					<div className="flex flex-col gap-3">
						<div className="font-semibold">Profile Picture</div>
						<div className="flex gap-3">
							<Button>
								<Upload
									size={16}
									className="mr-2"
								/>
								Upload Image
							</Button>
							<Button variant="secondary">
								<Trash2
									size={16}
									className="mr-2"
								/>
								Delete
							</Button>
						</div>
						<p className="text-sm text-light">We support PNGs, JPEGs under 10MB</p>
					</div>
				</div>

				<ProfileFormInputs />
			</div>
		</div>
	);
}

export default SettingsGeneral;
