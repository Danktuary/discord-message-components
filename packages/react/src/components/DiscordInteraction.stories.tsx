import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordDefaultOptions from '../context/DiscordDefaultOptions'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import DiscordInteraction, { DiscordInteractionProps } from './DiscordInteraction'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordInteraction',
	component: DiscordInteraction,
	argTypes: {
		defaultSlot: {
			control: 'text',
			defaultValue: 'Hello, World!',
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

const Template: Story<DiscordInteractionProps & { defaultSlot?: string }> = args => (
	<DiscordOptionsContext.Provider value={discordOptions}>
		<DiscordMessages>
			<DiscordMessage>
				Hello, again.
				<DiscordInteraction slot="interactions" {...args}>{args.defaultSlot}</DiscordInteraction>
			</DiscordMessage>
		</DiscordMessages>
	</DiscordOptionsContext.Provider>
)

export const Default = Template.bind({})

export const Avatar = Template.bind({})
Avatar.args = {
	avatar: 'https://i.imgur.com/0TeacfY.png',
}

export const Author = Template.bind({})
Author.args = {
	author: 'Author',
}

export const Bot = Template.bind({})
Bot.args = {
	bot: true,
}

export const Command = Template.bind({})
Command.args = {
	command: true,
	defaultSlot: 'hello',
}

export const Ephemeral = Template.bind({})
Ephemeral.args = {
	ephemeral: true,
}

export const Highlight = Template.bind({})
Highlight.args = {
	highlight: true,
}

export const Profile = Template.bind({})
Profile.args = {
	profile: 'sanc',
}

export const RoleColor = Template.bind({})
RoleColor.args = {
	roleColor: '#0099ff',
}
