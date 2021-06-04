import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordMessage from './DiscordMessage'
import DiscordMessages, { DiscordMessagesProps } from './DiscordMessages'

export default {
	title: 'DiscordMessages',
	component: DiscordMessages,
} as Meta

const Template: Story<DiscordMessagesProps> = args => (
	<DiscordMessages {...args}>
		<DiscordMessage>Hello World</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const CompactMode = Template.bind({})
CompactMode.args = {
	compactMode: true,
}

export const LightTheme = Template.bind({})
LightTheme.args = {
	lightTheme: true,
}
