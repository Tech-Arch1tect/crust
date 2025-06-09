<script lang="ts">
	import StatsCard from '$lib/components/StatsCard.svelte';
	import QuickNav from '$lib/components/QuickNav.svelte';
	import { ROUTES } from '$lib/utils/constants';
	import type { PageData } from './$types';
	import {
		getPostPreviewAuthor,
		getPostPreviewExcerpt,
		getPostPreviewReadingTime,
		getPostPreviewSlug,
		getPostPreviewTags,
		getPostPreviewTitle
	} from '$lib/utils/previews';
	import { getCategoryName } from '$lib/utils/category';

	let { data }: { data: PageData } = $props();

	const meta = data.meta;
	const latestPosts = data.latestPosts;
	const siteName = meta?.site?.name || 'My Blog';
	const tagline = meta?.site?.tagline || 'Welcome to My Blog';
	const description = meta?.site?.description || 'Discover amazing content and insights';
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
				href={ROUTES.CATEGORIES}
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
				href={ROUTES.TAGS}
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
		<StatsCard value={meta?.categories?.total || 0} label="Categories" colour="emerald" />
		<StatsCard value={meta?.tags?.total || 0} label="Tags" colour="purple" />
	</div>

	{#if latestPosts?.previews && Array.isArray(latestPosts.previews) && latestPosts.previews.length > 0}
		<section class="mb-16">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-3xl font-bold text-gray-900">Latest Posts</h2>
				<a
					href="/posts"
					class="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
				>
					View all posts →
				</a>
			</div>

			<div class="space-y-4">
				{#each latestPosts.previews as post}
					{@const postSlug = getPostPreviewSlug(post)}
					{@const postTitle = getPostPreviewTitle(post)}
					{@const postExcerpt = getPostPreviewExcerpt(post)}
					{@const postAuthor = getPostPreviewAuthor(post)}
					{@const postTags = getPostPreviewTags(post)}
					{@const categoryName = getCategoryName(post?.frontmatter?.category)}
					{@const readingTime = getPostPreviewReadingTime(post)}
					{@const postDate = post?.frontmatter?.date || ''}

					<article
						class="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md"
					>
						<div class="p-5">
							<div class="mb-3 flex items-center justify-between">
								<div class="flex items-center gap-2">
									<span
										class="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-800"
									>
										{categoryName}
									</span>
									<span class="text-xs text-gray-500">{readingTime}</span>
								</div>
								<time datetime={post?.frontmatter?.date || ''} class="text-xs text-gray-500">
									{postDate}
								</time>
							</div>

							<h3
								class="mb-2 text-xl leading-tight font-bold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600"
							>
								{#if postSlug !== '#'}
									<a href="/posts/{postSlug}" class="hover:underline">
										{postTitle}
									</a>
								{:else}
									<span>{postTitle}</span>
								{/if}
							</h3>

							<p class="mb-3 line-clamp-2 text-gray-600">
								{postExcerpt}
							</p>

							{#if postTags.length > 0}
								<div class="mb-3 flex flex-wrap gap-1">
									{#each postTags as tag}
										<span
											class="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
										>
											#{tag}
										</span>
									{/each}
								</div>
							{:else}
								<div class="mb-3">
									<span class="text-xs text-gray-400 italic">No tags</span>
								</div>
							{/if}

							<div class="flex items-center justify-between border-t border-gray-100 pt-3">
								<span class="text-xs text-gray-600"
									>By <span class="font-medium">{postAuthor}</span></span
								>
								{#if postSlug !== '#'}
									<a
										href="/posts/{postSlug}"
										class="inline-flex items-center text-xs font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-700"
									>
										Read more
										<svg
											class="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</a>
								{/if}
							</div>
						</div>
					</article>
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
