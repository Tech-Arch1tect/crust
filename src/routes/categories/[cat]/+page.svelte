<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import BackButton from '$lib/components/common/BackButton.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = $derived(data.meta);
	const cat = $derived(data.cat);
	const posts = $derived(data.postsByCat);
	const siteName = $derived(meta?.site?.name || 'My Blog');
</script>

<svelte:head>
	<title>{cat} - {siteName}</title>
	<meta name="description" content="Browse posts in #{cat}" />
</svelte:head>

<div class="mx-auto max-w-4xl">
	<div class="mt-4 mb-4">
		<BackButton href="/categories" text="Back to Categories" />
	</div>

	<PageHeader title={`${cat}`} description={`Posts in "${cat}"`} colour="blue" />

	{#if posts.length > 0}
		<div class="space-y-4">
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	{:else}
		<div class="py-12 text-center text-gray-600">
			<p>No posts found for this category.</p>
		</div>
	{/if}
</div>
