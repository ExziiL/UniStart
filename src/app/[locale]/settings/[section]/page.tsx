"use client";

import NotFound from "@/app/[locale]/not-found";
import SettingsSidebar from "@/frontend/components/settings-sidebar";
import { Separator } from "@/frontend/components/ui/separator";
import { capitalize } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";

type SettingsComponentMap = {
	[path: string]: React.ComponentType;
};

const GeneralSettings = dynamic(() => import("@/frontend/components/settings/settings-general"));
const ProfileSettings = dynamic(() => import("@/frontend/components/settings/settings-profile"));
const PrivacySettings = dynamic(() => import("@/frontend/components/settings/settings-privacy"));
const FriendsSettings = dynamic(() => import("@/frontend/components/settings/settings-friends"));

const settingsComponents: SettingsComponentMap = {
	general: GeneralSettings,
	profile: ProfileSettings,
	privacy: PrivacySettings,
	friends: FriendsSettings,
};

const SettingsSection: React.FC = () => {
	const pathname = usePathname();
	const section = pathname.split("/").slice(3)[0];

	const SectionComponent = section && settingsComponents[section as keyof SettingsComponentMap];

	return (
		(SectionComponent && (
			<div className="full-bleed flex flex-row ">
				<SettingsSidebar />

				<div className="grow p-4 2xl:mr-[256px]">
					<div className="mx-auto max-w-[1024px]">
						{/* Breadcrumb Component */}
						<div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
							<div className="overflow-hidden text-ellipsis whitespace-nowrap">Settings</div>
							<ChevronRight size={16} />
							<div className="font-medium text-foreground">{capitalize(section)}</div>
						</div>

						<div className="space-y-8">
							<h1 className="pt-6 text-xl font-semibold text-primary">{capitalize(section)}</h1>

							<Separator />

							<SectionComponent />
						</div>
					</div>
				</div>
			</div>
		)) || <NotFound />
	);
};

export default SettingsSection;
