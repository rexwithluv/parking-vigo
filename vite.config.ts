import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const isDevelopment = process.env.VITE_ENVIRONMENT === 'development';
const baseUrl = isDevelopment ? '/' : '/parking-vigo/';

export default defineConfig({
	base: baseUrl,
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()]
});
