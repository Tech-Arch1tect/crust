<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import Pagination from '$lib/components/posts/Pagination.svelte';
	import Card from '$lib/components/common/Card.svelte';

	let { data }: { data: PageData } = $props();

	const meta = $derived(data.meta);
	const previewsData = $derived(data.previews);
	const currentUserPage = $derived(data.currentUserPage);
	const siteName = $derived(meta?.site?.name || 'My Blog');

	async function handlePagination(newPage: number) {
		if (newPage === 1) {
			await goto(resolve('/posts'));
		} else {
			await goto(resolve(`/posts/page/${newPage}`));
		}
	}
</script>

<svelte:head>
	<title
		>{currentUserPage === 1 ? 'All Posts' : `Posts - Page ${currentUserPage}`} - {siteName}</title
	>
	<meta
		name="description"
		content="Browse all blog posts and articles{currentUserPage > 1
			? ` - Page ${currentUserPage}`
			: ''}"
	/>
</svelte:head>

{#key currentUserPage}
	<div class="mx-auto max-w-4xl">
		<PageHeader
			title="All Posts"
			description="Explore our collection of articles and insights"
			colour="indigo"
		/>

		<Card class="mb-8 border-gray-200 bg-gray-50">
			<div class="flex items-center justify-between text-sm text-gray-600">
				<div>
					Showing {previewsData.data?.length || 0} of {previewsData.pagination?.totalItems || 0} posts
				</div>
				<div>
					Page {currentUserPage} of {previewsData.pagination?.totalPages || 1}
				</div>
			</div>
		</Card>

		{#if previewsData.data && previewsData.data.length > 0}
			<div class="space-y-4">
				{#each previewsData.data as preview (preview.frontmatter?.slug)}
					<PostCard post={preview} />
				{/each}
			</div>

			<Pagination
				currentPage={previewsData.pagination?.page || 0}
				totalPages={previewsData.pagination?.totalPages || 1}
				hasPrevious={previewsData.pagination?.hasPrevious || false}
				hasNext={previewsData.pagination?.hasNext || false}
				onPageChange={handlePagination}
			/>
		{:else}
			<div class="py-12 text-center">
				<svg
					class="mx-auto mb-4 h-12 w-12 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				<h2 class="mb-2 text-2xl font-bold text-gray-900">No Posts Found</h2>
				<p class="text-gray-600">Check back later for new content!</p>
			</div>
		{/if}
	</div>
{/key}
