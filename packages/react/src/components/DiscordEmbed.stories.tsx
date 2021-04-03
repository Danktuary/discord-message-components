import React from 'react'
import { Story, Meta } from '@storybook/react'
import DiscordEmbed, { DiscordEmbedProps } from './DiscordEmbed'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordEmbed',
	component: DiscordEmbed,
	argTypes: {
		color: {
			control: 'color',
			defaultValue: '',
		},
	},
} as Meta

const Template: Story<DiscordEmbedProps> = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World
			<DiscordEmbed slot="embeds" {...args}>
				Embed content
			</DiscordEmbed>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const AuthorName = Template.bind({})
AuthorName.args = {
	authorName: 'Author name',
}

export const AuthorNameAndIcon = Template.bind({})
AuthorNameAndIcon.args = {
	authorName: 'Author name',
	authorIcon: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameAndUrl = Template.bind({})
AuthorNameAndUrl.args = {
	authorName: 'Author name',
	authorUrl: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameIconAndUrl = Template.bind({})
AuthorNameIconAndUrl.args = {
	authorName: 'Author name',
	authorIcon: 'https://i.imgur.com/0TeacfY.png',
	authorUrl: 'https://i.imgur.com/0TeacfY.png',
}

export const Color = Template.bind({})
Color.args = {
	color: '#0099ff',
}
