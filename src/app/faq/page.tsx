import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/frontend/components/ui/accordion";
import React from "react";

const questions: Array<{ question: string; answer: string }> = [
	{
		question: "Was sind die Grundvoraussetzungen für das Studium der Informatik?",
		answer: "Die Grundvoraussetzungen für das Studium der Informatik umfassen in der Regel ein starkes Interesse an Technologie und Computerwissenschaften, gute analytische Fähigkeiten und Problemlösungskompetenzen. Mathematische Grundkenntnisse sind ebenfalls wichtig, da viele Konzepte auf Mathematik basieren. Abhängig von der Hochschule können spezifische Voraussetzungen wie ein bestimmter Notendurchschnitt oder Kenntnisse in bestimmten Programmiersprachen erforderlich sein.",
	},
	{
		question: "Welche Programmiersprachen sollte ich als erstes lernen?",
		answer: "Als Einstieg eignen sich Programmiersprachen, die breit angewendet werden und eine gute Grundlage für das Verständnis weiterer Sprachen bieten. Python wird oft wegen seiner Einfachheit und Vielseitigkeit empfohlen. Java und C++ sind ebenfalls gute Wahlmöglichkeiten, da sie viele Konzepte der objektorientierten Programmierung vermitteln, die in der Softwareentwicklung weit verbreitet sind.",
	},
	{
		question: "Wie viel Zeit sollte ich wöchentlich für das Studium einplanen?",
		answer: "Die empfohlene Lernzeit variiert, aber viele Hochschulen und Universitäten raten zu etwa 40 Stunden pro Woche, einschließlich Vorlesungen, Seminaren und Selbststudium. Dies kann je nach Schwierigkeitsgrad der Kurse und individuellen Lerngewohnheiten variieren.",
	},
	{
		question: "Ist es wichtig, bereits vor Studienbeginn Programmiererfahrung zu haben?",
		answer: "Obwohl es hilfreich ist, ist es nicht zwingend notwendig, vor Studienbeginn Programmiererfahrung zu haben. Viele Studiengänge sind so konzipiert, dass sie Studierenden ohne Vorkenntnisse die Grundlagen der Programmierung und Computertechnik vermitteln.",
	},
	{
		question: "Wie kann ich mich auf die Mathematik im Studium vorbereiten?",
		answer: "Um sich auf die Mathematik im Studium vorzubereiten, kann es hilfreich sein, Grundlagen in Algebra, Geometrie und eventuell auch in der Analysis zu wiederholen. Online-Kurse, Lehrbücher und Vorbereitungskurse bieten gute Möglichkeiten, vorhandenes Wissen aufzufrischen oder neue Konzepte zu lernen.",
	},
	{
		question: "Was ist der Unterschied zwischen angewandter Informatik und theoretischer Informatik?",
		answer: "Die theoretische Informatik befasst sich mit den grundlegenden Prinzipien und Theorien, die der Berechnung und Informationsverarbeitung zugrunde liegen, wie Algorithmentheorie und Komplexitätstheorie. Angewandte Informatik konzentriert sich hingegen auf die praktische Anwendung dieser Theorien in Bereichen wie Softwareentwicklung, Datenanalyse und Systemintegration.",
	},
	{
		question: "Wie wichtig sind Gruppenarbeiten im Informatikstudium?",
		answer: "Gruppenarbeiten sind im Informatikstudium sehr wichtig, da sie die Zusammenarbeit, Kommunikationsfähigkeit und Problemlösung in der Praxis fördern. Sie spiegeln die Teamarbeit wider, die in der Berufswelt häufig erforderlich ist, und helfen, praktische Erfahrungen im Projektmanagement und in der Softwareentwicklung zu sammeln.",
	},
];

function Faq() {
	return (
		<div className="flex flex-col items-center ">
			<div className="py-8">
				<h1 className="text-3xl font-medium">Frequently Asked Questions</h1>
				<p className="text-base text-light">
					Looking for more information? Here are some things other students have asked us in the past.
				</p>
			</div>

			<div className="max-w-[720px] py-4 md:w-[720px]">
				<Accordion
					type="single"
					collapsible
				>
					{questions.map((question, index) => (
						<AccordionItem value={"item-" + index}>
							<AccordionTrigger className="text-start">{question.question}</AccordionTrigger>
							<AccordionContent className="text-light">{question.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}

export default Faq;
