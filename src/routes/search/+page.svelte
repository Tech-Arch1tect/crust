<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = $derived(data.meta);
	const query = $derived(data.query);
	const results = $derived(data.results);
</script>

<svelte:head>
	<title>{query ? `Search: ${query}` : 'Search'} - {meta?.site?.name || 'My Blog'}</title>
</svelte:head>

<div class="mx-auto max-w-6xl">
	<PageHeader
		title="Search"
		description={query ? `Showing results for "${query}"` : 'Search for posts across the blog.'}
		colour="purple"
	/>

	{#if !query}
		<div class="py-16 text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100"
			>
				<svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<p class="text-lg font-medium text-gray-600">Enter a search term to find posts.</p>
		</div>
	{:else if results.length === 0}
		<div class="py-16 text-center">
			<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
				<svg class="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<p class="text-lg font-medium text-gray-600">No results found for "{query}".</p>
			<p class="mt-2 text-gray-500">Try a different search term.</p>
		</div>
	{:else}
		<div class="mb-4 text-sm text-gray-500">
			{results.length} result{results.length === 1 ? '' : 's'} found
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each results as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</div>
