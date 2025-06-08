<script lang="ts">
	import NavDropdown from '$lib/components/NavDropdown.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import MenuIcon from '$lib/components/MenuIcon.svelte';
	import { getTopItems } from '$lib/utils/data';
	import { NAV_ITEMS } from '$lib/utils/constants';

	let { meta } = $props();

	const topCategories = $derived(getTopItems(meta?.categories?.stats, 5));
	const topTags = $derived(getTopItems(meta?.tags?.stats, 5));

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => (scrolled = window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed z-50 w-full transition-all duration-300 {scrolled
		? 'border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-md'
		: 'bg-white/80 backdrop-blur-sm'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="group flex items-center space-x-3">
				<div
					class="flex h-9 w-9 transform items-center justify-center rounded-xl bg-indigo-600 shadow-lg transition-transform duration-200 group-hover:rotate-12"
				>
					<span class="text-lg font-bold text-white">B</span>
				</div>
				<h1 class="text-xl font-bold text-gray-900">
					{meta?.site?.name || 'Blog'}
				</h1>
			</a>

			<div class="hidden items-center space-x-1 md:flex">
				{#each NAV_ITEMS as item}
					<a
						href={item.href}
						class="relative rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
						>{item.label}</a
					>
				{/each}

				{#if topCategories.length > 0}
					<NavDropdown items={topCategories} type="categories" />
				{/if}

				{#if topTags.length > 0}
					<NavDropdown items={topTags} type="tags" />
				{/if}

				{#if meta?.posts?.total}
					<div
						class="ml-4 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
					>
						{meta.posts.total} Posts
					</div>
				{/if}
			</div>

			<button
				class="inline-flex items-center justify-center rounded-xl p-2 text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<MenuIcon isOpen={mobileMenuOpen} />
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<MobileMenu {topCategories} {topTags} {meta} />
	{/if}
</nav>
