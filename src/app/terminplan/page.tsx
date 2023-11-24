import React from 'react';

import AppointmentCard from '@/frontend/components/appointment-card';
import AppointmentTable from '@/frontend/components/appointment-table';
import { Download } from 'lucide-react';

const eintraege = [
	{
		title: 'Infoveranstaltung für Masterstudiengänge',
		date: 'Montag, 10.07.2023',
		dueDay: 'fällig in 9 Tagen',
	},
	{
		title: 'Infoveranstaltung für Bachelorstudiengänge',
		date: 'Mittwoch, 12.07.2023',
		dueDay: 'fällig in 12 Tagen',
	},
	{
		title: 'Bewerbungsschluss für Masterstudiengänge',
		date: 'Samstag, 15.07.2023',
		dueDay: 'fällig in 16 Tagen',
	},
	{
		title: 'Letzter Termin zur Immatrikulation bei NC-freien Bachelorstudiengängen und höheren Semestern	',
		date: 'Samstag, 06.10.2023',
		dueDay: 'fällig in 43 Tagen',
	},
];

function Terminplan() {
	return (
		<div className="mx-auto max-w-[960px] space-y-16">
			<h1 className="my-16 text-6xl font-bold">Terminplan für das WS 2023/2024</h1>

			<div className="space-y-6">
				<h2 className="text-4xl font-medium">Upcoming Appointments</h2>
				<div className="grid grid-cols-2 gap-6">
					{eintraege.map((eintrag) => (
						<AppointmentCard
							key={eintrag.title + eintrag.date}
							title={eintrag.title}
							dueDay={eintrag.dueDay}
							date={eintrag.date}
						/>
					))}
				</div>
			</div>

			<div className="space-y-6">
				<h2 className="text-4xl font-medium">Appointment Overview</h2>

				<AppointmentTable />

				<div className="flex cursor-pointer items-start justify-end space-x-2 text-blue-400 hover:text-blue-600">
					<Download className="h-5 w-5" />
					<span className="">Download PDF</span>
				</div>
			</div>
		</div>
	);
}

export default Terminplan;
