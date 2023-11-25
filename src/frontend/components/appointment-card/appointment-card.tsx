import React, { FunctionComponent } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/frontend/components/ui/card';
import { CalendarDays } from 'lucide-react';

type AppointmentCardProps = {
	title: string;
	date: string;
	dueDay: string;
};

const AppointmentCard: FunctionComponent<AppointmentCardProps> = ({ title, date, dueDay }) => {
	return (
		<Card className="flex flex-col justify-between shadow-sm">
			<CardHeader className="p-4 pb-0">
				<CardTitle className="text-base text-primary">{title}</CardTitle>
			</CardHeader>
			<div>
				<CardContent className="px-4 pb-3 pt-1">
					<p className="text-base font-light text-primary">{dueDay}</p>
				</CardContent>
				<CardFooter className="space-x-1 p-4 pt-0 text-light">
					<CalendarDays
						size={20}
						strokeWidth={1.75}
					/>
					<p className="text-sm">{date}</p>
				</CardFooter>
			</div>
		</Card>
	);
};

export default AppointmentCard;
