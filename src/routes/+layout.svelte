<script lang="ts">
	import '../app.css';
	import faviconBlack from '/static/favicon-black.png';
	import faviconWhite from '/static/favicon-white.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={faviconBlack} type="image/png" media="(prefers-color-scheme: light)" />

	<link rel="icon" href={faviconWhite} type="image/png" media="(prefers-color-scheme: dark)" />
</svelte:head>

{@render children()}
