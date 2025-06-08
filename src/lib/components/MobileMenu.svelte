<script lang="ts">
	let { topCategories, topTags, meta } = $props();
</script>

<div class="border-t border-gray-100 bg-white md:hidden">
	<div class="space-y-1 px-4 pt-2 pb-4">
		<a
			href="/"
			class="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
			>Home</a
		>

		{#if topCategories.length > 0}
			<div class="px-4 py-2">
				<div class="mb-3 text-base font-semibold text-gray-900">Categories</div>
				{#each topCategories as category}
					<a
						href="/categories/{encodeURIComponent(category.name)}"
						class="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-indigo-50 hover:text-gray-900"
					>
						<span>{category.name}</span>
						<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
							>({category.count})</span
						>
					</a>
				{/each}
				<a
					href="/categories"
					class="mt-2 block rounded-xl px-4 py-2 text-sm font-medium text-indigo-600 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-800"
				>
					View All Categories
				</a>
			</div>
		{/if}

		{#if topTags.length > 0}
			<div class="px-4 py-2">
				<div class="mb-3 text-base font-semibold text-gray-900">Tags</div>
				{#each topTags as tag}
					<a
						href="/tags/{encodeURIComponent(tag.name)}"
						class="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-gray-900"
					>
						<span>#{tag.name}</span>
						<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
							>({tag.count})</span
						>
					</a>
				{/each}
				<a
					href="/tags"
					class="mt-2 block rounded-xl px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-800"
				>
					View All Tags
				</a>
			</div>
		{/if}

		<a
			href="/about"
			class="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
			>About</a
		>

		{#if meta.data?.posts?.total}
			<div class="px-4 py-2">
				<div
					class="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
				>
					{meta.data.posts.total} Posts Total
				</div>
			</div>
		{/if}
	</div>
</div>
