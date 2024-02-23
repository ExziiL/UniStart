'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/frontend/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/frontend/components/ui/tooltip';
import { Info } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAppointments } from './actions';
import { Infos } from '@prisma/client';

const AppointmentTable = () => {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['webscrapper'], queryFn: fetchAppointments, retry: false
	})

	if (isPending) {
		return (
			<div>Waiting for data</div>
		)
	}
	if (isError) {
		return (<div>{error.message}</div>)
	}

	const entries: Infos[] = data?.appointments;

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-fill text-light md:w-4/5">Title</TableHead>
					<TableHead className="text-right text-light">Datum</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{entries.map((entry) => {
					return (
						<TableRow key={entry.title}>
							<TableCell className="w-fill flex flex-row items-center text-primary md:w-4/5">
								{entry.title}

								{entry.annotation && (
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<Info
													size={16}
													strokeWidth={2}
													className="ml-2 cursor-default text-light"
												/>
											</TooltipTrigger>
											<TooltipContent>
												<p>{entry.annotation}</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								)}
							</TableCell>
							<TableCell className="min-w-[140px] text-right text-primary">{entry.dates[0]}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default AppointmentTable;
