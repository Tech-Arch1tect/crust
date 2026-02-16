<script lang="ts">
	import { resolve } from '$app/paths';

	let { topCategories, topTags, meta } = $props();
</script>

<div class="border-t border-gray-100 bg-white md:hidden">
	<div class="space-y-1 px-4 pt-2 pb-4">
		<form action={resolve('/search')} method="GET" class="px-4 py-2">
			<div class="relative">
				<svg
					class="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<input
					name="q"
					type="search"
					placeholder="Search posts..."
					class="w-full rounded-xl bg-gray-100 py-2.5 pr-4 pl-10 text-sm text-gray-700 transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-purple-300 focus:outline-none"
				/>
			</div>
		</form>

		<a
			href={resolve('/')}
			class="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
			>Home</a
		>

		{#if topCategories.length > 0}
			<div class="px-4 py-2">
				<div class="mb-3 text-base font-semibold text-gray-900">Categories</div>
				{#each topCategories as category (category.name)}
					<a
						href={resolve(`/categories/${encodeURIComponent(category.name)}`)}
						class="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-indigo-50 hover:text-gray-900"
					>
						<span>{category.name}</span>
						<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
							>({category.count})</span
						>
					</a>
				{/each}
				<a
					href={resolve('/categories')}
					class="mt-2 block rounded-xl px-4 py-2 text-sm font-medium text-indigo-600 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-800"
				>
					View All Categories
				</a>
			</div>
		{/if}

		{#if topTags.length > 0}
			<div class="px-4 py-2">
				<div class="mb-3 text-base font-semibold text-gray-900">Tags</div>
				{#each topTags as tag (tag.name)}
					<a
						href={resolve(`/tags/${encodeURIComponent(tag.name)}`)}
						class="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-gray-900"
					>
						<span>#{tag.name}</span>
						<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
							>({tag.count})</span
						>
					</a>
				{/each}
				<a
					href={resolve('/tags')}
					class="mt-2 block rounded-xl px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-800"
				>
					View All Tags
				</a>
			</div>
		{/if}

		<a
			href={resolve('/about')}
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
