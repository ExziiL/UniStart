import { ProfessorProps } from './IProfessor';

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
	numOfRating: number;
	difficulty: 'easy' | 'medium' | 'hard';
}
