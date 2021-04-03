import React from 'react'
import { Story, Meta } from '@storybook/react'
import DiscordEmbed, { DiscordEmbedProps } from './DiscordEmbed'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordEmbed',
	component: DiscordEmbed,
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
