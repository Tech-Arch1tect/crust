<script lang="ts">
	import { resolve } from '$app/paths';
	import Card from '../common/Card.svelte';
	import { getTagIntensityColour } from '$lib/utils/colours';

	let { tags, maxCount, title = 'Tag Cloud', showCounts = true } = $props();
</script>

<Card>
	<h2 class="mb-8 text-center text-3xl font-bold text-gray-900">{title}</h2>
	<div class="flex flex-wrap justify-center gap-3">
		{#each tags as tag (tag.name)}
			<a
				href={resolve(`/tags/${encodeURIComponent(tag.name)}`)}
				class="inline-flex transform items-center rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-110 hover:shadow-lg {getTagIntensityColour(
					tag.count,
					maxCount
				)}"
			>
				#{tag.name}
				{#if showCounts}
					<span class="ml-2 text-xs opacity-80">({tag.count})</span>
				{/if}
			</a>
		{/each}
	</div>
</Card>
