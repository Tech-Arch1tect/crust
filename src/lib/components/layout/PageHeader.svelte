<script lang="ts">
	import { getColourClasses, type ColourTheme } from '$lib/utils/colours';

	let { title, description = null, colour = 'indigo' as ColourTheme } = $props();

	const colourClasses = getColourClasses(colour);
</script>

<div class="mb-12 text-center">
	<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{title}</h1>
	<div class="mx-auto mb-6 h-1 w-24 rounded-full {colourClasses.gradient}"></div>
	{#if description}
		<p class="mx-auto max-w-2xl text-xl text-gray-600">{description}</p>
	{/if}
</div>
