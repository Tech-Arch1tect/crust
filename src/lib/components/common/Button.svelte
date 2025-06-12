<script lang="ts">
	import { getColourClasses, type ColourTheme } from '$lib/utils/colours';

	let {
		href = null,
		variant = 'primary',
		colour = 'indigo' as ColourTheme,
		size = 'md',
		class: className = '',
		children,
		...props
	} = $props();

	const colourClasses = getColourClasses(colour);

	const baseClasses =
		'inline-flex transform items-center justify-center rounded-xl font-semibold transition-all duration-200 hover:scale-105';

	const variantClasses = {
		primary: `${colourClasses.bg} ${colourClasses.bgHover} text-white shadow-lg`,
		secondary: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
		outline: `border-2 ${colourClasses.border} ${colourClasses.text} hover:${colourClasses.bgLight}`
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant as keyof typeof variantClasses]} {sizeClasses[
			size as keyof typeof sizeClasses
		]} {className}"
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="{baseClasses} {variantClasses[variant as keyof typeof variantClasses]} {sizeClasses[
			size as keyof typeof sizeClasses
		]} {className}"
		{...props}
	>
		{@render children()}
	</button>
{/if}
