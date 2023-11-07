import { BadgeProps } from '@/frontend/components/ui/badge';

export interface VorlesungProps {
	slug: string;
	name: string;
	professor: string;
	email: string;
	description: string;
	rating: number;
	numOfRating: number;
	difficulty: BadgeProps['difficulty'];
}
