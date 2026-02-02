<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js');
		}
	});
</script>

<svelte:head>
	<link
		rel="icon"
		href="/favicon-black.png"
		type="image/png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		href="/favicon-white.png"
		type="image/png"
		media="(prefers-color-scheme: dark)"
	/>

	<link rel="apple-touch-icon" href="/icon-192.png" />

	<meta name="theme-color" content="#f9fafb" />
</svelte:head>

{@render children()}
