import { Meta, Story } from '@storybook/vue3'
import DiscordEmbed from './DiscordEmbed.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordEmbed',
	component: DiscordEmbed,
} as Meta

const Template: Story = args => ({
	components: {
		DiscordEmbed,
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
				<discord-embed slot="embeds" v-bind="args">
					Embed content
				</discord-embed>
			</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})
