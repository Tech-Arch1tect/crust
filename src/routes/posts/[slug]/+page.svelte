<script lang="ts">
	import type { PageData } from './$types';
	import PostHeader from '$lib/components/posts/PostHeader.svelte';
	import PostMeta from '$lib/components/posts/PostMeta.svelte';
	import TagList from '$lib/components/taxonomy/TagList.svelte';
	import PostContent from '$lib/components/posts/PostContent.svelte';
	import PostNavigation from '$lib/components/posts/PostNavigation.svelte';

	let { data }: { data: PageData } = $props();

	const meta = $derived(data.meta);
	const post = $derived(data.post);
	const siteName = $derived(meta?.site?.name || 'My Blog');

	const title = $derived(post?.frontmatter?.title || 'Untitled Post');
	const author = $derived(post?.frontmatter?.author || 'Anonymous');
	const date = $derived(post?.frontmatter?.date || '');
	const tags = $derived(post?.frontmatter?.tags || []);
	const category = $derived(post?.frontmatter?.category);
	const readingTime = $derived(post?.readingTime ? `${post.readingTime} min read` : 'Quick read');
	const markdown = $derived(post?.markdown || '');
	const excerpt = $derived(post?.excerpt || '');
</script>

<svelte:head>
	<title>{title} - {siteName}</title>
	<meta name="description" content={excerpt} />
</svelte:head>

<div class="mx-auto max-w-4xl">
	<div class="relative">
		<PostHeader {title} />

		<PostMeta {author} {date} {readingTime} {category} />

		{#if tags.length > 0}
			<div class="mb-12 flex justify-center">
				<TagList {tags} />
			</div>
		{/if}

		<PostContent {markdown} />

		<PostNavigation {post} {category} {tags} />
	</div>
</div>
