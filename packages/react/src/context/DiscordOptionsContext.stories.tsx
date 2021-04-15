import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordDefaultOptions from './DiscordDefaultOptions'
import DiscordMessage from '../components/DiscordMessage'
import DiscordMessages from '../components/DiscordMessages'
import DiscordOptionsContext from './DiscordOptionsContext'


const discordOptions = {
	...DiscordDefaultOptions,
	avatars: {
		...DiscordDefaultOptions.avatars,
	},
}

export default {
	title: 'DiscordOptionsContext',
	argTypes: {
		value: {
			control: 'object',
			defaultValue: discordOptions,
		},
	},
} as Meta

const Template: Story = args => (
	<DiscordOptionsContext.Provider value={args.value}>
		<DiscordMessages>
			<DiscordMessage>Hello World</DiscordMessage>
		</DiscordMessages>
	</DiscordOptionsContext.Provider>
)

export const Default = Template.bind({})
