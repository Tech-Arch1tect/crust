<script lang="ts">
	import Card from './Card.svelte';
	import { getColourClasses, type ColourTheme } from '$lib/utils/colours';

	let { value, label, colour = 'blue' as ColourTheme } = $props();

	const colourClasses = getColourClasses(colour);
</script>

<Card variant="stats">
	<div class="mb-3 text-4xl font-bold {colourClasses.text}">
		{value || 0}
	</div>
	<div class="font-medium text-gray-600">{label}</div>
</Card>
