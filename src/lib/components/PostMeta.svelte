<script lang="ts">
	let { author, date, readingTime } = $props();

	const formattedDate = $derived(() => {
		// TODO format date properly
		if (!date) return 'Unknown';
		return date;
	});
</script>

<div class="mb-8 flex flex-wrap items-center justify-center gap-4 text-gray-600">
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
