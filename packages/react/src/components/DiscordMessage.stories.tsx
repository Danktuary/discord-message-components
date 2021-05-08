import React from 'react'
import { Meta, Story } from '@storybook/react'
import { util } from '@discord-message-components/core'
import DiscordMessage, { DiscordMessageProps } from './DiscordMessage'
import DiscordMessages from './DiscordMessages'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import DiscordDefaultOptions from '../context/DiscordDefaultOptions'

export default {
	title: 'DiscordMessage',
	component: DiscordMessage,
	argTypes: {
		defaultSlot: {
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

const discordOptions = {
	...DiscordDefaultOptions,
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
}

const Template: Story<DiscordMessageProps & { defaultSlot?: string }> = args => (
	<DiscordOptionsContext.Provider value={discordOptions}>
		<DiscordMessages>
			<DiscordMessage {...args}>{args.defaultSlot}</DiscordMessage>
		</DiscordMessages>
	</DiscordOptionsContext.Provider>
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
