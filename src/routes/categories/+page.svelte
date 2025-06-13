<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import ItemCard from '$lib/components/taxonomy/ItemCard.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import { getSortedItems } from '$lib/utils/data';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = data.meta;
	const allCategories = getSortedItems(meta?.categories?.stats).filter(
		(category) => category.count > 0
	);
	const categoriesCount = allCategories.length;
	const postsCount = meta?.posts?.total || 0;
</script>

<svelte:head>
	<title>Categories - {meta?.site?.name || 'My Blog'}</title>
</svelte:head>

<div class="mx-auto max-w-6xl">
	<PageHeader
		title="Categories"
		description="Explore our content organised by categories. Find exactly what interests you."
		colour="indigo"
	/>

	{#if allCategories.length === 0}
		<div class="py-16 text-center">
			<div class="font-medium text-gray-600">No categories found.</div>
		</div>
	{:else}
		<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each allCategories as category}
				<ItemCard
					name={category.name}
					count={category.count}
					href="/categories/{encodeURIComponent(category.name)}"
					colour="indigo"
				/>
			{/each}
		</div>

		<Card colour="indigo" class="border-indigo-100 bg-indigo-50">
			<h2 class="mb-2 text-2xl font-bold text-indigo-900">Total Categories</h2>
			<p class="text-lg text-indigo-700">
				<span class="font-semibold">{categoriesCount}</span> categories with
				<span class="font-semibold">{postsCount}</span> total posts
			</p>
		</Card>
	{/if}
</div>
