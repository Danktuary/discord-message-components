import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMessages',
	component: DiscordMessages,
}

const Template = args => ({
	components: {
		DiscordMessages,
	},
	setup() {
		return {
			args,
		}
	},
	template: '<discord-messages v-bind="args">Hello World</discord-messages>',
})

export const Default = Template.bind({})

export const LightTheme = Template.bind({})
LightTheme.args = {
	lightTheme: true,
}

export const CompactMode = Template.bind({})
CompactMode.args = {
	compactMode: true,
}
