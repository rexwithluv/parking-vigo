<script lang="ts">
	export let togglePrivacyModal;
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
	<button class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" on:click={togglePrivacyModal}
		>.
	</button>

	<div class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
		<div class="p-6">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-2xl font-bold text-gray-900">Privacidad y Datos</h2>
			</div>

			<div class="space-y-4 text-sm leading-relaxed text-gray-600">
				<p>
					<strong class="text-gray-800 underline">Cero rastreo:</strong>
					Esta aplicación no utiliza cookies, no requiere registro y no almacena ningún dato personal
					de sus usuarios.
				</p>

				<p>
					<strong class="text-gray-800 underline">Origen de los datos:</strong>
					La información mostrada proviene de las APIs públicas de
					<strong>Datos Abertos del Concello de Vigo</strong>. Esta app solo actúa como un visor
					amigable para facilitar la consulta.
				</p>

				<p>
					<strong class="text-gray-800 underline">Infraestructura:</strong>
					El proveedor de hosting puede registrar la dirección IP de forma técnica para prevenir ataques
					o errores, pero nosotros no tenemos acceso ni interés en procesar esa información para identificarte.
				</p>

				<p class="pt-2 italic">
					Como desarrollador, mi intención es aportar una herramienta útil a la comunidad de Vigo.
					Si tienes dudas, puedes contactarme
					<a
						href="https://rexwithluv.dev"
						class="text-red-600 underline transition-colors hover:text-red-500"
						target="_blank"
					>
						en mi web personal &lt;3
					</a>
				</p>
			</div>

			<div class="mt-6">
				<button
					on:click={togglePrivacyModal}
					class="w-full cursor-pointer rounded-xl bg-gray-900 px-4 py-3 font-bold text-white transition-colors hover:bg-gray-800"
				>
					Entendido
				</button>
			</div>
		</div>
	</div>
</div>
