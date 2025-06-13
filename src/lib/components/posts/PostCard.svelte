<script lang="ts">
	import Card from '../common/Card.svelte';
	import {
		getPostPreviewAuthor,
		getPostPreviewCategory,
		getPostPreviewDate,
		getPostPreviewExcerpt,
		getPostPreviewReadingTime,
		getPostPreviewSlug,
		getPostPreviewTags,
		getPostPreviewTitle
	} from '$lib/utils/previews';
	import { getCategoryName } from '$lib/utils/category';
	import type { MainPostPreview } from '../../../api-client';

	let {
		post,
		showExcerpt = true
	}: {
		post: MainPostPreview;
		showExcerpt?: boolean;
	} = $props();

	const postSlug = $derived(getPostPreviewSlug(post));
	const postTitle = $derived(getPostPreviewTitle(post));
	const postAuthor = $derived(getPostPreviewAuthor(post));
	const postDate = $derived(getPostPreviewDate(post));
	const postExcerpt = $derived(getPostPreviewExcerpt(post));
	const postCategory = $derived(getPostPreviewCategory(post));
	const postTags = $derived(getPostPreviewTags(post));
	const readingTime = $derived(getPostPreviewReadingTime(post));
	const categoryName = $derived(getCategoryName(post?.frontmatter?.category) || postCategory);
</script>

<Card variant="compact" class="!p-5">
	<div class="mb-3 flex items-center justify-between">
		<div class="flex items-center gap-2">
			{#if post?.frontmatter?.category}
				<a
					href="/categories/{encodeURIComponent(post?.frontmatter?.category || postCategory)}"
					class="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-800 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-900"
				>
					{categoryName}
				</a>
			{/if}
			<span class="text-xs text-gray-500">{readingTime}</span>
		</div>
		{#if postDate}
			<time datetime={post?.frontmatter?.date || ''} class="text-xs text-gray-500">
				{postDate}
			</time>
		{/if}
	</div>

	<h2
		class="mb-2 text-xl leading-tight font-bold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600"
	>
		{#if postSlug !== '#'}
			<a href="/posts/{postSlug}" class="hover:underline">
				{postTitle}
			</a>
		{:else}
			<span>{postTitle}</span>
		{/if}
	</h2>

	{#if showExcerpt && (postExcerpt || post.excerpt)}
		<p class="mb-3 line-clamp-2 text-gray-600">
			{postExcerpt || post.excerpt}
		</p>
	{/if}

	{#if postTags.length > 0}
		<div class="mb-3 flex flex-wrap gap-1">
			{#each postTags as tag}
				<a
					href="/tags/{encodeURIComponent(tag)}"
					class="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
				>
					#{tag}
				</a>
			{/each}
		</div>
	{:else}
		<div class="mb-3">
			<span class="text-xs text-gray-400 italic">No tags</span>
		</div>
	{/if}

	<div class="flex items-center justify-between border-t border-gray-100 pt-3">
		<span class="text-xs text-gray-600">
			By <span class="font-medium">{postAuthor}</span>
		</span>
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
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		{/if}
	</div>
</Card>
