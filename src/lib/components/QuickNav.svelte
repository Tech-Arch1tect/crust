<script lang="ts">
	let { meta } = $props();
	import { getTopItems } from '$lib/utils/data';

	const topCategories = $derived(getTopItems(meta.data?.categories?.stats, 3));
	const topTags = $derived(getTopItems(meta.data?.tags?.stats, 3));
</script>

<div class="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
	{#if topCategories.length > 0}
		<div class="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
			<h2 class="mb-6 text-2xl font-bold text-gray-900">Popular Categories</h2>
			<div class="space-y-3">
				{#each topCategories as category}
					<a
						href="/categories/{encodeURIComponent(category.name)}"
						class="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-indigo-100 hover:bg-indigo-50"
					>
						<span class="font-medium text-gray-700 group-hover:text-gray-900">{category.name}</span>
						<span
							class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 transition-all duration-200 group-hover:bg-indigo-200"
						>
							{category.count}
						</span>
					</a>
				{/each}
			</div>
			<a
				href="/categories"
				class="group mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
			>
				View all categories
				<svg
					class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
		</div>
	{/if}

	{#if topTags.length > 0}
		<div class="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
			<h2 class="mb-6 text-2xl font-bold text-gray-900">Popular Tags</h2>
			<div class="space-y-3">
				{#each topTags as tag}
					<a
						href="/tags/{encodeURIComponent(tag.name)}"
						class="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50"
					>
						<span class="font-medium text-gray-700 group-hover:text-gray-900">#{tag.name}</span>
						<span
							class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 transition-all duration-200 group-hover:bg-blue-200"
						>
							{tag.count}
						</span>
					</a>
				{/each}
			</div>
			<a
				href="/tags"
				class="group mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
			>
				View all tags
				<svg
					class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
		</div>
	{/if}
</div>
