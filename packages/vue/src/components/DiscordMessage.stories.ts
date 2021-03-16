import { Meta, Story } from '@storybook/vue3'
import { util } from '@discord-message-components/core'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMessage',
	component: DiscordMessage,
	argTypes: {
		roleColor: {
			control: 'color',
			defaultValue: '',
		},
		timestamp: {
			control: 'date',
			defaultValue: util.defaultTimestamp,
		},
	},
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
		<discord-messages>
			<discord-message v-bind="args">Hello World</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const Author = Template.bind({})
Author.args = {
	author: 'Author',
}

export const Bot = Template.bind({})
Bot.args = {
	bot: true,
}

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
}

export const Timestamp = Template.bind({})
Timestamp.args = {
	timestamp: '01/01/2021',
}
