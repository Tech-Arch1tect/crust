<script lang="ts">
	import { marked } from 'marked';
	import Card from '../common/Card.svelte';

	let { markdown } = $props();

	const renderedContent = $derived(() => {
		if (!markdown) return '';
		try {
			return marked(markdown, {
				breaks: true,
				gfm: true
			});
		} catch (error) {
			console.error('Error parsing markdown:', error);
			return `<pre>${markdown}</pre>`;
		}
	});
</script>

<Card>
	{#if renderedContent()}
		<article
			class="prose prose-lg prose-gray prose-headings:text-gray-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-700 prose-code:text-indigo-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none"
		>
			{@html renderedContent()}
		</article>
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
			<h2 class="mb-2 text-xl font-semibold text-gray-900">No Content Available</h2>
			<p class="text-gray-600">This post doesn't have any content yet.</p>
		</div>
	{/if}
</Card>
