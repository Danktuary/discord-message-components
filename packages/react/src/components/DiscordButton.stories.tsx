import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordButton, { DiscordButtonProps } from './DiscordButton'
import DiscordButtons from './DiscordButtons'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordButton',
	component: DiscordButton,
	argTypes: {
		defaultSlot: {
			control: 'text',
			defaultValue: 'Button',
		},
	},
} as Meta

const Template: Story<DiscordButtonProps & { defaultSlot?: string }> = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World
			<DiscordButtons>
				<DiscordButton {...args}>{args.defaultSlot}</DiscordButton>
			</DiscordButtons>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
}

export const Image = Template.bind({})
Image.args = {
	image: 'https://i.imgur.com/0TeacfY.png',
}

export const PrimaryType = Template.bind({})
PrimaryType.args = {
	type: 'primary',
}

export const SecondaryType = Template.bind({})
SecondaryType.args = {
	type: 'secondary',
}

export const SuccessType = Template.bind({})
SuccessType.args = {
	type: 'success',
}

export const DangerType = Template.bind({})
DangerType.args = {
	type: 'danger',
}

export const LinkTypeWithoutURL = Template.bind({})
LinkTypeWithoutURL.args = {
	type: 'link',
}

export const LinkTypeWithURL = Template.bind({})
LinkTypeWithURL.args = {
	type: 'link',
	url: 'https://i.imgur.com/0TeacfY.png',
}

export const LinkTypeWithImageAndURL = Template.bind({})
LinkTypeWithImageAndURL.args = {
	type: 'link',
	image: 'https://i.imgur.com/0TeacfY.png',
	url: 'https://i.imgur.com/0TeacfY.png',
}
