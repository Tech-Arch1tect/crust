<script lang="ts">
	import { resolve } from '$app/paths';
	import { getCategoryName } from '$lib/utils/category';

	let { author, date, readingTime, category } = $props();

	const categoryName = $derived(getCategoryName(category));

	const formattedDate = $derived(() => {
		// TODO format date properly
		if (!date) return 'Unknown';
		return date;
	});
</script>

<div class="mb-8 flex flex-wrap items-center justify-center gap-4 text-gray-600">
	{#if category}
		<div class="flex items-center">
			<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
				/>
			</svg>
			<a
				href={resolve(`/categories/${encodeURIComponent(category)}`)}
				class="font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-800"
			>
				{categoryName}
			</a>
		</div>
	{/if}

	<div class="flex items-center">
		<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
			/>
		</svg>
		<span class="font-medium">{author}</span>
	</div>

	{#if formattedDate()}
		<div class="flex items-center">
			<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			<time datetime={date}>{formattedDate()}</time>
		</div>
	{/if}

	<div class="flex items-center">
		<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>{readingTime}</span>
	</div>
</div>
