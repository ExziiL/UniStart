// Define the structure of your navigation items
interface NavItem {
	title: string;
	href: string;
	description: string;
  }
  
  // Function to generate navigation items with localized hrefs
  function generateNavItems(locale: string): NavItem[] {
	return [
	  {
		title: 'Home',
		href: `/${locale}/`,
		description: 'Home page',
	  },
	  {
		title: 'Registration',
		href: `/${locale}/registration`,
		description: 'Registration page',
	  },
	  {
		title: 'Login',
		href: `/${locale}/login`,
		description: 'Login page',
	  },
	  {
		title: 'Terminkalender',
		href: `/${locale}/terminplan`,
		description: 'Übersicht aller wichtigen Termine der Hochschule',
	  },
	  {
		title: 'Vorlesungen',
		href: `/${locale}/vorlesungen`,
		description: 'Übersicht aller Vorlesungen der ersten zwei Semester',
	  },
	  {
		title: 'Chat',
		href: `/${locale}/chat`,
		description: 'User-Chat',
	  },
	  {
		title: 'Ai-Chat',
		href: `/${locale}/ai-chat`,
		description: 'User-Chat',
	  },
	  {
		title: 'Profile Settings',
		href: `/${locale}/settings/profile`,
		description: 'Übersicht aller wichtigsten Settingseinstellungen',
	  },
	  {
		title: 'FAQ',
		href: `/${locale}/faq`,
		description: 'Frequently Asked Questions',
	  },
	  {
		title: 'Not Found',
		href: `/${locale}/not-found`,
		description: '404 Error Page',
	  },
	];
  }
  
  export default generateNavItems;