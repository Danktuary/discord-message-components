import { app } from '@storybook/vue3'
import { install as DiscordMessageComponents } from '../src/index'

app.use(DiscordMessageComponents, {
	profiles: {
		sanc: {
			author: 'Sanc',
			avatar: 'https://i.imgur.com/0TeacfY.png',
			roleColor: '#0099ff',
		},
		bot: {
			author: 'Bot',
			avatar: 'green',
			roleColor: '#3eaf7c',
			bot: true,
		},
	},
})

export const parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*',
	},
}
