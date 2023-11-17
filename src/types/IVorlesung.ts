import { BadgeProps } from '@/frontend/components/ui/badge';
import { ProfessorProps } from './IProfessor';

export interface VorlesungProps {
	slug: string;
	name: string;
	professor: ProfessorProps;
	description: string;
	longDescription: string;
	rating: number;
	numOfRating: number;
	difficulty: BadgeProps['difficulty'];
}
