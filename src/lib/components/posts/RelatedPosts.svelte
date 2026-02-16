<script lang="ts">
	import Card from '../common/Card.svelte';
	import type { MainRelatedPost } from '../../../api-client';

	let { relatedPosts }: { relatedPosts: MainRelatedPost[] } = $props();
</script>

{#if relatedPosts.length > 0}
	<section class="mt-12 mb-8">
		<h2 class="mb-6 text-2xl font-bold text-gray-900">Related Posts</h2>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each relatedPosts as related}
				<Card href="/posts/{related.slug}" variant="compact" class="!p-5">
					<h3
						class="mb-2 text-lg leading-tight font-semibold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600"
					>
						{related.title || 'Untitled'}
					</h3>

					<div class="flex items-center gap-3 text-xs text-gray-500">
						{#if related.date}
							<time datetime={related.date}>{related.date}</time>
						{/if}
						{#if related.readingTime}
							<span>{related.readingTime} min read</span>
						{/if}
					</div>

					{#if related.commonTags && related.commonTags > 0}
						<div class="mt-3">
							<span
								class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700"
							>
								{related.commonTags} shared {related.commonTags === 1 ? 'tag' : 'tags'}
							</span>
						</div>
					{/if}
				</Card>
			{/each}
		</div>
	</section>
{/if}
