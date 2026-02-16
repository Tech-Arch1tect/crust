<script lang="ts">
	import { resolve } from '$app/paths';

	let { items, type } = $props();

	const colourMap = {
		categories: {
			hover: 'hover:bg-indigo-50 hover:text-indigo-900',
			button: 'bg-indigo-600 hover:bg-indigo-700'
		},
		tags: {
			hover: 'hover:bg-blue-50 hover:text-blue-900',
			button: 'bg-blue-600 hover:bg-blue-700'
		}
	};

	const colours = colourMap[type as keyof typeof colourMap] || colourMap.categories;
	const label = type === 'categories' ? 'Categories' : 'Tags';
	const prefix = type === 'tags' ? '#' : '';

	import type { AppTypes } from '$app/types';
	type Pathname = ReturnType<AppTypes['Pathname']>;
</script>

<div class="group relative">
	<button
		class="flex items-center rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
	>
		{label}
		<svg
			class="ml-1 h-4 w-4 transition-all duration-200 group-hover:rotate-180"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	<div
		class="invisible absolute left-0 z-50 mt-2 w-64 rounded-2xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100"
	>
		<div class="p-2">
			{#each items as item (item.name)}
				<a
					href={resolve(`/${type}/${encodeURIComponent(item.name)}` as Pathname)}
					class="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-700 transition-all duration-200 {colours.hover}"
				>
					<span>{prefix}{item.name}</span>
					<span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">{item.count}</span>
				</a>
			{/each}

			<div class="my-2 border-t border-gray-100"></div>

			<a
				href={resolve(`/${type}` as Pathname)}
				class="flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-white transition-all duration-200 {colours.button}"
			>
				View All {label}
			</a>
		</div>
	</div>
</div>
