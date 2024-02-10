import { locales } from "@/config";
import LocaleSwitcherSelect from "@/frontend/components/locale-switcher-select";
import { useLocale, useTranslations } from "next-intl";

function LocaleSwitcher(props: { locales: string[] }) {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect
			defaultValue={locale}
			label={t("label")}
		>
			{locales.map((current) => (
				<option
					key={current}
					value={current}
				>
					{t("locale", { locale: current })}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}

export default LocaleSwitcher;
