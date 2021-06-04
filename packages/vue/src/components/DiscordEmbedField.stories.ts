import { Meta, Story } from '@storybook/vue3'
import DiscordEmbed from './DiscordEmbed.vue'
import DiscordEmbedField from './DiscordEmbedField.vue'
import DiscordEmbedFields from './DiscordEmbedFields.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordEmbedField',
	component: DiscordEmbedField,
	argTypes: {
		'default': {
			control: 'text',
			defaultValue: 'Field value',
		},
	},
} as Meta

const Template: Story = args => ({
	components: {
		DiscordEmbed,
		DiscordEmbedField,
		DiscordEmbedFields,
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
				<template #embeds>
					<discord-embed>
						Embed content
						<template #fields>
							<discord-embed-fields v-if="args.fieldTitle">
								<discord-embed-field v-bind="args">{{ args.default }}</discord-embed-field>
								<discord-embed-field v-bind="args">{{ args.default }}</discord-embed-field>
								<discord-embed-field v-bind="args">{{ args.default }}</discord-embed-field>
							</discord-embed-fields>
						</template>
					</discord-embed>
				</template>
			</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})
Default.args = {
	fieldTitle: 'Field title',
}

export const InlineField = Template.bind({})
InlineField.args = {
	...Default.args,
	inline: true,
}
