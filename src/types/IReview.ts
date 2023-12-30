export interface Review {
	headline: string;
	rating: number;
	date: Date;
	description: string;
	upvotes: number;
	downvotes: number;
	// Hier noch den Verfasser hinzufügen, sobald wir die User aus der Datenbank haben. Wird dazu benötigt, um zu der Bewertungen das Semester und ggf. den Studiengang anzufügen. 
}
