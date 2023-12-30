import { VorlesungProps } from '@/types/IVorlesung';

export const VORLESUNGEN: VorlesungProps[] = [
	{
		slug: 'grundlagen-der-mathematik',
		name: 'Grundlagen der Mathematik',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00" 
				}
			}
		},
		professor: {
			name: 'Max Mustermann',
			email: 'max.mustermann@hs-aalen.de',
		},
		description: 'Eine Description über das Modul, von einem Studenten oder von uns geschrieben?',
		longDescription:
			'Dieser Kurs bietet eine umfassende Einführung in die Grundprinzipien der Mathematik, die für ein tiefes Verständnis weiterführender mathematischer Konzepte unerlässlich sind. Er umfasst Themen wie Algebra, Geometrie und Trigonometrie. Der Kurs legt besonderen Wert auf das logische Denken und das Lösen komplexer Probleme. Studierende lernen, mathematische Theorien zu verstehen und anzuwenden, was eine wichtige Grundlage für fortgeschrittene Studien in allen technischen und naturwissenschaftlichen Disziplinen bildet.',
		location: "G2 0.21",
		rating: 1.5,
		numOfRating: 12,
		difficulty: 'hard',
	},
	{
		slug: 'einfuehrung-in-die-informatik',
		name: 'Einführung in die Informatik',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Julia Sommer',
			email: 'julia.sommer@hs-aalen.de',
		},
		description: 'Grundlegende Konzepte der Informatik, inklusive Algorithmen, Datenstrukturen und OOP.',
		longDescription:
			'Dieser Kurs bietet eine umfassende Einführung in die grundlegenden Konzepte der Informatik, einschließlich Algorithmen, Datenstrukturen und objektorientierter Programmierung (OOP). Die Studierenden lernen, wie Computer Daten verarbeiten, speichern und organisieren. Der Schwerpunkt liegt auf dem Erlernen von Programmierkonzepten und deren Anwendung in realen Projekten. Dieser Kurs ist ideal für Anfänger, die sich mit den Grundlagen der Informatik vertraut machen und praktische Programmierfähigkeiten entwickeln möchten.',
		location: "G1 2.21",
		rating: 3.7,
		numOfRating: 27,
		difficulty: 'medium',
	},
	{
		slug: 'datenbanken-grundlagen',
		name: 'Datenbanken Grundlagen',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Lukas Bauer',
			email: 'lukas.bauer@hs-aalen.de',
		},
		description: 'Entwurf, Implementierung und Nutzung relationaler Datenbanksysteme.',
		longDescription:
			'Dieser Kurs behandelt die Grundlagen des Designs, der Implementierung und der Nutzung relationaler Datenbanksysteme. Die Studierenden erlernen die Prinzipien der Datenmodellierung, der Abfragesprachen (wie SQL) und der Datenbankarchitektur. Der Kurs bietet praktische Erfahrungen im Umgang mit gängigen Datenbanksystemen und lehrt, wie man effiziente und skalierbare Datenbanklösungen für reale Anwendungen entwickelt. Dies ist ein unverzichtbarer Kurs für alle, die eine Karriere in der Datenanalyse, Softwareentwicklung oder IT-Verwaltung anstreben.',
		location: "G2 0.01",
		rating: 4.1,
		numOfRating: 35,
		difficulty: 'medium',
	},
	{
		slug: 'webentwicklung',
		name: 'Webentwicklung',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Anna Schmidt',
			email: 'anna.schmidt@hs-aalen.de',
		},
		description: 'Entwicklung moderner Webanwendungen mit HTML, CSS, und JavaScript.',
		longDescription:
			'Dieser Kurs konzentriert sich auf die Entwicklung moderner Webanwendungen unter Verwendung von HTML, CSS und JavaScript. Er deckt die Grundlagen des Webdesigns, responsive Design-Techniken und moderne Frontend-Entwicklungswerkzeuge ab. Die Studierenden lernen, interaktive und optisch ansprechende Websites zu erstellen und erlangen Verständnis für die Bedeutung von Benutzererfahrung und Zugänglichkeit. Der Kurs eignet sich hervorragend für diejenigen, die sich auf eine Karriere in der Webentwicklung vorbereiten oder ihre Fähigkeiten in diesem schnell wachsenden Bereich erweitern möchten.',
		location: "G2 0.30",
		rating: 3.9,
		numOfRating: 19,
		difficulty: 'easy',
	},
	{
		slug: 'algorithmen-und-datenstrukturen',
		name: 'Algorithmen und Datenstrukturen',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Stefan Klein',
			email: 'stefan.klein@hs-aalen.de',
		},
		description: 'Vertiefte Betrachtung von Algorithmen und deren Datenstrukturen.',
		longDescription:
			'Dieser fortgeschrittene Kurs vertieft das Verständnis von Algorithmen und Datenstrukturen. Die Studierenden erkunden effiziente Methoden zur Datenorganisation und -manipulation, wobei ein Schwerpunkt auf der Leistung und Optimierung von Algorithmen liegt. Der Kurs behandelt Themen wie Sortier- und Suchalgorithmen, Stapel, Warteschlangen, Bäume und Graphen. Dies ist ein entscheidender Kurs für Studierende, die ihre Fähigkeiten in der Softwareentwicklung und im computergestützten Problemlösen verbessern wollen.',
		location: "G2 0.21",
		rating: 2.8,
		numOfRating: 40,
		difficulty: 'hard',
	},
	{
		slug: 'betriebssysteme-und-netzwerke',
		name: 'Betriebssysteme und Netzwerke',
		semester: 1,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Maria Neumann',
			email: 'maria.neumann@hs-aalen.de',
		},
		description: 'Grundlagen der Betriebssysteme und Computernetzwerke.',
		longDescription:
			'In diesem Kurs werden die Grundlagen von Betriebssystemen und Computernetzwerken behandelt. Die Studierenden lernen, wie Betriebssysteme Ressourcen verwalten, Prozesse steuern und mit Hardware interagieren. Der Kurs behandelt auch Netzwerkgrundlagen, einschließlich der Protokolle und Architekturen, die das Internet und andere Netzwerke ermöglichen. Dieser Kurs ist ideal für Studierende, die ihre Kenntnisse in den Bereichen Systemadministration, Netzwerksicherheit oder Softwareentwicklung vertiefen möchten.',
		location: "G2 2.30",
		rating: 3.3,
		numOfRating: 18,
		difficulty: 'medium',
	},
	{
		slug: 'objektorientierte-programmierung',
		name: 'Objektorientierte Programmierung',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Felix Richter',
			email: 'felix.richter@hs-aalen.de',
		},
		description: 'Konzepte und Anwendungen der objektorientierten Programmierung in Java.',
		longDescription:
			'Dieser Kurs konzentriert sich auf die Konzepte und Anwendungen der objektorientierten Programmierung (OOP), hauptsächlich unter Verwendung der Programmiersprache Java. Studierende lernen die Grundlagen der OOP, einschließlich Klassen, Objekte, Vererbung und Polymorphie. Durch praktische Übungen und Projekte entwickeln die Teilnehmer ein tiefes Verständnis für das Design und die Implementierung von objektorientierten Systemen. Der Kurs ist unerlässlich für angehende Softwareentwickler.',
		location: "G2 0.23",
		rating: 4.5,
		numOfRating: 25,
		difficulty: 'medium',
	},
	{
		slug: 'theoretische-informatik',
		name: 'Theoretische Informatik',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Leonie Beck',
			email: 'leonie.beck@hs-aalen.de',
		},
		description: 'Automaten, Berechenbarkeit und Komplexitätstheorie.',
		longDescription:
			'Der Kurs bietet eine intensive Einführung in die theoretischen Aspekte der Informatik, einschließlich Automatentheorie, Berechenbarkeit und Komplexitätstheorie. Die Studierenden beschäftigen sich mit grundlegenden Fragen der Informatik, wie etwa was Berechenbarkeit bedeutet und wie die Komplexität von Algorithmen gemessen und optimiert werden kann. Dieser Kurs ist wichtig für alle, die ein tiefes Verständnis der theoretischen Grundlagen der Informatik erlangen und anspruchsvolle Probleme in der Algorithmik und Computerwissenschaft lösen möchten.',
		location: "G2 0.23",
		rating: 1.9,
		numOfRating: 20,
		difficulty: 'hard',
	},
	{
		slug: 'software-engineering',
		name: 'Software Engineering',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Tobias Lang',
			email: 'tobias.lang@hs-aalen.de',
		},
		description: 'Methoden und Techniken für die Entwicklung großer Softwaresysteme.',
		longDescription:
			'Dieser Kurs behandelt Methoden und Techniken für die Entwicklung großer Software-Systeme. Studierende lernen, wie man Softwareprojekte plant, implementiert und wartet. Der Schwerpunkt liegt auf Software-Entwicklungslebenszyklen, Qualitätsmanagement, Teamarbeit und Projektmanagement. Der Kurs ist ideal für diejenigen, die anstreben, in professionellen Softwareentwicklungsteams zu arbeiten und Fähigkeiten in der Leitung und Koordination von Softwareprojekten zu erlangen.',
		location: "G2 0.21",
		rating: 3.0,
		numOfRating: 22,
		difficulty: 'medium',
	},
	{
		slug: 'mensch-computer-interaktion',
		name: 'Mensch-Computer-Interaktion',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Sandra Koch',
			email: 'sandra.koch@hs-aalen.de',
		},
		description: 'Gestaltung benutzerfreundlicher Schnittstellen und Interaktionssysteme.',
		longDescription:
			'Der Kurs befasst sich mit der Gestaltung benutzerfreundlicher Schnittstellen und Interaktionssysteme. Die Studierenden lernen, wie man effektive, effiziente und zufriedenstellende Benutzererfahrungen gestaltet. Themen umfassen Benutzerforschung, Designprinzipien, Usability-Tests und Interface-Design. Dieser Kurs ist entscheidend für diejenigen, die sich auf UX/UI-Design oder die Entwicklung benutzerzentrierter Software und Systeme spezialisieren möchten.',
		location: "G2 1.10",
		rating: 4.2,
		numOfRating: 30,
		difficulty: 'easy',
	},
	{
		slug: 'computergrafik',
		name: 'Computergrafik',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Markus Wolf',
			email: 'markus.wolf@hs-aalen.de',
		},
		description: 'Einführung in die Erzeugung von Bildern mittels Computer.',
		longDescription:
			'In diesem Kurs lernen die Studierenden die Grundlagen der Erzeugung von Bildern mit Computern. Der Kurs umfasst Themen wie 2D- und 3D-Grafik, Animation, Rendering-Techniken und Grafik-Software. Die Studierenden arbeiten mit verschiedenen Werkzeugen und Technologien, um visuelle Inhalte zu erstellen und zu manipulieren. Dieser Kurs ist ideal für Studierende, die in Bereichen wie Grafikdesign, Spieleentwicklung oder visuellen Effekten arbeiten möchten.',
		location: "G2 2.21",
		rating: 3.8,
		numOfRating: 28,
		difficulty: 'medium',
	},
	{
		slug: 'rechnerarchitektur',
		name: 'Rechnerarchitektur',
		semester: 2,
		dates: {
			firstLecture: {
				weekday: "Dienstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			},
			secondLecture: {
				weekday: "Donnerstag",
				time: {
					start: "11:30",
					end: "13:00"
				}
			}
		},
		professor: {
			name: 'Laura Fischer',
			email: 'laura.fischer@hs-aalen.de',
		},
		description: 'Aufbau und Funktionsweise von Computersystemen und deren Komponenten.',
		longDescription:
			'Der Kurs behandelt den Aufbau und die Funktionsweise von Computersystemen und deren Komponenten. Studierende lernen über Prozessoren, Speicher, Eingabe-/Ausgabegeräte und die Interaktion dieser Elemente. Der Schwerpunkt liegt auf dem Verständnis, wie Hardware und Software zusammenarbeiten, um Computeranwendungen auszuführen. Dieser Kurs ist unerlässlich für Studierende, die sich für Hardware-Engineering, Systemintegration oder Computerhardware-Design interessieren.',
		location: "G2 0.31",
		rating: 2.5,
		numOfRating: 16,
		difficulty: 'hard',
	},
];
