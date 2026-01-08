<script lang="ts">
	import PrivacyModal from '@/privacy-modal.svelte';

	let seePrivacyModal: boolean = $state(false);

	function togglePrivacyModal(): void {
		seePrivacyModal = !seePrivacyModal;
	}
</script>

<footer class="border-t border-gray-200 bg-gray-100 p-4 text-center text-sm text-gray-600">
	Este sitio web no está relacionado de ninguna forma con el
	<a
		href="https://hoxe.vigo.org/"
		class="text-blue-600 underline transition-colors hover:text-blue-800"
		target="_blank"
		rel="noopener noreferrer"
	>
		Ayuntamiento de Vigo
	</a>. |

	<button
		onclick={togglePrivacyModal}
		class="cursor-pointer text-gray-500 underline transition-colors hover:text-gray-800"
	>
		Privacidad y Transparencia
	</button>
</footer>

{#if seePrivacyModal}
	<PrivacyModal {togglePrivacyModal} />
{/if}
