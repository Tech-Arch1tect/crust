<script lang="ts">
	import { resolve } from '$app/paths';
	import StatsCard from '$lib/components/common/StatsCard.svelte';
	import QuickNav from '$lib/components/layout/QuickNav.svelte';
	import { ROUTES } from '$lib/utils/constants';
	import type { PageData } from './$types';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import { getSortedItems } from '$lib/utils/data';

	let { data }: { data: PageData } = $props();

	const meta = data.meta;
	const latestPosts = data.latestPosts;
	const siteName = meta?.site?.name || 'My Blog';
	const tagline = meta?.site?.tagline || 'Welcome to My Blog';
	const description = meta?.site?.description || 'Discover amazing content and insights';
	const allCategories = getSortedItems(meta?.categories?.stats).filter(
		(category) => category.count > 0
	);
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="mx-auto max-w-4xl">
	<div class="mb-16 text-center">
		<h1 class="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 md:text-7xl">
			{tagline}
		</h1>
		<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
			{description}
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href={resolve(ROUTES.CATEGORIES)}
				class="group inline-flex transform items-center rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl"
			>
				Explore Categories
				<svg
					class="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					/>
				</svg>
			</a>
			<a
				href={resolve(ROUTES.TAGS)}
				class="group inline-flex transform items-center rounded-2xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:scale-105 hover:border-gray-400 hover:bg-gray-50"
			>
				Browse Tags
				<svg
					class="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
					/>
				</svg>
			</a>
		</div>
	</div>

	<div class="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
		<StatsCard value={meta?.posts?.total || 0} label="Published Posts" colour="blue" />
		<StatsCard value={allCategories.length} label="Categories" colour="emerald" />
		<StatsCard value={meta?.tags?.total || 0} label="Tags" colour="purple" />
	</div>

	{#if latestPosts?.data && latestPosts.data.length > 0}
		<section class="mb-16">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-3xl font-bold text-gray-900">Latest Posts</h2>
				<a
					href={resolve('/posts')}
					class="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
				>
					View all posts →
				</a>
			</div>

			<div class="space-y-4">
				{#each latestPosts.data as post (post.frontmatter?.slug)}
					<PostCard {post} />
				{/each}
			</div>
		</section>
	{:else}
		<section class="mb-16">
			<div class="py-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-900">No Posts Yet</h2>
				<p class="text-gray-600">Check back later for new content!</p>
			</div>
		</section>
	{/if}

	<QuickNav {meta} />
</div>
