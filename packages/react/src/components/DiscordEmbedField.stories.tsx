import React from 'react'
import { Meta, Story } from '@storybook/react'
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
				{args.fieldTitle
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

export const Field = Template.bind({})
Field.args = {
	fieldTitle: 'Field title',
	defaultSlot: 'Field value',
}

export const InlineField = Template.bind({})
InlineField.args = {
	...Field.args,
	inline: true,
}
