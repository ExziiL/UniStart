// module.exports = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };

/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	trailingComma: 'es5',
	tabWidth: 4,
	printWidth: 120,
	useTabs: true,
	singleAttributePerLine: true,
	embeddedLanguageFormatting: 'auto',
	semi: true,
};

module.exports = config;
