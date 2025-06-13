<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import BackButton from '$lib/components/common/BackButton.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = $derived(data.meta);
	const tag = $derived(data.tag);
	const posts = $derived(data.postsByTag);
	const siteName = $derived(meta?.site?.name || 'My Blog');
</script>

<svelte:head>
	<title>#{tag} - {siteName}</title>
	<meta name="description" content="Browse posts tagged with #{tag}" />
</svelte:head>

<div class="mx-auto max-w-4xl">
	<div class="relative">
		<BackButton fallbackHref="/tags" text="Back" position="absolute" />

		<PageHeader title={`#${tag}`} description={`Posts tagged with "${tag}"`} colour="blue" />

		{#if posts.length > 0}
			<div class="space-y-4">
				{#each posts as post}
					<PostCard {post} />
				{/each}
			</div>
		{:else}
			<div class="py-12 text-center text-gray-600">
				<p>No posts found for this tag.</p>
			</div>
		{/if}
	</div>
</div>
