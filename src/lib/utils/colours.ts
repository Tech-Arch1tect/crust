export type ColourTheme = 'indigo' | 'blue' | 'emerald' | 'purple' | 'red';

export const colours = {
	indigo: {
		bg: 'bg-indigo-600',
		bgHover: 'hover:bg-indigo-700',
		bgLight: 'bg-indigo-50',
		bgLighter: 'bg-indigo-100',
		text: 'text-indigo-600',
		textDark: 'text-indigo-900',
		border: 'border-indigo-100',
		hoverBg: 'hover:bg-indigo-50',
		hoverText: 'hover:text-indigo-900',
		gradient: 'bg-indigo-600'
	},
	blue: {
		bg: 'bg-blue-600',
		bgHover: 'hover:bg-blue-700',
		bgLight: 'bg-blue-50',
		bgLighter: 'bg-blue-100',
		text: 'text-blue-600',
		textDark: 'text-blue-900',
		border: 'border-blue-100',
		hoverBg: 'hover:bg-blue-50',
		hoverText: 'hover:text-blue-900',
		gradient: 'bg-blue-600'
	},
	emerald: {
		bg: 'bg-emerald-600',
		bgHover: 'hover:bg-emerald-700',
		bgLight: 'bg-emerald-50',
		bgLighter: 'bg-emerald-100',
		text: 'text-emerald-600',
		textDark: 'text-emerald-900',
		border: 'border-emerald-100',
		hoverBg: 'hover:bg-emerald-50',
		hoverText: 'hover:text-emerald-900',
		gradient: 'bg-emerald-600'
	},
	purple: {
		bg: 'bg-purple-600',
		bgHover: 'hover:bg-purple-700',
		bgLight: 'bg-purple-50',
		bgLighter: 'bg-purple-100',
		text: 'text-purple-600',
		textDark: 'text-purple-900',
		border: 'border-purple-100',
		hoverBg: 'hover:bg-purple-50',
		hoverText: 'hover:text-purple-900',
		gradient: 'bg-purple-600'
	},
	red: {
		bg: 'bg-red-600',
		bgHover: 'hover:bg-red-700',
		bgLight: 'bg-red-50',
		bgLighter: 'bg-red-100',
		text: 'text-red-600',
		textDark: 'text-red-900',
		border: 'border-red-100',
		hoverBg: 'hover:bg-red-50',
		hoverText: 'hover:text-red-900',
		gradient: 'bg-red-600'
	}
};

export const getColourClasses = (theme: ColourTheme) => colours[theme];

export const getTagIntensityColour = (count: number, maxCount: number): string => {
	const intensity = count / maxCount;
	if (intensity > 0.8) return 'bg-blue-600 text-white shadow-lg';
	if (intensity > 0.6) return 'bg-blue-500 text-white shadow-md';
	if (intensity > 0.4) return 'bg-blue-400 text-white';
	if (intensity > 0.2) return 'bg-blue-200 text-blue-900';
	return 'bg-blue-100 text-blue-800';
};
