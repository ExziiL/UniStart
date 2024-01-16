import SettingsSidebar from "@/frontend/components/settings-sidebar";
import SettingsProfile from "@/frontend/components/settings/settings-profile";
import React from "react";

function Settings() {
	return (
		<div className="full-bleed flex flex-row">
			<SettingsSidebar />
			<SettingsProfile />
		</div>
	);
}

export default Settings;
