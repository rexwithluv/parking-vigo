import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isDevelopment = process.env.VITE_ENVIRONMENT === 'development';
const baseUrl = isDevelopment ? '/' : '/parking-vigo';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			'@/*': './src/lib/'
		},
		paths: { base: baseUrl }
	}
};

export default config;
