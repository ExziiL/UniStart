"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "../../../navigation";

type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};

function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();
	const localeActive = useLocale();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;

		startTransition(() => router.push({ pathname, params: params as any }, { locale: nextLocale }));
	}

	return (
		<label className={clsx("relative text-gray-400", isPending && "transition-opacity [&:disabled]:opacity-30")}>
			<p className="sr-only">{label}</p>
			<select
				className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
				defaultValue={localeActive}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
			<span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
		</label>
	);
}

export default LocaleSwitcherSelect;
