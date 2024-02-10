import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de"] as const

export const pathnames = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	"/": "/",

	// If locales use different paths, you can
	// specify each external path per locale.
	"/courses": {
		en: "/courses",
		de: "/vorlesungen",
	},
    "/faq": {
        en: "/frequently-asked-questions",
        de: "/fragen-und-antworten",
    },

	// Dynamic params are supported via square brackets
	// "/news/[articleSlug]-[articleId]": {
	// 	en: "/news/[articleSlug]-[articleId]",
	// 	de: "/neuigkeiten/[articleSlug]-[articleId]",
	// },
	"/courses/[course]": {
		en: "/courses/[course]",
		de: "/vorlesungen/[course]",
	},

	// Also (optional) catch-all segments are supported
	// "/categories/[...slug]": {
	// 	en: "/categories/[...slug]",
	// 	de: "/kategorien/[...slug]",
	// },
} satisfies Pathnames<typeof locales>

// Use the default: 'always'
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
