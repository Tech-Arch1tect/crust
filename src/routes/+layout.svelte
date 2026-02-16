<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<div class="pointer-events-none fixed inset-0 overflow-hidden">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,163,175,0.15)_1px,transparent_0)] bg-[length:24px_24px]"
		></div>
	</div>

	<Navbar meta={data.meta} />

	<main class="relative mx-auto max-w-7xl px-4 py-8 pt-16 sm:px-6 lg:px-8">
		{@render children()}
	</main>
</div>
