import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: path.join(__dirname, 'src', 'index.ts'),
			name: 'DiscordMessageComponentsCore',
		},
	},
})
