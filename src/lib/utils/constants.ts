export const ROUTES = {
	HOME: '/',
	CATEGORIES: '/categories',
	TAGS: '/tags',
	SEARCH: '/search',
	ABOUT: '/about'
} as const;

export const NAV_ITEMS = [
	{ href: ROUTES.HOME, label: 'Home' },
	{ href: ROUTES.ABOUT, label: 'About' }
] as const;
