import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordReaction, { DiscordReactionProps } from './DiscordReaction'
import DiscordReactions from './DiscordReactions'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordReaction',
	component: DiscordReaction,
	argTypes: {
		image: {
			defaultValue: 'https://i.imgur.com/0TeacfY.png',
		},
		name: {
			defaultValue: 'Sanc',
		},
	},
} as Meta

const Template: Story<DiscordReactionProps> = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World
			<DiscordReactions slot="reactions">
				<DiscordReaction {...args} />
				<DiscordReaction {...args} />
				<DiscordReaction {...args} />
			</DiscordReactions>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const Active = Template.bind({})
Active.args = {
	active: true,
}
