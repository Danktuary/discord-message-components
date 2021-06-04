import { Meta, Story } from '@storybook/vue3'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMessages',
	component: DiscordMessages,
} as Meta

const Template: Story = args => ({
	components: {
		DiscordMessage,
		DiscordMessages,
	},
	setup() {
		return {
			args,
		}
	},
	template: `
		<discord-messages v-bind="args">
			<discord-message>Hello World</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const CompactMode = Template.bind({})
CompactMode.args = {
	compactMode: true,
}

export const LightTheme = Template.bind({})
LightTheme.args = {
	lightTheme: true,
}
