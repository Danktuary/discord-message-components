import path from 'path'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: path.join(__dirname, 'src', 'index.ts'),
			name: 'DiscordMessageComponentsCore',
		},
		rollupOptions: {
			plugins: [
				copy({
					hook: 'writeBundle',
					targets: [
						{
							src: './src/styles/*',
							dest: './dist/styles/',
						},
					],
				}),
			],
		},
	},
})
