import { useUserContext } from "@/context/user-context/user-context";
import ProfileFormInputs from "@/frontend/components/settings-form-profile-inputs/settings-form-profile-inputs";
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar";
import { Button } from "@/frontend/components/ui/button";
import { Trash2, Upload, UserCircle } from "lucide-react";
import React from "react";

function SettingsProfile() {
	const { userState } = useUserContext();
	return (
		<div className="mx-auto w-full max-w-[1024px] space-y-8">
			<div className="mb-8 space-y-8">
				<div className="flex flex-row gap-6">
					<Avatar className="h-16 w-16">
						<AvatarImage src={userState.image} />
						<AvatarFallback>
							<UserCircle
								size={80}
								strokeWidth={1}
							/>
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-3">
						<div className="font-semibold">Hi {userState.name}!</div>
						<div className="flex flex-col gap-3 sm:flex-row">
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
						<p className="text-xs text-light">We support PNGs, JPEGs under 10MB</p>
					</div>
				</div>

				<ProfileFormInputs />
			</div>
		</div>
	);
}

export default SettingsProfile;
