<script lang="ts">
	import { resolve } from '$app/paths';

	let { tags } = $props();
</script>

<div class="flex flex-wrap justify-center gap-2">
	{#each tags as tag (tag)}
		<a
			href={resolve(`/tags/${encodeURIComponent(tag)}`)}
			class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors duration-200 hover:bg-blue-200"
		>
			#{tag}
		</a>
	{/each}
</div>
