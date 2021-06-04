import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
	plugins: [reactRefresh()],
	build: {
		lib: {
			entry: path.join(__dirname, 'src', 'index.ts'),
			name: 'DiscordMessageComponentsReact',
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
})
