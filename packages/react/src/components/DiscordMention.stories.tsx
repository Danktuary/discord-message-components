import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import DiscordDefaultOptions from '../context/DiscordDefaultOptions'
import DiscordMention, { DiscordMentionProps } from './DiscordMention'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordMention',
	component: DiscordMention,
	argTypes: {
		defaultSlot: {
			control: 'text',
		},
		roleColor: {
			control: 'color',
		},
		type: {
			control: {
				type: 'select',
				options: ['channel', 'role', 'user'],
			},
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

const Template: Story<DiscordMentionProps & { defaultSlot?: string }> = args => (
	<DiscordOptionsContext.Provider value={discordOptions}>
		<DiscordMessages>
			<DiscordMessage>Hello <DiscordMention {...args}>{args.defaultSlot}</DiscordMention></DiscordMessage>
		</DiscordMessages>
	</DiscordOptionsContext.Provider>
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

export const Profile = Template.bind({})
Profile.args = {
	profile: 'sanc',
}

export const Role = Template.bind({})
Role.args = {
	type: 'role',
}

export const RoleColor = Template.bind({})
RoleColor.args = {
	...Role.args,
	roleColor: '#0099ff',
}

export const User = Template.bind({})
User.args = {
	type: 'user',
}
