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

<main>
	<h1>Número de plazas libres en Parkings de Vigo</h1>

	{#each parkingsVigo as parking}
		<div class="card">
			<ParkingCard {parking} />
		</div>
	{/each}

	<footer>Este sitio web no está relacionado de ninguna forma con el Ayuntamiento de Vigo.</footer>
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
