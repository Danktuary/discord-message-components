import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: path.join(__dirname, 'src', 'index.ts'),
			name: 'DiscordMessageComponentsVue',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
			plugins: [
				typescript({ tsconfig: './tsconfig.json' }),
			]
		},
	},
})
