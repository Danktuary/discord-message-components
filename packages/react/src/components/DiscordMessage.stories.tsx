import React from 'react'
import { Story, Meta } from '@storybook/react'
import { util } from '@discord-message-components/core'
import DiscordMessage, { DiscordMessageProps } from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

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

const Template: Story<DiscordMessageProps> = args => (
	<DiscordMessages>
		<DiscordMessage {...args}>Hello World</DiscordMessage>
	</DiscordMessages>
)

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

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
}

export const Timestamp = Template.bind({})
Timestamp.args = {
	timestamp: '01/01/2021',
}
