import React, { FunctionComponent } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/frontend/components/ui/card";
import { Infos } from "@prisma/client";
import { CalendarDays } from "lucide-react";
import { DateTime } from "luxon";

type AppointmentCardProps = {
	entry: Infos;
	// date: string;
};

const AppointmentCard: FunctionComponent<AppointmentCardProps> = ({ entry }) => {
	const firstDate = entry.dates[0];
	const secondDate = entry.dates[1];

	const daysUntilEvent = DateTime.fromFormat(firstDate, "dd.MM.yyyy").diff(DateTime.now(), "days").days.toFixed();

	return (
		<Card className="flex flex-col justify-between shadow-sm">
			<CardHeader className="p-4 pb-0">
				<CardTitle className="text-base text-primary">{entry.title}</CardTitle>
			</CardHeader>
			<div>
				<CardContent className="px-4 pb-3 pt-1">
					<p className="text-base font-light text-primary">{daysUntilEvent} Tage bis zur Veranstaltung</p>
				</CardContent>
				<CardFooter className="space-x-1 p-4 pt-0 text-light">
					<CalendarDays
						size={18}
						strokeWidth={1.75}
					/>
					<p className="text-sm">
						{firstDate} {secondDate && `bis ${secondDate}`}
					</p>
				</CardFooter>
			</div>
		</Card>
	);
};

export default AppointmentCard;
