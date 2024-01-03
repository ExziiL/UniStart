import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/frontend/components/ui/card";
import * as React from "react";

// TODO: implement location type
function LocationCard({ location }: { location: any }) {
	return (
		<Card className="w-80 md:w-96">
			<CardHeader>
				<CardTitle className="text-xl">Grundlagen der Mathematik</CardTitle>
				<CardDescription>Prof. Dr. Dr. h.c. mult. Wolfgang Lück</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{location.name}</p>
				<p>Montag 10:00-12:00</p>
				<p>Freitag 10:00-12:00</p>
			</CardContent>
			<CardFooter>
				<p>Show location on map</p>
			</CardFooter>
			{/* <h2>{location.name}</h2>
			<p>{location.address}</p>
			<p>Gebäude und Raum</p> */}
		</Card>
	);
}

export default LocationCard;
