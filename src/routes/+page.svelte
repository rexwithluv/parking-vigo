<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Parking } from '../interfaces/parking';
	import ParkingCard from './parking-card.svelte';

	let parkingsVigo: Parking[] | null;
	let interval: number;

	async function getData(): Promise<Parking[] | null> {
		try {
			const url: string = 'https://datos.vigo.org/data/trafico/parkings-ocupacion.json';

			const request = await fetch(url);
			return await request.json();
		} catch (error) {
			console.error('No se han podido recuperar los datos.');
			return null;
		}
	}

	onMount(async () => {
		parkingsVigo = await getData();

		const intervalSeconds = 60;
		interval = setInterval(async () => {
			parkingsVigo = await getData();
		}, intervalSeconds * 1000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<main class="flex min-h-screen flex-col">
	<h1 class="text-heading mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
		Número de plazas libres en Parkings de Vigo
	</h1>

	<div class="grid flex-grow grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
		{#each parkingsVigo as parking}
			<ParkingCard {parking} />
		{/each}
	</div>

	<footer class="bg-gray-100 p-4 text-center text-sm">
		Este sitio web no está relacionado de ninguna forma con el Ayuntamiento de Vigo.
	</footer>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

	* {
		font-family: 'Josefin Sans', sans-serif;
		font-weight: 400;
	}

	h1,
	footer {
		text-align: center;
	}
</style>
