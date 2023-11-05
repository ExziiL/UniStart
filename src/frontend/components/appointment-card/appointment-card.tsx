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
		<Card className="w-[309.33px] shadow-md">
			<CardHeader className="p-4 pb-0">
				<CardTitle className="text-base truncate">{title}</CardTitle>
			</CardHeader>
			<CardContent className="px-4 py-2">
				<p className="text-base font-light">{dueDay}</p>
			</CardContent>
			<CardFooter className="space-x-1 p-4 pt-0 text-[#64748B]">
				<CalendarDays
					size={20}
					strokeWidth={1.75}
				/>
				<p className="text-sm">{date}</p>
			</CardFooter>
		</Card>
	);
};

export default AppointmentCard;
