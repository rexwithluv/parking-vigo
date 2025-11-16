<script lang="ts">
	import type { Parking } from '../interfaces/parking';
	export let parking: Parking;

	const nombre: string = parking['nombre'];
	const plazasLibres: number = parking['plazaslibres'];
</script>

<main>
	<h3>{nombre}</h3>
	<h4>Plazas libres: {plazasLibres}</h4>
</main>

<style>
	* {
		font-weight: 400;
	}
</style>
