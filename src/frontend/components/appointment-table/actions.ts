export const fetchAppointments = async () => {
	const response = await fetch("api-calls/scrapper", { method: "GET", headers: { ContentType: "application/json" } });

	if (!response.ok) {
		throw new Error("Something went wrong while fetching appointmets");
	}

	return await response.json();
};
