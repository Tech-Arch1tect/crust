<script lang="ts">
	import { getColourClasses, type ColourTheme } from '$lib/utils/colours';

	let {
		icon = '',
		colour = 'indigo' as ColourTheme,
		size = 'md',
		class: className = ''
	} = $props();

	const colourClasses = getColourClasses(colour);

	const sizeClasses = {
		sm: 'h-8 w-8 text-sm',
		md: 'h-12 w-12 text-lg',
		lg: 'h-16 w-16 text-xl'
	};
</script>

<div
	class="flex {sizeClasses[
		size as keyof typeof sizeClasses
	]} transform items-center justify-center rounded-2xl {colourClasses.bg} font-bold text-white transition-transform duration-300 group-hover:rotate-12 {className}"
>
	{icon}
</div>
