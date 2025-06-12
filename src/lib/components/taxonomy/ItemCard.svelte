<script lang="ts">
	import Card from '../common/Card.svelte';
	import IconAvatar from '../common/IconAvatar.svelte';
	import type { ColourTheme } from '$lib/utils/colours';

	let { name, count, href, colour = 'indigo' as ColourTheme, prefix = '' } = $props();

	const icon = prefix || name.charAt(0).toUpperCase();
</script>

<Card {href} {colour}>
	<div class="mb-4">
		<IconAvatar {icon} {colour} />
	</div>
	<h2
		class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-gray-800"
	>
		{name}
	</h2>
	<p class="font-medium text-gray-600">
		{count} post{count === 1 ? '' : 's'}
	</p>
</Card>
