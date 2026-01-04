<script lang="ts">
	import type { Parking } from '../interfaces/parking';

	export let parking: Parking;
	export let seeDetails: boolean;

	$: ({ nombre, plazaslibres: plazasLibres, ocupacion } = parking);

	$: textClass =
		ocupacion === undefined
			? 'text-gray-500'
			: ocupacion > 75
				? 'text-red-600'
				: ocupacion > 50
					? 'text-yellow-600'
					: 'text-green-600';

	$: indicatorClass =
		ocupacion === undefined
			? 'bg-gray-400'
			: ocupacion > 75
				? 'bg-red-500'
				: ocupacion > 50
					? 'bg-yellow-500'
					: 'bg-green-500';
</script>

<a
	href={`https://www.google.com/maps/search/?api=1&query=${parking.lat},${parking.lon}`}
	target="_blank"
	rel="noopener noreferrer"
	class="relative flex cursor-pointer items-center overflow-hidden rounded-lg border-l-8 border-transparent bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
>
	<div class="absolute inset-y-0 left-0 w-2 {indicatorClass}"></div>

	<div class="ml-2 flex-grow">
		<p class="text-lg leading-tight font-semibold text-gray-900">
			{nombre}
		</p>

		{#if ocupacion !== undefined}
			<p class="mt-1 text-sm text-gray-500">
				Ocupación: {ocupacion}% aprox.
			</p>
		{/if}

		{#if seeDetails}
			<div class="text-sm">
				<p class="text-gray-600">Datos adicionales:</p>

				<ul class="list-disc">
					{#each Object.entries(parking) as [key, value]}
						<li class="ml-4 text-gray-600">
							{key}: {value ? value : 'No disponible'}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<div class="flex-shrink-0 text-right">
		{#if plazasLibres !== undefined}
			<p class="text-3xl font-extrabold {textClass} leading-none">
				{plazasLibres}
			</p>
			<p class="mt-1 text-xs text-gray-500">Libres</p>
		{:else}
			<p class="mt-1 text-xs text-gray-500">Sin información</p>
		{/if}
	</div>
</a>
