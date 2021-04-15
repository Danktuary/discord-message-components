import { Meta, Story } from '@storybook/vue3'
import { util } from '@discord-message-components/core'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMessage',
	component: DiscordMessage,
	argTypes: {
		'default': {
			control: 'text',
			defaultValue: 'Hello World',
		},
		roleColor: {
			control: 'color',
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
			<discord-message v-bind="args">{{ args.default }}</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const Author = Template.bind({})
Author.args = {
	author: 'Author',
}

export const Avatar = Template.bind({})
Avatar.args = {
	avatar: 'https://i.imgur.com/0TeacfY.png',
}

export const Bot = Template.bind({})
Bot.args = {
	bot: true,
}

export const Edited = Template.bind({})
Edited.args = {
	edited: true,
}

export const Profile = Template.bind({})
Profile.args = {
	profile: 'sanc',
}

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
}

export const Timestamp = Template.bind({})
Timestamp.args = {
	timestamp: '01/01/2021',
}
