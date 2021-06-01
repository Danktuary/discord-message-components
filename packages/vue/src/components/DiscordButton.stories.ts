import { Meta, Story } from '@storybook/vue3'
import DiscordButton from './DiscordButton.vue'
import DiscordButtons from './DiscordButtons.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordButton',
	component: DiscordButton,
	argTypes: {
		'default': {
			control: 'text',
			defaultValue: 'Button',
		},
	},
} as Meta

const Template: Story = args => ({
	components: {
		DiscordButton,
		DiscordButtons,
		DiscordMessage,
		DiscordMessages,
	},
	setup() {
		return {
			args,
		}
	},
	template: `
		<discord-messages>
			<discord-message>
				Hello World
				<template #actions>
					<discord-buttons>
						<discord-button v-bind="args">{{ args.default }}</discord-button>
					</discord-buttons>
				</template>
			</discord-message>
		</discord-messages>
	`,
})

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
