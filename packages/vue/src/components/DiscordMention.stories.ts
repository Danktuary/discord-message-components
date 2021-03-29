import { Meta, Story } from '@storybook/vue3'
import DiscordMention from './DiscordMention.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMention',
	component: DiscordMention,
	argTypes: {
		color: {
			control: 'color',
			defaultValue: '',
		},
		type: {
			control: {
				type: 'select',
				options: ['channel', 'role', 'user'],
			},
		},
	},
} as Meta

const Template: Story = args => ({
	components: {
		DiscordMention,
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
			<discord-message>Hello <discord-mention v-bind="args" /></discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const Color = Template.bind({})
Color.args = {
	color: '#0099ff',
	type: 'role',
}

export const Highlight = Template.bind({})
Highlight.args = {
	highlight: true,
}

export const Channel = Template.bind({})
Channel.args = {
	type: 'channel',
}

export const Role = Template.bind({})
Role.args = {
	type: 'role',
}

export const User = Template.bind({})
User.args = {
	type: 'user',
}
