<script lang="ts">
	import type { Parking } from '../interfaces/parking';
	import { Card } from 'flowbite-svelte';
	export let parking: Parking;

	$: nombre = parking['nombre'];
	$: plazasLibres = parking['plazaslibres'];
	$: ocupacion = parking['ocupacion'];

	$: backgroundColor =
		ocupacion > 75 ? 'bg-red-400' : ocupacion > 50 ? 'bg-yellow-300' : 'bg-green-400';
</script>

<main>
	<Card class="card p-4 sm:p-6 md:p-8 {backgroundColor}">
		<h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{nombre}
		</h5>
		<p class="text-center leading-tight font-normal text-gray-700 dark:text-gray-400">
			Plazas libres: {plazasLibres} <br />
			Ocupación de un {ocupacion}% aprox.
		</p>
	</Card>
</main>

<style>
	* {
		font-weight: 400;
	}
</style>
