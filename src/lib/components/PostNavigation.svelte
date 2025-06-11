<script lang="ts">
	import Button from './Button.svelte';
	import { getCategoryName } from '$lib/utils/category';

	let { post, category, tags } = $props();

	const categoryName = $derived(getCategoryName(category));
</script>

<div class="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
	<Button href="/posts" variant="secondary">
		<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
		All Posts
	</Button>

	<div class="flex gap-4">
		{#if categoryName !== 'Uncategorised'}
			<Button
				href="/categories/{encodeURIComponent(post?.frontmatter?.category || '')}"
				variant="outline"
				size="sm"
			>
				Browse {categoryName}
			</Button>
		{/if}

		{#if tags.length > 0}
			<Button href="/tags/{encodeURIComponent(tags[0])}" variant="outline" size="sm">
				More #{tags[0]}
			</Button>
		{/if}
	</div>
</div>
