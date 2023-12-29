import { ProfessorProps } from './IProfessor';

export interface VorlesungProps {
	slug: string;
	name: string;
	semester: number;
	professor: ProfessorProps;
	description: string;
	longDescription: string;
	location: string;
	rating: number;
	numOfRating: number;
	difficulty: 'easy' | 'medium' | 'hard';
}
