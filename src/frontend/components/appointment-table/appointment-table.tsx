import React from 'react';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/frontend/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/frontend/components/ui/tooltip';
import { Info } from 'lucide-react';

const eintraege = [
	{
		title: 'Freischaltung Online-Bewerbung',
		date: 'Mo, 10.07.2023',
		tooltip: 'Online-Bewerbung freigeschaltet',
	},
	{
		title: 'Infoveranstaltung für Masterstudiengänge (online)',
		date: 'Mi, 12.07.2023',
	},
	{
		title: 'Infoveranstaltung für Bachelorstudiengänge (Präsenz)',
		date: 'Sa, 15.07.2023',
	},
	{
		title: 'Bewerbungsschluss für Masterstudiengänge',
		date: 'Sa, 15.07.2023',
		tooltip: 'Ausschlussfrist! (ggf. Änderungen – siehe Zulassungssatzung)',
	},
	{
		title: 'Bewerbungsschluss für NC-Studiengänge (Bachelor) und höhere Semester',
		date: 'Di, 06.10.2023',
	},
	{
		title: 'Vorlage aktueller Notenspiegel (Wechsler höheres Semester)',
		date: 'Do, 07.10.2023',
	},
	{
		title: 'Letzter Termin zur Immatrikulation bei NC-freien Bachelorstudiengängen und höheren Semestern',
		date: 'So, 13.10.2023',
	},
	{
		title: 'Letzter Termin zur Immatrikulation bei Masterstudiengängen',
		date: 'Mi, 10.11.2023',
	},
	{
		title: 'Letzter Abgabetermin Anerkennungen',
		date: 'Fr, 12.12.2023',
	},
];

const AppointmentTable = () => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="md:w-4/5 w-fill">Title</TableHead>
					<TableHead className="text-right">Datum</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{eintraege.map((eintrag) => {
					return (
						<TableRow key={eintrag.title}>
							<TableCell className="md:w-4/5 w-fill flex flex-row items-center">
								{eintrag.title}

								{eintrag.tooltip && (
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<Info
													size={16}
													strokeWidth={2}
													className="ml-2 text-zinc-400"
												/>
											</TooltipTrigger>
											<TooltipContent>
												<p>{eintrag.tooltip}</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								)}
							</TableCell>

							<TableCell className="text-right min-w-[140px]">{eintrag.date}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default AppointmentTable;
