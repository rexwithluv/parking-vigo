<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Parking } from '../interfaces/parking';
	import ParkingCard from '../lib/parking-card.svelte';

	let parkingsVigo: Parking[];
	let interval: NodeJS.Timeout;
	let lastApiUpdate: string;

	let isLoading: boolean = true;

	let seeParkingsWithoutData: boolean = false;

	async function fetchData(url: string): Promise<Parking[]> {
		try {
			const request = await fetch(url);
			return await request.json();
		} catch (error) {
			console.error('No se han podido recuperar los datos: ', error);
			return [];
		}
	}

	async function getData(): Promise<Parking[]> {
		const urls: string[] = [
			'https://datos.vigo.org/data/trafico/parkings-ocupacion.json',
			'https://datos.vigo.org/data/trafico/aparcamientos-od.json'
		];

		let parkingsData = [];
		for (const url of urls) {
			const data = await fetchData(url);
			parkingsData.push(...data);
		}

		return parkingsData;
	}

	async function loadAndSetData(): Promise<void> {
		isLoading = true;
		const data = await getData();

		parkingsVigo = data.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es-ES'));

		if (!seeParkingsWithoutData) {
			parkingsVigo = parkingsVigo.filter((p) => p.ocupacion !== undefined);
		}

		const firstValidDate = parkingsVigo.find(
			(p) => p.fechahora && !isNaN(new Date(p.fechahora).getTime())
		);
		if (firstValidDate) {
			lastApiUpdate = new Date(firstValidDate.fechahora).toLocaleTimeString('es-ES', {
				hour: '2-digit',
				minute: '2-digit'
			});
		} else {
			lastApiUpdate = 'No disponible';
		}

		isLoading = false;
	}

	onMount(async () => {
		await loadAndSetData();

		const intervalSeconds = 15;
		interval = setInterval(loadAndSetData, intervalSeconds * 1000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<main class="flex min-h-screen flex-col bg-gray-50">
	<header class="p-4 text-center md:p-8">
		<h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
			Plazas Libres en Parkings de Vigo
		</h1>
		<p class="mt-2 text-xl font-medium text-gray-600">
			Última actualización de la API:
			{#if isLoading && lastApiUpdate === '—'}
				Cargando...
			{:else}
				{lastApiUpdate}
			{/if}
		</p>
		<p class="text-sm text-gray-500">
			Hecho con <span class="text-red-600">&lt;3</span> por
			<a href="https://rexwithluv.dev" class="text-red-600 underline hover:text-red-500">
				@rexwithluv
			</a>
		</p>
	</header>

	<div class="mx-auto mb-6 flex max-w-4xl items-center justify-center px-4">
		<label class="relative inline-flex cursor-pointer items-center">
			<input
				type="checkbox"
				bind:checked={seeParkingsWithoutData}
				on:change={loadAndSetData}
				class="h-5 w-5 rounded border-gray-300"
			/>

			<span class="ml-3 text-sm font-medium text-gray-700">
				Ver parkings sin datos en tiempo real
			</span>
		</label>
	</div>

	<div class="flex-grow p-4 md:p-8">
		<div class="mx-auto max-w-4xl space-y-3">
			<div class="space-y-3">
				{#each parkingsVigo as parking}
					<ParkingCard {parking} />
				{/each}
			</div>
		</div>
	</div>

	<footer class="border-t border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-600">
		Este sitio web no está relacionado de ninguna forma con el
		<a
			href="https://hoxe.vigo.org/"
			class="text-blue-600 underline transition-colors hover:text-blue-800"
			target="_blank"
			rel="noopener noreferrer"
		>
			Ayuntamiento de Vigo
		</a>.
	</footer>
</main>
