<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';

	let { fallbackHref = '/', text = 'Back', useHistory = true, position = 'relative' } = $props();

	function handleBack() {
		if (!browser) return;

		if (useHistory && window.history.length > 1) {
			if (document.referrer && document.referrer !== window.location.href) {
				window.history.back();
			} else {
				goto(fallbackHref);
			}
		} else {
			goto(fallbackHref);
		}
	}

	const positionClasses = {
		relative: '',
		absolute: 'absolute top-4 left-0 z-10',
		fixed: 'fixed top-20 left-4 z-50'
	};
</script>

<div class={positionClasses[position as keyof typeof positionClasses]}>
	<Button variant="secondary" size="sm" onclick={handleBack}>
		<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
		{text}
	</Button>
</div>
