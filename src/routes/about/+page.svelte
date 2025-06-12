<script lang="ts">
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import StatsCard from '$lib/components/common/StatsCard.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import { ROUTES } from '$lib/utils/constants';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const meta = data.meta;
	const siteName = meta?.site?.name || 'My Blog';
	const tagline = meta?.site?.tagline || 'About This Blog';
	const description = meta?.site?.description || 'A modern blog built with SvelteKit';
	const postsCount = meta?.posts?.total || 0;
	const categoriesCount = meta?.categories?.total || 0;
	const tagsCount = meta?.tags?.total || 0;
</script>

<svelte:head>
	<title>About - {siteName}</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<PageHeader title="About" colour="indigo" />

	<Card class="md:p-12">
		<h2 class="mb-6 text-3xl font-bold text-gray-900">
			{tagline}
		</h2>

		<p class="mb-8 text-lg leading-relaxed text-gray-600">
			{description}
		</p>

		<div class="mb-12">
			<h3 class="mb-6 text-2xl font-semibold text-gray-900">Blog Statistics</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<StatsCard value={postsCount} label="Total Posts" colour="blue" />
				<StatsCard value={categoriesCount} label="Categories" colour="emerald" />
				<StatsCard value={tagsCount} label="Tags" colour="purple" />
			</div>
		</div>

		<div class="border-t border-gray-200 pt-8">
			<h3 class="mb-4 text-2xl font-semibold text-gray-900">Get Started</h3>
			<p class="mb-6 leading-relaxed text-gray-600">
				Ready to explore? Use the navigation above to browse our content. You can discover posts by
				<a
					href={ROUTES.CATEGORIES}
					class="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-800"
					>categories</a
				>
				or search through
				<a
					href={ROUTES.TAGS}
					class="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
					>tags</a
				>
				to find exactly what you're looking for.
			</p>

			<div class="flex flex-col gap-4 sm:flex-row">
				<Button href={ROUTES.CATEGORIES} colour="indigo">Browse Categories</Button>
				<Button href={ROUTES.TAGS} variant="secondary">Explore Tags</Button>
			</div>
		</div>
	</Card>
</div>
