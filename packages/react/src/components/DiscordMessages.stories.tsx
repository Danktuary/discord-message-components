import React from 'react'
import { Story, Meta } from '@storybook/react'
import DiscordMessages, { DiscordMessagesProps } from './DiscordMessages'

export default {
	title: 'DiscordMessages',
	component: DiscordMessages,
} as Meta

const Template: Story<DiscordMessagesProps> = args => (
	<DiscordMessages {...args}></DiscordMessages>
)

export const Default = Template.bind({})

export const LightTheme = Template.bind({})
LightTheme.args = {
	lightTheme: true,
}

export const CompactMode = Template.bind({})
CompactMode.args = {
	compactMode: true,
}
