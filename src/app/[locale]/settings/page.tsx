import SettingsSidebar from "@/frontend/components/settings-sidebar";
import React from "react";

function SettingsPage() {
	return (
		<div className="full-bleed flex flex-row">
			<SettingsSidebar />

			<div>Oops. There is nothing here! please select an option in the sidebar.</div>
		</div>
	);
}

export default SettingsPage;
