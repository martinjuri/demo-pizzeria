import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
	output: 'static',
	server: {
		host: true,
		port: 4321,
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
	},
});
