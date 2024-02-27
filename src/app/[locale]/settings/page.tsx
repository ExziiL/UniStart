import SettingsSidebar from "@/frontend/components/settings-sidebar";
import React from "react";

function SettingsPage() {
	return (
		<div className="full-bleed flex flex-row">
			<SettingsSidebar />

			<div className="m-auto">Oops. There is nothing here! Please select an option in the sidebar.</div>
		</div>
	);
}

export default SettingsPage;
