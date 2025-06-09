<script lang="ts">
	import Button from './Button.svelte';

	let {
		currentPage,
		totalPages,
		hasPrevious,
		hasNext,
		onPageChange
	}: {
		currentPage: number; // 0-indexed from API
		totalPages: number;
		hasPrevious: boolean;
		hasNext: boolean;
		onPageChange: (page: number) => void; // expects 1-indexed user page
	} = $props();

	// Convert API page (0-indexed) to user page (1-indexed)
	const userCurrentPage = currentPage + 1;
</script>

{#if totalPages > 1}
	<div class="mt-12 flex items-center justify-center space-x-2">
		<Button
			variant="secondary"
			size="sm"
			disabled={!hasPrevious}
			onclick={() => onPageChange(userCurrentPage - 1)}
			class="disabled:cursor-not-allowed disabled:opacity-50"
		>
			<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Previous
		</Button>

		{#each Array(totalPages) as _, i}
			<Button
				variant={i + 1 === userCurrentPage ? 'primary' : 'secondary'}
				size="sm"
				onclick={() => onPageChange(i + 1)}
				class="min-w-[40px]"
			>
				{i + 1}
			</Button>
		{/each}

		<Button
			variant="secondary"
			size="sm"
			disabled={!hasNext}
			onclick={() => onPageChange(userCurrentPage + 1)}
			class="disabled:cursor-not-allowed disabled:opacity-50"
		>
			Next
			<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</Button>
	</div>
{/if}
