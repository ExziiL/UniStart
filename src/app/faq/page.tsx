"use client";

import Breadcrumb from "@/frontend/components/breadcrumb";
import FaqBadge from "@/frontend/components/faq-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/frontend/components/ui/accordion";
import { Button } from "@/frontend/components/ui/button";
import { Separator } from "@/frontend/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

const questions: Array<{ question: string; answer: string; type: any[] }> = [
	{
		question: "Was sind die Grundvoraussetzungen für das Studium der Informatik?",
		answer: "Die Grundvoraussetzungen für das Studium der Informatik umfassen in der Regel ein starkes Interesse an Technologie und Computerwissenschaften, gute analytische Fähigkeiten und Problemlösungskompetenzen. Mathematische Grundkenntnisse sind ebenfalls wichtig, da viele Konzepte auf Mathematik basieren. Abhängig von der Hochschule können spezifische Voraussetzungen wie ein bestimmter Notendurchschnitt oder Kenntnisse in bestimmten Programmiersprachen erforderlich sein.",
		type: ["University", "Computer Science"],
	},
	{
		question: "Welche Programmiersprachen sollte ich als erstes lernen?",
		answer: "Als Einstieg eignen sich Programmiersprachen, die breit angewendet werden und eine gute Grundlage für das Verständnis weiterer Sprachen bieten. Python wird oft wegen seiner Einfachheit und Vielseitigkeit empfohlen. Java und C++ sind ebenfalls gute Wahlmöglichkeiten, da sie viele Konzepte der objektorientierten Programmierung vermitteln, die in der Softwareentwicklung weit verbreitet sind.",
		type: ["University", "Computer Science", "Study"],
	},
	{
		question: "Wie viel Zeit sollte ich wöchentlich für das Studium einplanen?",
		answer: "Die empfohlene Lernzeit variiert, aber viele Hochschulen und Universitäten raten zu etwa 40 Stunden pro Woche, einschließlich Vorlesungen, Seminaren und Selbststudium. Dies kann je nach Schwierigkeitsgrad der Kurse und individuellen Lerngewohnheiten variieren.",
		type: ["Study"],
	},
	{
		question: "Ist es wichtig, bereits vor Studienbeginn Programmiererfahrung zu haben?",
		answer: "Obwohl es hilfreich ist, ist es nicht zwingend notwendig, vor Studienbeginn Programmiererfahrung zu haben. Viele Studiengänge sind so konzipiert, dass sie Studierenden ohne Vorkenntnisse die Grundlagen der Programmierung und Computertechnik vermitteln.",
		type: ["University", "Computer Science"],
	},
	{
		question: "Wie kann ich mich auf die Mathematik im Studium vorbereiten?",
		answer: "Um sich auf die Mathematik im Studium vorzubereiten, kann es hilfreich sein, Grundlagen in Algebra, Geometrie und eventuell auch in der Analysis zu wiederholen. Online-Kurse, Lehrbücher und Vorbereitungskurse bieten gute Möglichkeiten, vorhandenes Wissen aufzufrischen oder neue Konzepte zu lernen.",
		type: ["University", "Study"],
	},
	{
		question: "Was ist der Unterschied zwischen angewandter Informatik und theoretischer Informatik?",
		answer: "Die theoretische Informatik befasst sich mit den grundlegenden Prinzipien und Theorien, die der Berechnung und Informationsverarbeitung zugrunde liegen, wie Algorithmentheorie und Komplexitätstheorie. Angewandte Informatik konzentriert sich hingegen auf die praktische Anwendung dieser Theorien in Bereichen wie Softwareentwicklung, Datenanalyse und Systemintegration.",
		type: ["Computer Science"],
	},
	{
		question: "Wie wichtig sind Gruppenarbeiten im Informatikstudium?",
		answer: "Gruppenarbeiten sind im Informatikstudium sehr wichtig, da sie die Zusammenarbeit, Kommunikationsfähigkeit und Problemlösung in der Praxis fördern. Sie spiegeln die Teamarbeit wider, die in der Berufswelt häufig erforderlich ist, und helfen, praktische Erfahrungen im Projektmanagement und in der Softwareentwicklung zu sammeln.",
		type: ["Study"],
	},
	{
		question: "Welche Rolle spielt Open Source Software in der Informatik?",
		answer: "Open Source Software spielt eine zentrale Rolle in der Informatik, da sie die gemeinschaftliche Entwicklung und den freien Austausch von Software fördert. Sie ermöglicht es Entwicklern, auf bestehenden Code aufzubauen, diesen zu verbessern und an spezifische Bedürfnisse anzupassen. Zudem trägt sie zur Bildung von Gemeinschaften bei, die Wissen teilen und Innovationen vorantreiben.",
		type: ["Computer Science"],
	},
	{
		question: "Wie kann ich effektiv für Programmierkurse lernen?",
		answer: "Effektives Lernen für Programmierkurse erfordert Praxis und Wiederholung. Es ist wichtig, die theoretischen Konzepte zu verstehen und sie durch das Schreiben von Code anzuwenden. Nutzen Sie Ressourcen wie Online-Tutorials, Foren und Studiengruppen, um Probleme zu lösen und Erfahrungen auszutauschen. Regelmäßiges Üben und das Arbeiten an eigenen Projekten können ebenfalls sehr hilfreich sein.",
		type: ["Computer Science", "Study"],
	},
	{
		question: "Was sind die besten Strategien, um im Team zu programmieren?",
		answer: "Die besten Strategien für die Teamprogrammierung umfassen klare Kommunikation, regelmäßige Meetings und die Verwendung von Versionskontrollsystemen wie Git. Es ist wichtig, Coding-Standards festzulegen und sich an diese zu halten, um den Code konsistent und wartbar zu halten. Pair Programming und Code Reviews sind ebenfalls effektive Methoden, um die Codequalität zu verbessern und voneinander zu lernen.",
		type: ["Computer Science", "Study"],
	},
	{
		question: "Wie kann ich meine Chancen auf einen guten Job nach dem Studium verbessern?",
		answer: "Um Ihre Chancen auf einen guten Job nach dem Studium zu verbessern, sollten Sie praktische Erfahrungen sammeln, zum Beispiel durch Praktika, Werkstudententätigkeiten oder die Mitarbeit an Open Source Projekten. Networking, der Aufbau eines starken Portfolios und die kontinuierliche Weiterbildung in neuen Technologien sind ebenfalls wichtig. Zudem können Zertifizierungen und der Nachweis von Fähigkeiten in spezifischen Technologien hilfreich sein.",
		type: ["University"],
	},
	{
		question: "Wie kann ich mit dem Stress des Studiums umgehen?",
		answer: "Um mit dem Stress des Studiums umzugehen, ist es wichtig, eine gute Work-Life-Balance zu finden. Setzen Sie sich realistische Ziele, organisieren Sie Ihre Zeit effektiv und nehmen Sie sich Zeit für Pausen und Freizeitaktivitäten. Unterstützung durch Freunde, Familie und Mentoren kann ebenfalls hilfreich sein. Zudem bieten viele Universitäten Beratungsdienste und Workshops zum Stressmanagement an.",
		type: ["University"],
	},
	{
		question: "Welche Bedeutung hat künstliche Intelligenz in der heutigen Informatik?",
		answer: "Künstliche Intelligenz (KI) hat eine wachsende Bedeutung in der heutigen Informatik. Sie wird in einer Vielzahl von Anwendungen eingesetzt, von der Datenanalyse über die Automatisierung bis hin zu intelligenten Systemen, die menschliches Verhalten nachahmen können. KI-Technologien wie maschinelles Lernen und neuronale Netze treiben Innovationen voran und eröffnen neue Forschungsfelder und Karrieremöglichkeiten.",
		type: ["Computer Science"],
	},
];

function Faq() {
	const [showBadges, setShowBadges] = React.useState(true);

	function handleBadgeTrigger() {
		return setShowBadges(!showBadges);
	}

	return (
		<div className="flex flex-col pb-8">
			<Breadcrumb
				sections={["Frequently Asked Questions"]}
				className="lg:pl-[156px]"
			/>

			<div className="flex flex-col items-center">
				<div className="pb-8 pt-4">
					{/* <h1 className="text-3xl font-medium">Frequently Asked Questions</h1> */}
					<p className="text-base text-light">
						Looking for more information? Here are some things other students have asked us in the past.
					</p>
				</div>

				<div className="max-w-[720px] py-4 md:w-[720px]">
					<div className="flex w-full justify-end pb-2">
						<Button
							variant="outline"
							onClick={handleBadgeTrigger}
						>
							{showBadges ? (
								<Eye
									size={24}
									strokeWidth={1.75}
								/>
							) : (
								<EyeOff
									size={24}
									strokeWidth={1.75}
								/>
							)}
							<Separator
								orientation="vertical"
								className="mx-2"
							/>
							{showBadges ? "Hide" : "Show"} Badges
						</Button>
					</div>
					<Accordion
						type="single"
						collapsible
					>
						{questions.map((question, index) => (
							<AccordionItem
								key={"item-" + index}
								value={"item-" + index}
							>
								<AccordionTrigger className="text-start">
									<div className="flex flex-col">
										{question.question}
										{showBadges && (
											<div className="flex flex-row space-x-2">
												{question.type.map((typ, index) => (
													<FaqBadge
														key={typ + "-" + index}
														text={typ}
													/>
												))}
											</div>
										)}
									</div>
								</AccordionTrigger>
								<AccordionContent className="text-light">{question.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
}

export default Faq;
