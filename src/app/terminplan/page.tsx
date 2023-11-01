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
];

function Terminplan() {
	return (
		<div className="max-w-[960px] space-y-16 mx-auto">
			<h1 className="text-6xl font-bold my-16">Terminplan für das WS 2023/2024</h1>

			<div className="space-y-6">
				<h2 className="text-4xl font-medium">Upcoming Appointments</h2>
				<div className="flex flex-wrap gap-4">
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

				<div className="space-x-2 flex items-start justify-end cursor-pointer text-blue-400 hover:text-blue-600">
					<Download className="w-5 h-5" />
					<span className="">Download PDF</span>
				</div>
			</div>
		</div>
	);
}

export default Terminplan;
