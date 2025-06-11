<script lang="ts">
	import Button from './Button.svelte';

	let { href, text = 'Back' } = $props();
</script>

<Button {href} variant="secondary" size="sm">
	<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
	</svg>
	{text}
</Button>
