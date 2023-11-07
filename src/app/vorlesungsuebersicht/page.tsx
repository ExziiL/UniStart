import CourseOverviewCard from '@/frontend/components/course-overview-card';
import { BadgeProps } from '@/frontend/components/ui/badge';
import React from 'react';

const VORLESUNGEN = [
	{
		name: 'Grundlagen der Mathematik',
		professor: 'Max Mustermann',
		email: 'max.mustermann@hs-aalen.de',
		description: 'Eine Description über das Modul, von einem Studenten oder von uns geschrieben?',
		rating: 1.5,
		numOfRating: 12,
		difficulty: 'hard',
	},
	{
		name: 'Einführung in die Informatik',
		professor: 'Julia Sommer',
		email: 'julia.sommer@hs-aalen.de',
		description: 'Grundlegende Konzepte der Informatik, inklusive Algorithmen, Datenstrukturen und OOP.',
		rating: 3.7,
		numOfRating: 27,
		difficulty: 'medium',
	},
	{
		name: 'Datenbanken Grundlagen',
		professor: 'Lukas Bauer',
		email: 'lukas.bauer@hs-aalen.de',
		description: 'Entwurf, Implementierung und Nutzung relationaler Datenbanksysteme.',
		rating: 4.1,
		numOfRating: 35,
		difficulty: 'medium',
	},
	{
		name: 'Webentwicklung',
		professor: 'Anna Schmidt',
		email: 'anna.schmidt@hs-aalen.de',
		description: 'Entwicklung moderner Webanwendungen mit HTML, CSS, und JavaScript.',
		rating: 3.9,
		numOfRating: 19,
		difficulty: 'easy',
	},
	{
		name: 'Algorithmen und Datenstrukturen',
		professor: 'Stefan Klein',
		email: 'stefan.klein@hs-aalen.de',
		description: 'Vertiefte Betrachtung von Algorithmen und deren Datenstrukturen.',
		rating: 2.8,
		numOfRating: 40,
		difficulty: 'hard',
	},
	{
		name: 'Betriebssysteme und Netzwerke',
		professor: 'Maria Neumann',
		email: 'maria.neumann@hs-aalen.de',
		description: 'Grundlagen der Betriebssysteme und Computernetzwerke.',
		rating: 3.3,
		numOfRating: 18,
		difficulty: 'medium',
	},
	{
		name: 'Objektorientierte Programmierung',
		professor: 'Felix Richter',
		email: 'felix.richter@hs-aalen.de',
		description: 'Konzepte und Anwendungen der objektorientierten Programmierung in Java.',
		rating: 4.5,
		numOfRating: 25,
		difficulty: 'medium',
	},
	{
		name: 'Theoretische Informatik',
		professor: 'Leonie Beck',
		email: 'leonie.beck@hs-aalen.de',
		description: 'Automaten, Berechenbarkeit und Komplexitätstheorie.',
		rating: 1.9,
		numOfRating: 20,
		difficulty: 'hard',
	},
	{
		name: 'Software Engineering',
		professor: 'Tobias Lang',
		email: 'tobias.lang@hs-aalen.de',
		description: 'Methoden und Techniken für die Entwicklung großer Softwaresysteme.',
		rating: 3.0,
		numOfRating: 22,
		difficulty: 'medium',
	},
	{
		name: 'Mensch-Computer-Interaktion',
		professor: 'Sandra Koch',
		email: 'sandra.koch@hs-aalen.de',
		description: 'Gestaltung benutzerfreundlicher Schnittstellen und Interaktionssysteme.',
		rating: 4.2,
		numOfRating: 30,
		difficulty: 'easy',
	},
	{
		name: 'Computergrafik',
		professor: 'Markus Wolf',
		email: 'markus.wolf@hs-aalen.de',
		description: 'Einführung in die Erzeugung von Bildern mittels Computer.',
		rating: 3.8,
		numOfRating: 28,
		difficulty: 'medium',
	},
	{
		name: 'Rechnerarchitektur',
		professor: 'Laura Fischer',
		email: 'laura.fischer@hs-aalen.de',
		description: 'Aufbau und Funktionsweise von Computersystemen und deren Komponenten.',
		rating: 2.5,
		numOfRating: 16,
		difficulty: 'hard',
	},
];

function Vorlesungsuebersicht() {
	return (
		<div className="grid gap-4 p-4 md:grid-cols-2 lg:p-0 lg:py-4">
			{VORLESUNGEN.map((vorlesung) => (
				<CourseOverviewCard
					name={vorlesung.name}
					professor={vorlesung.professor}
					email={vorlesung.email}
					description={vorlesung.description}
					rating={vorlesung.rating}
					numOfRating={vorlesung.numOfRating}
					difficulty={(vorlesung.difficulty as BadgeProps['rating']) || 'none'}
				/>
			))}
		</div>
	);
}

export default Vorlesungsuebersicht;
