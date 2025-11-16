<script lang="ts">
	import type { Parking } from '../interfaces/parking';
	import { Card } from 'flowbite-svelte';
	export let parking: Parking;

	const nombre: string = parking['nombre'];
	const plazasLibres: number = parking['plazaslibres'];
</script>

<main>
	<Card class="p-4 sm:p-6 md:p-8">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
		<p class="leading-tight font-normal text-gray-700 dark:text-gray-400">
			Plazas libres: {plazasLibres}
		</p>
	</Card>
</main>

<style>
	* {
		font-weight: 400;
	}
</style>
