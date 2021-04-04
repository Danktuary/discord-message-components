import React from 'react'
import { Story, Meta } from '@storybook/react'
import DiscordEmbed from './DiscordEmbed'
import DiscordEmbedField, { DiscordEmbedFieldProps } from './DiscordEmbedField'
import DiscordEmbedFields from './DiscordEmbedFields'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordEmbedField',
	component: DiscordEmbedField,
} as Meta

const Template: Story<DiscordEmbedFieldProps & { fieldValue?: string }> = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World
			<DiscordEmbed slot="embeds">
				Embed content
				{args.title
					&& <DiscordEmbedFields slot="fields">
						<DiscordEmbedField {...args}>{args.fieldValue}</DiscordEmbedField>
						<DiscordEmbedField {...args}>{args.fieldValue}</DiscordEmbedField>
						<DiscordEmbedField {...args}>{args.fieldValue}</DiscordEmbedField>
					</DiscordEmbedFields>}
			</DiscordEmbed>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const FieldWithTitle = Template.bind({})
FieldWithTitle.args = {
	title: 'Field title',
	fieldValue: 'Field value',
}

export const InlineFieldWithTitle = Template.bind({})
InlineFieldWithTitle.args = {
	inline: true,
	title: 'Field title',
	fieldValue: 'Field value',
}
