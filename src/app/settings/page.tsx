import SettingsSidebar from "@/frontend/components/settings-sidebar";
import React from "react";

function SettingsPage() {
	return (
		<div className="full-bleed flex flex-row">
			<SettingsSidebar />

			<div>Please select an options settings</div>
		</div>
	);
}

export default SettingsPage;
