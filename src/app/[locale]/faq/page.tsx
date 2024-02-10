"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/frontend/components/ui/accordion";
import { useTranslations } from "next-intl";
import React from "react";

function Faq() {
	const t = useTranslations("FAQ");

	const questions: Array<{ question: string; answer: string }> = [
		{
			question: t("questions.question1.title"),
			answer: t("questions.question1.answer"),
		},
		{
			question: t("questions.question2.title"),
			answer: t("questions.question2.answer"),
		},
		{
			question: t("questions.question3.title"),
			answer: t("questions.question3.answer"),
		},
		{
			question: t("questions.question4.title"),
			answer: t("questions.question4.answer"),
		},
		{
			question: t("questions.question5.title"),
			answer: t("questions.question5.answer"),
		},
		{
			question: t("questions.question6.title"),
			answer: t("questions.question6.answer"),
		},
		{
			question: t("questions.question7.title"),
			answer: t("questions.question7.answer"),
		},
		{
			question: t("questions.question8.title"),
			answer: t("questions.question8.answer"),
		},
		{
			question: t("questions.question9.title"),
			answer: t("questions.question9.answer"),
		},
	];

	return (
		<div className="no-scrollbar flex flex-col items-center pb-16">
			<div className="max-w-[720px] px-4 py-8">
				<h1 className="text-3xl font-medium">{t("title")}</h1>
				<p className="text-base text-light">{t("sub-heading")}</p>
			</div>

			<div className="max-w-[720px] py-4 md:w-[720px]">
				<Accordion
					type="single"
					collapsible
				>
					{questions.map((question, index) => (
						<AccordionItem
							value={"item-" + index}
							key={"item-" + index}
						>
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
