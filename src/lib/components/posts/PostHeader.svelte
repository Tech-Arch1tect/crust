<script lang="ts">
	import { getCategoryName } from '$lib/utils/category';

	let { title, category } = $props();

	const categoryName = $derived(getCategoryName(category));
</script>

<header class="mb-12 text-center">
	<div class="mb-6">
		{#if category}
			<a
				href="/categories/{encodeURIComponent(category)}"
				class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-900"
			>
				{categoryName}
			</a>
		{/if}
	</div>

	<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
		{title}
	</h1>

	<div class="mx-auto mb-6 h-1 w-24 rounded-full bg-indigo-600"></div>
</header>
