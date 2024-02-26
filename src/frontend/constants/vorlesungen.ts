import { VorlesungProps } from "@/types/IVorlesung";

export const VORLESUNGEN: VorlesungProps[] = [
	{
		slug: "grundlagen-der-mathematik",
		name: "Grundlagen der Mathematik",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Max Mustermann",
			email: "max.mustermann@hs-aalen.de",
		},
		description: "Eine Description über das Modul, von einem Studenten oder von uns geschrieben?",
		longDescription:
			"Dieser Kurs bietet eine umfassende Einführung in die Grundprinzipien der Mathematik, die für ein tiefes Verständnis weiterführender mathematischer Konzepte unerlässlich sind. Er umfasst Themen wie Algebra, Geometrie und Trigonometrie. Der Kurs legt besonderen Wert auf das logische Denken und das Lösen komplexer Probleme. Studierende lernen, mathematische Theorien zu verstehen und anzuwenden, was eine wichtige Grundlage für fortgeschrittene Studien in allen technischen und naturwissenschaftlichen Disziplinen bildet.",
		location: "G2 0.21",
		rating: 1.5,
		difficulty: "hard",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 40,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3.5,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "einfuehrung-in-die-informatik",
		name: "Einführung in die Informatik",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Julia Sommer",
			email: "julia.sommer@hs-aalen.de",
		},
		description: "Grundlegende Konzepte der Informatik, inklusive Algorithmen, Datenstrukturen und OOP.",
		longDescription:
			"Dieser Kurs bietet eine umfassende Einführung in die grundlegenden Konzepte der Informatik, einschließlich Algorithmen, Datenstrukturen und objektorientierter Programmierung (OOP). Die Studierenden lernen, wie Computer Daten verarbeiten, speichern und organisieren. Der Schwerpunkt liegt auf dem Erlernen von Programmierkonzepten und deren Anwendung in realen Projekten. Dieser Kurs ist ideal für Anfänger, die sich mit den Grundlagen der Informatik vertraut machen und praktische Programmierfähigkeiten entwickeln möchten.",
		location: "G1 2.21",
		rating: 3.7,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "datenbanken-grundlagen",
		name: "Datenbanken Grundlagen",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Lukas Bauer",
			email: "lukas.bauer@hs-aalen.de",
		},
		description: "Entwurf, Implementierung und Nutzung relationaler Datenbanksysteme.",
		longDescription:
			"Dieser Kurs behandelt die Grundlagen des Designs, der Implementierung und der Nutzung relationaler Datenbanksysteme. Die Studierenden erlernen die Prinzipien der Datenmodellierung, der Abfragesprachen (wie SQL) und der Datenbankarchitektur. Der Kurs bietet praktische Erfahrungen im Umgang mit gängigen Datenbanksystemen und lehrt, wie man effiziente und skalierbare Datenbanklösungen für reale Anwendungen entwickelt. Dies ist ein unverzichtbarer Kurs für alle, die eine Karriere in der Datenanalyse, Softwareentwicklung oder IT-Verwaltung anstreben.",
		location: "G2 0.01",
		rating: 4.1,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "webentwicklung",
		name: "Webentwicklung",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Anna Schmidt",
			email: "anna.schmidt@hs-aalen.de",
		},
		description: "Entwicklung moderner Webanwendungen mit HTML, CSS, und JavaScript.",
		longDescription:
			"Dieser Kurs konzentriert sich auf die Entwicklung moderner Webanwendungen unter Verwendung von HTML, CSS und JavaScript. Er deckt die Grundlagen des Webdesigns, responsive Design-Techniken und moderne Frontend-Entwicklungswerkzeuge ab. Die Studierenden lernen, interaktive und optisch ansprechende Websites zu erstellen und erlangen Verständnis für die Bedeutung von Benutzererfahrung und Zugänglichkeit. Der Kurs eignet sich hervorragend für diejenigen, die sich auf eine Karriere in der Webentwicklung vorbereiten oder ihre Fähigkeiten in diesem schnell wachsenden Bereich erweitern möchten.",
		location: "G2 0.30",
		rating: 3.9,
		difficulty: "easy",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "algorithmen-und-datenstrukturen",
		name: "Algorithmen und Datenstrukturen",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Stefan Klein",
			email: "stefan.klein@hs-aalen.de",
		},
		description: "Vertiefte Betrachtung von Algorithmen und deren Datenstrukturen.",
		longDescription:
			"Dieser fortgeschrittene Kurs vertieft das Verständnis von Algorithmen und Datenstrukturen. Die Studierenden erkunden effiziente Methoden zur Datenorganisation und -manipulation, wobei ein Schwerpunkt auf der Leistung und Optimierung von Algorithmen liegt. Der Kurs behandelt Themen wie Sortier- und Suchalgorithmen, Stapel, Warteschlangen, Bäume und Graphen. Dies ist ein entscheidender Kurs für Studierende, die ihre Fähigkeiten in der Softwareentwicklung und im computergestützten Problemlösen verbessern wollen.",
		location: "G2 0.21",
		rating: 2.8,
		difficulty: "hard",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "betriebssysteme-und-netzwerke",
		name: "Betriebssysteme und Netzwerke",
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Maria Neumann",
			email: "maria.neumann@hs-aalen.de",
		},
		description: "Grundlagen der Betriebssysteme und Computernetzwerke.",
		longDescription:
			"In diesem Kurs werden die Grundlagen von Betriebssystemen und Computernetzwerken behandelt. Die Studierenden lernen, wie Betriebssysteme Ressourcen verwalten, Prozesse steuern und mit Hardware interagieren. Der Kurs behandelt auch Netzwerkgrundlagen, einschließlich der Protokolle und Architekturen, die das Internet und andere Netzwerke ermöglichen. Dieser Kurs ist ideal für Studierende, die ihre Kenntnisse in den Bereichen Systemadministration, Netzwerksicherheit oder Softwareentwicklung vertiefen möchten.",
		location: "G2 2.30",
		rating: 3.3,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "objektorientierte-programmierung",
		name: "Objektorientierte Programmierung",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Felix Richter",
			email: "felix.richter@hs-aalen.de",
		},
		description: "Konzepte und Anwendungen der objektorientierten Programmierung in Java.",
		longDescription:
			"Dieser Kurs konzentriert sich auf die Konzepte und Anwendungen der objektorientierten Programmierung (OOP), hauptsächlich unter Verwendung der Programmiersprache Java. Studierende lernen die Grundlagen der OOP, einschließlich Klassen, Objekte, Vererbung und Polymorphie. Durch praktische Übungen und Projekte entwickeln die Teilnehmer ein tiefes Verständnis für das Design und die Implementierung von objektorientierten Systemen. Der Kurs ist unerlässlich für angehende Softwareentwickler.",
		location: "G2 0.23",
		rating: 4.5,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "theoretische-informatik",
		name: "Theoretische Informatik",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Leonie Beck",
			email: "leonie.beck@hs-aalen.de",
		},
		description: "Automaten, Berechenbarkeit und Komplexitätstheorie.",
		longDescription:
			"Der Kurs bietet eine intensive Einführung in die theoretischen Aspekte der Informatik, einschließlich Automatentheorie, Berechenbarkeit und Komplexitätstheorie. Die Studierenden beschäftigen sich mit grundlegenden Fragen der Informatik, wie etwa was Berechenbarkeit bedeutet und wie die Komplexität von Algorithmen gemessen und optimiert werden kann. Dieser Kurs ist wichtig für alle, die ein tiefes Verständnis der theoretischen Grundlagen der Informatik erlangen und anspruchsvolle Probleme in der Algorithmik und Computerwissenschaft lösen möchten.",
		location: "G2 0.23",
		rating: 1.9,
		difficulty: "hard",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "software-engineering",
		name: "Software Engineering",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Tobias Lang",
			email: "tobias.lang@hs-aalen.de",
		},
		description: "Methoden und Techniken für die Entwicklung großer Softwaresysteme.",
		longDescription:
			"Dieser Kurs behandelt Methoden und Techniken für die Entwicklung großer Software-Systeme. Studierende lernen, wie man Softwareprojekte plant, implementiert und wartet. Der Schwerpunkt liegt auf Software-Entwicklungslebenszyklen, Qualitätsmanagement, Teamarbeit und Projektmanagement. Der Kurs ist ideal für diejenigen, die anstreben, in professionellen Softwareentwicklungsteams zu arbeiten und Fähigkeiten in der Leitung und Koordination von Softwareprojekten zu erlangen.",
		location: "G2 0.21",
		rating: 3.0,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "mensch-computer-interaktion",
		name: "Mensch-Computer-Interaktion",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Sandra Koch",
			email: "sandra.koch@hs-aalen.de",
		},
		description: "Gestaltung benutzerfreundlicher Schnittstellen und Interaktionssysteme.",
		longDescription:
			"Der Kurs befasst sich mit der Gestaltung benutzerfreundlicher Schnittstellen und Interaktionssysteme. Die Studierenden lernen, wie man effektive, effiziente und zufriedenstellende Benutzererfahrungen gestaltet. Themen umfassen Benutzerforschung, Designprinzipien, Usability-Tests und Interface-Design. Dieser Kurs ist entscheidend für diejenigen, die sich auf UX/UI-Design oder die Entwicklung benutzerzentrierter Software und Systeme spezialisieren möchten.",
		location: "G2 1.10",
		rating: 4.2,
		difficulty: "easy",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "computergrafik",
		name: "Computergrafik",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Markus Wolf",
			email: "markus.wolf@hs-aalen.de",
		},
		description: "Einführung in die Erzeugung von Bildern mittels Computer.",
		longDescription:
			"In diesem Kurs lernen die Studierenden die Grundlagen der Erzeugung von Bildern mit Computern. Der Kurs umfasst Themen wie 2D- und 3D-Grafik, Animation, Rendering-Techniken und Grafik-Software. Die Studierenden arbeiten mit verschiedenen Werkzeugen und Technologien, um visuelle Inhalte zu erstellen und zu manipulieren. Dieser Kurs ist ideal für Studierende, die in Bereichen wie Grafikdesign, Spieleentwicklung oder visuellen Effekten arbeiten möchten.",
		location: "G2 2.21",
		rating: 3.8,
		difficulty: "medium",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "rechnerarchitektur",
		name: "Rechnerarchitektur",
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00",
				},
			},
		},
		professor: {
			name: "Laura Fischer",
			email: "laura.fischer@hs-aalen.de",
		},
		description: "Aufbau und Funktionsweise von Computersystemen und deren Komponenten.",
		longDescription:
			"Der Kurs behandelt den Aufbau und die Funktionsweise von Computersystemen und deren Komponenten. Studierende lernen über Prozessoren, Speicher, Eingabe-/Ausgabegeräte und die Interaktion dieser Elemente. Der Schwerpunkt liegt auf dem Verständnis, wie Hardware und Software zusammenarbeiten, um Computeranwendungen auszuführen. Dieser Kurs ist unerlässlich für Studierende, die sich für Hardware-Engineering, Systemintegration oder Computerhardware-Design interessieren.",
		location: "G2 0.31",
		rating: 2.5,
		difficulty: "hard",
		reviews: [
			{
				headline: "The perfect course for product managers who are new to the role",
				courserating: 5,
				date: new Date("2022-11-17T15:27:36"),
				description:
					"This course is a great introduction to product management. It covers a wide range of topics and gives you a good overview of the role. I would recommend this course to anyone who is new to product management.",
				votes: 18,
			},
			{
				headline: "Insightful and Comprehensive Overview of Modern Web Development",
				courserating: 4,
				date: new Date("2022-10-12"),
				description:
					"This course provided a thorough dive into modern web development techniques. It is ideal for those who already have some programming experience but want to update their skills with current trends and technologies in web development.",
				votes: 18,
			},
			{
				headline: "Excellent Deep Dive into Data Structures and Algorithms",
				courserating: 3,
				date: new Date("2022-09-05"),
				description:
					"For anyone looking to strengthen their understanding of data structures and algorithms, this course is a must. The instructor breaks down complex concepts in an understandable way, making it easier to grasp challenging topics.",
				votes: 18,
			},
			{
				headline: "Practical and Engaging Introduction to Object-Oriented Programming",
				courserating: 4,
				date: new Date("2022-08-20"),
				description:
					"I found this course to be both practical and engaging. It offers a great balance of theory and hands-on exercises, which helped solidify my understanding of object-oriented programming concepts.",
				votes: 18,
			},
			{
				headline: "A Comprehensive Journey through Software Engineering Principles",
				courserating: 2,
				date: new Date("2022-07-15"),
				description:
					"This course covers all the key areas of software engineering, from development methodologies to project management. The content is up-to-date and presented in a way that is easy to follow and understand. Highly beneficial for aspiring software engineers.",
				votes: 18,
			},
		],
	},
	{
		slug: "advanced-programming-concepts",
		name: "Advanced Programming Concepts",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Montag",
				time: {
					start: "14:00",
					end: "15:30",
				},
			},
			secondLecture: {
				weekday: "Mittwoch",
				time: {
					start: "14:00",
					end: "15:30",
				},
			},
		},
		professor: {
			name: "Julia Beispiel",
			email: "julia.beispiel@hs-aalen.de",
		},
		description:
			"This course dives deeper into programming concepts, including advanced data structures, algorithms, and software design patterns.",
		longDescription:
			"In this course, students will explore beyond the basics of programming to understand and apply advanced programming concepts. The curriculum is designed to deepen knowledge in areas such as complex data structures, sophisticated algorithms, and the principles of software design patterns. Through a combination of theoretical learning and practical application, students will gain the skills necessary to tackle more challenging programming tasks and projects. This course is ideal for those looking to elevate their programming expertise to the next level.",
		location: "G3 1.44",
		rating: 4,
		difficulty: "medium",
		reviews: [
			{
				headline: "Insightful and Practical Approach to Advanced Programming Concepts",
				courserating: 4.5,
				date: new Date("2022-09-05"),
				description:
					"This course offers an insightful and practical approach to understanding advanced programming concepts. The hands-on exercises and real-world examples provided valuable insights that enhanced my programming skills significantly.",
				votes: 18,
			},
			{
				headline: "Challenging Yet Rewarding Exploration of Database Systems",
				courserating: 4,
				date: new Date("2022-10-20"),
				description:
					"This course presents a challenging yet rewarding exploration of database systems. The depth of coverage on data modeling, SQL, and advanced topics like concurrency control made it a valuable learning experience for me.",
				votes: 18,
			},
			{
				headline: "Comprehensive and Practical Guide to Web Development",
				courserating: 4.2,
				date: new Date("2022-11-15"),
				description:
					"This course provides a comprehensive and practical guide to web development. The hands-on projects and in-depth discussions on modern web technologies have equipped me with the skills needed to build dynamic and responsive web applications.",
				votes: 18,
			},
		],
	},
	{
		slug: "database-systems",
		name: "Database Systems",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "09:00",
					end: "10:30",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "09:00",
					end: "10:30",
				},
			},
		},
		professor: {
			name: "Markus Daten",
			email: "markus.daten@hs-aalen.de",
		},
		description:
			"An introduction to the fundamental concepts of database systems, including data modeling, design, and SQL.",
		longDescription:
			"This course provides a comprehensive introduction to the core principles and technologies that underpin database systems. Students will learn about data modeling techniques, database design, and the use of SQL for data manipulation and querying. The course also covers advanced topics such as transaction management, concurrency control, and database security. Through lectures and hands-on lab sessions, students will gain practical experience in designing and implementing database solutions for real-world applications.",
		location: "G3 2.11",
		rating: 3.5,
		difficulty: "medium",
		reviews: [],
	},
	{
		slug: "web-development",
		name: "Web Development",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Freitag",
				time: {
					start: "11:00",
					end: "12:30",
				},
			},
			secondLecture: {
				weekday: "Freitag",
				time: {
					start: "14:00",
					end: "15:30",
				},
			},
		},
		professor: {
			name: "Laura Frontend",
			email: "laura.frontend@hs-aalen.de",
		},
		description:
			"Covers the basics of web development, including HTML, CSS, JavaScript, and responsive design principles.",
		longDescription:
			"This course offers an in-depth exploration of web development, focusing on the creation of dynamic, responsive websites and web applications using the latest technologies. Students will learn to effectively use HTML, CSS, and JavaScript to build user-friendly interfaces, while also diving into more advanced topics such as front-end frameworks, back-end integration, and web performance optimization. Through practical assignments and projects, participants will gain hands-on experience in developing full-stack web solutions that are both efficient and scalable.",
		location: "G4 0.56",
		rating: 4.5,
		difficulty: "easy",
		reviews: [],
	},
	{
		slug: "operating-systems",
		name: "Operating Systems",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Montag",
				time: {
					start: "16:00",
					end: "17:30",
				},
			},
			secondLecture: {
				weekday: "Mittwoch",
				time: {
					start: "16:00",
					end: "17:30",
				},
			},
		},
		professor: {
			name: "Simon Systems",
			email: "simon.systems@hs-aalen.de",
		},
		description:
			"An exploration of operating system principles, including processes, memory management, file systems, and security.",
		longDescription:
			"This course delves into the core principles of operating systems, covering topics such as processes, memory management, file systems, and security in depth. Students will explore the inner workings of operating systems, including scheduling algorithms, memory allocation strategies, and file system organization. The course also addresses key security concepts such as access control, authentication, and encryption. Through a combination of theoretical study and practical exercises, participants will develop a solid understanding of how operating systems function and how to optimize their performance for various computing environments.",
		location: "G5 1.23",
		rating: 3,
		difficulty: "hard",
		reviews: [],
	},
	{
		slug: "networks-and-communications",
		name: "Networks and Communications",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "14:00",
					end: "15:30",
				},
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "14:00",
					end: "15:30",
				},
			},
		},
		professor: {
			name: "Nina Netzwerk",
			email: "nina.netzwerk@hs-aalen.de",
		},
		description:
			"Provides an overview of networking fundamentals, protocols, and modern communication technologies.",
		longDescription:
			"This course provides a comprehensive overview of networking fundamentals, protocols, and modern communication technologies. Students will delve into the intricacies of network design, implementation, and troubleshooting, gaining practical skills in configuring network devices, analyzing network performance, and ensuring secure communication. The course also covers emerging technologies such as cloud networking, software-defined networking, and network virtualization, preparing students for the evolving landscape of network infrastructure.",
		location: "G6 2.34",
		rating: 4,
		difficulty: "medium",
		reviews: [],
	},
	{
		slug: "software-engineering",
		name: "Software Engineering",
		semester: 3,
		dates: {
			firstLecture: {
				weekday: "Mittwoch",
				time: {
					start: "10:00",
					end: "11:30",
				},
			},
			secondLecture: {
				weekday: "Freitag",
				time: {
					start: "10:00",
					end: "11:30",
				},
			},
		},
		professor: {
			name: "Sofia Engineer",
			email: "sofia.engineer@hs-aalen.de",
		},
		description:
			"This course covers the methodologies and tools used in the software development lifecycle, including agile and DevOps practices.",
		longDescription:
			"This course covers the methodologies and tools used in the software development lifecycle, including agile and DevOps practices. Students will learn about software requirements, design, implementation, testing, and maintenance. The course emphasizes collaborative development, version control, and continuous integration and deployment. By the end of the course, students will have practical experience in building software projects following industry best practices.",
		location: "G7 3.45",
		rating: 4.2,
		difficulty: "medium",
		reviews: [],
	},
];
