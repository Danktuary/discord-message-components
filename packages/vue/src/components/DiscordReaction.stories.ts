import { Meta, Story } from '@storybook/vue3'
import DiscordReaction from './DiscordReaction.vue'
import DiscordReactions from './DiscordReactions.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

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

const Template: Story = args => ({
	components: {
		DiscordReaction,
		DiscordReactions,
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
				<template #reactions>
					<discord-reactions>
						<discord-reaction v-bind="args" />
						<discord-reaction v-bind="args" />
						<discord-reaction v-bind="args" />
					</discord-reactions>
				</template>
			</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const Active = Template.bind({})
Active.args = {
	active: true,
}
