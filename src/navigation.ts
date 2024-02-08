import { createLocalizedPathnamesNavigation, Pathnames } from "next-intl/navigation";

export const locales = ["en", "de"] as const;
export const localePrefix = "always";

export const pathnames = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	"/": "/",
	"/blog": "/blog",

	// If locales use different paths, you can
	// specify each external path per locale.
	"/lectures": {
		en: "/lectures",
		de: "/vorlesungen",
	},

	// Dynamic params are supported via square brackets
	// "/news/[articleSlug]-[articleId]": {
	// 	en: "/news/[articleSlug]-[articleId]",
	// 	de: "/neuigkeiten/[articleSlug]-[articleId]",
	// },
	"/lectures/[lecture]": {
		en: "/lectures/[lecture]",
		de: "/vorlesungen/[lecture]",
	},

	// Also (optional) catch-all segments are supported
	// "/categories/[...slug]": {
	// 	en: "/categories/[...slug]",
	// 	de: "/kategorien/[...slug]",
	// },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
