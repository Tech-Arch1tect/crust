<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import IconAvatar from '$lib/components/common/IconAvatar.svelte';
	import TagCloud from '$lib/components/taxonomy/TagCloud.svelte';
	import { getSortedItems } from '$lib/utils/data';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = data.meta;
	const allTags = getSortedItems(meta?.tags?.stats);
	const maxTagCount = allTags.length > 0 ? Math.max(...allTags.map((t) => t.count)) : 0;
	const tagsCount = meta?.tags?.total || 0;
	const postsCount = meta?.posts?.total || 0;
</script>

<svelte:head>
	<title>Tags - {meta?.site?.name || 'My Blog'}</title>
</svelte:head>

<div class="mx-auto max-w-6xl">
	<PageHeader
		title="Tags"
		description="Discover content through our tag system. Each tag represents a unique topic or theme."
		colour="blue"
	/>

	{#if allTags.length === 0}
		<div class="py-16 text-center">
			<div class="font-medium text-gray-600">No tags found.</div>
		</div>
	{:else}
		<div class="mb-16">
			<TagCloud tags={allTags} maxCount={maxTagCount} />
		</div>

		<div class="mb-12">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-900">All Tags</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each allTags as tag}
					<Card href="/tags/{encodeURIComponent(tag.name)}" variant="compact">
						<div class="mb-3 flex items-center space-x-3">
							<IconAvatar icon="#" colour="blue" size="sm" />
							<h3
								class="text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-gray-800"
							>
								{tag.name}
							</h3>
						</div>
						<p class="font-medium text-gray-600">
							{tag.count} post{tag.count === 1 ? '' : 's'}
						</p>
					</Card>
				{/each}
			</div>
		</div>

		<Card colour="blue" class="border-blue-100 bg-blue-50">
			<h2 class="mb-2 text-2xl font-bold text-blue-900">Total Tags</h2>
			<p class="text-lg text-blue-700">
				<span class="font-semibold">{tagsCount}</span> tags across
				<span class="font-semibold">{postsCount}</span> posts
			</p>
		</Card>
	{/if}
</div>
