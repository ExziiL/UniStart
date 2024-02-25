"use client";

import AppointmentCard from "@/frontend/components/appointment-card";
import AppointmentTable from "@/frontend/components/appointment-table";
import { fetchAppointments } from "@/frontend/components/appointment-table/actions";
import Breadcrumb from "@/frontend/components/breadcrumb";
import { Button } from "@/frontend/components/ui/button";
import { Skeleton } from "@/frontend/components/ui/skeleton";
import { Infos } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

function Terminplan() {
	const router = useRouter();
	const { isPending, isError, error, data } = useQuery({
		queryKey: ["webscrapper"],
		queryFn: fetchAppointments,
		retry: false,
	});

	if (isPending) {
		return (
			<div className="mx-auto max-w-[1024px] space-y-16">
				<Skeleton className="my-16 h-16 w-[1000px]" />

				<div className="space-y-6">
					<div className="flex items-end gap-4">
						<Skeleton className="h-10 w-[425px]" />
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Skeleton className="h-[150px] w-full" />
						<Skeleton className="h-[150px] w-full" />
						<Skeleton className="h-[150px] w-full" />
						<Skeleton className="h-[150px] w-full" />
					</div>
				</div>

				<div className="space-y-6 pb-16">
					<Skeleton className="h-12 w-[400px]" />

					<div>
						<Skeleton className="h-[600px] w-full" />
					</div>
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex h-full flex-col justify-center pb-60">
				<div className="text-4xl font-medium">
					<div>Oh no,</div>
					<p>Something went wrong!</p>
				</div>
				<div className="pt-4 text-light">Please refresh the page and try again</div>
				<div className="space-x-2">
					<Button
						variant="default"
						className="mt-8"
						onClick={() => router.refresh()}
					>
						Refresh
					</Button>
					<Button
						variant="ghost"
						className="mt-8"
						onClick={() => router.back()}
					>
						Back
					</Button>
				</div>
			</div>
		);
	}

	const entries: Infos[] = data?.appointments;

	const currentDate = new Date();

	const upcomingEntries = entries
		.filter((entry) => {
			const [day, month, year] = entry.dates[0].split(".");
			const entryDate = new Date(`${year}-${month}-${day}`);
			return entryDate >= currentDate;
		})
		.slice(0, 4);

	return (
		<div className="mx-auto max-w-[1024px] space-y-8">
			<Breadcrumb sections={["Terminplan für das Sommersemester 2024"]} />

			<div className="space-y-6">
				<div className="flex items-end gap-4">
					<h2 className="text-2xl font-medium text-primary">Upcoming Appointments</h2>
				</div>
				<div className="grid grid-cols-2 gap-6">
					{upcomingEntries.map((entry) => (
						<AppointmentCard
							key={entry.title}
							entry={entry}
						/>
					))}
				</div>
			</div>

			<div className="space-y-6 pt-12">
				<h2 className="text-2xl font-medium text-primary">Appointment Overview</h2>

				<AppointmentTable />
			</div>
		</div>
	);
}

export default Terminplan;
