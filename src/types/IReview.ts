export interface Review {
	headline: string;
	courserating: number;
	date: Date;
	description: string;
	votes: number;
	focus: string;
	semester: number;
	// Hier noch den Verfasser hinzufügen, sobald wir die User aus der Datenbank haben. Wird dazu benötigt, um zu der Bewertungen das Semester und ggf. den Studiengang anzufügen.
}
