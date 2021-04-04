import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordMention, { DiscordMentionProps } from './DiscordMention'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordMention',
	component: DiscordMention,
	argTypes: {
		roleColor: {
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

const Template: Story<DiscordMentionProps> = args => (
	<DiscordMessages>
		<DiscordMessage>Hello <DiscordMention {...args} /></DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

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

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
	type: 'role',
}

export const User = Template.bind({})
User.args = {
	type: 'user',
}
