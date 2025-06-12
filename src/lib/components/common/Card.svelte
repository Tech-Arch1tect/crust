<script lang="ts">
	import { getColourClasses, type ColourTheme } from '$lib/utils/colours';

	let {
		href = null,
		colour = 'indigo' as ColourTheme,
		variant = 'default',
		class: className = '',
		children
	} = $props();

	const colourClasses = getColourClasses(colour);

	const baseClasses =
		'group relative transform overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl';

	const variantClasses = {
		default: 'p-8',
		compact: 'p-6',
		stats: 'p-8 text-center'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[
			variant as keyof typeof variantClasses
		]} {colourClasses.bg} {className}"
	>
		{@render children()}
	</a>
{:else}
	<div
		class="{baseClasses} {variantClasses[
			variant as keyof typeof variantClasses
		]} {colourClasses.bg} {className}"
	>
		{@render children()}
	</div>
{/if}
