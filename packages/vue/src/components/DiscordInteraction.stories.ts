import { Meta, Story } from '@storybook/vue3'
import DiscordInteraction from './DiscordInteraction.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordInteraction',
	component: DiscordInteraction,
	argTypes: {
		defaultSlot: {
			control: 'text',
			defaultValue: 'Hello, World!',
		},
		roleColor: {
			control: 'color',
		},
	},
} as Meta

const Template: Story = args => ({
	components: {
		DiscordInteraction,
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
				Hello, again.
				<template #interactions>
					<discord-interaction v-bind="args">{{ args.defaultSlot }}</discord-interaction>
				</template>
			</discord-message>
		</discord-messages>
	`,
})

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
	...Command.args,
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
