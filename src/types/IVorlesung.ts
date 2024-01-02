import { ProfessorProps } from './IProfessor';
import { Review } from './IReview';

export interface VorlesungProps {
	slug: string;
	name: string;
	semester: number;
	dates: {
		firstLecture: {
			weekday: string;
			time: {
				start: string;
				end: string;
			};
		},
		secondLecture: {
			weekday: string;
			time: {
				start: string;
				end: string;
			};
		},
	}
	professor: ProfessorProps;
	description: string;
	longDescription: string;
	location: string;
	rating: number;
	difficulty: 'easy' | 'medium' | 'hard';
	reviews: Review[];
}
