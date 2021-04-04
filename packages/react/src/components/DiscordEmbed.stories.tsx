import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordEmbed, { DiscordEmbedProps } from './DiscordEmbed'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordEmbed',
	component: DiscordEmbed,
	argTypes: {
		borderColor: {
			control: 'color',
			defaultValue: '',
		},
		timestamp: {
			control: 'date',
			defaultValue: '',
		},
	},
} as Meta

const Template: Story<DiscordEmbedProps & { footer?: string }> = args => (
	<DiscordMessages>
		<DiscordMessage>
			Hello World
			<DiscordEmbed slot="embeds" {...args}>
				Embed content
				{args.footer && <span slot="footer">{args.footer}</span>}
			</DiscordEmbed>
		</DiscordMessage>
	</DiscordMessages>
)

export const Default = Template.bind({})

export const AuthorName = Template.bind({})
AuthorName.args = {
	authorName: 'Author name',
}

export const AuthorNameAndIcon = Template.bind({})
AuthorNameAndIcon.args = {
	...AuthorName.args,
	authorIcon: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameAndUrl = Template.bind({})
AuthorNameAndUrl.args = {
	...AuthorName.args,
	authorUrl: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameIconAndUrl = Template.bind({})
AuthorNameIconAndUrl.args = {
	...AuthorNameAndIcon.args,
	...AuthorNameAndUrl.args,
}

export const BorderColor = Template.bind({})
BorderColor.args = {
	borderColor: '#0099ff',
}

export const EmbedTitle = Template.bind({})
EmbedTitle.args = {
	embedTitle: 'Embed title',
}

export const EmbedTitleAndUrl = Template.bind({})
EmbedTitleAndUrl.args = {
	...EmbedTitle.args,
	url: 'https://i.imgur.com/0TeacfY.png',
}

export const Footer = Template.bind({})
Footer.args = {
	footerSlot: 'Footer content',
}

export const FooterWithIcon = Template.bind({})
FooterWithIcon.args = {
	...Footer.args,
	footerIcon: 'https://i.imgur.com/0TeacfY.png',
}

export const FooterWithTimestamp = Template.bind({})
FooterWithTimestamp.args = {
	...Footer.args,
	timestamp: '01/01/2021',
}

export const FooterWithIconAndTimestamp = Template.bind({})
FooterWithIconAndTimestamp.args = {
	...FooterWithIcon.args,
	...FooterWithTimestamp.args,
}

export const Image = Template.bind({})
Image.args = {
	image: 'https://i.imgur.com/0TeacfY.png',
}

export const Thumbnail = Template.bind({})
Thumbnail.args = {
	thumbnail: 'https://i.imgur.com/0TeacfY.png',
}

export const Timestamp = Template.bind({})
Timestamp.args = {
	timestamp: '01/01/2021',
}
