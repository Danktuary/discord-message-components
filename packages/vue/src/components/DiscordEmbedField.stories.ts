import { Meta, Story } from '@storybook/vue3'
import DiscordEmbed from './DiscordEmbed.vue'
import DiscordEmbedField from './DiscordEmbedField.vue'
import DiscordEmbedFields from './DiscordEmbedFields.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordEmbedField',
	component: DiscordEmbedField,
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
				<discord-embed slot="embeds">
					Embed content
					<discord-embed-fields slot="fields" v-if="args.fieldTitle">
						<discord-embed-field v-bind="args">{{ args.fieldValue }}</discord-embed-field>
						<discord-embed-field v-bind="args">{{ args.fieldValue }}</discord-embed-field>
						<discord-embed-field v-bind="args">{{ args.fieldValue }}</discord-embed-field>
					</discord-embed-fields>
				</discord-embed>
			</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const Field = Template.bind({})
Field.args = {
	fieldTitle: 'Field title',
}

export const InlineField = Template.bind({})
InlineField.args = {
	...Field.args,
	inline: true,
}
