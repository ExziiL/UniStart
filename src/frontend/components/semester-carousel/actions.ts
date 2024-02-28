export const fetchLectures = async () => {
	const response = await fetch("api-calls/lectures", { method: "GET", headers: { ContentType: "application/json" } });

	if (!response.ok) {
		throw new Error("Something went wrong while fetching lectures");
	}

	return await response.json();
};
