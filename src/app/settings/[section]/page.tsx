"use client";
import settings from "@/frontend/components/settings";
import SettingsSidebar from "@/frontend/components/settings-sidebar";
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
	const section = pathname.split("/")[2];

	const SectionComponent = section && settingsComponents[section as keyof SettingsComponentMap];

	return (
		<div className="full-bleed flex flex-row">
			<SettingsSidebar />
			<div>
				{pathname}
				{SectionComponent ? <SectionComponent /> : <div>Please select a setting option</div>}
			</div>
		</div>
	);
};

export default SettingsSection;
