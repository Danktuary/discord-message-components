import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordMarkdown from './DiscordMarkdown'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordMarkdown',
	component: DiscordMarkdown,
	argTypes: {
		defaultSlot: {
			control: 'text',
			defaultValue: '**Here\'s** _some_ __markdown__ ~~for~~ ||you||.',
		},
	},
} as Meta

const Template: Story = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World. <DiscordMarkdown>{args.defaultSlot}</DiscordMarkdown>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const UsingAllMarkdown = Template.bind({})
UsingAllMarkdown.args = {
	defaultSlot: [
		'**Here\'s** _some_ __markdown__ ~~for~~ ||you||.',
		'Autolink: https://google.com',
		'Codeblock (js): ```js\nconsole.log(true);```',
		'Inline code: `assert(true)`',
		'Spoiler: ||spoiler content||',
		'> Blockquote\n> With multi-line content',
	].join('\n'),
}
