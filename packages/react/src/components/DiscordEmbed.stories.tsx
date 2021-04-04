import React from 'react'
import { Meta, Story } from '@storybook/react'
import DiscordEmbed, { DiscordEmbedProps } from './DiscordEmbed'
import DiscordMessage from './DiscordMessage'
import DiscordMessages from './DiscordMessages'

export default {
	title: 'DiscordEmbed',
	component: DiscordEmbed,
	argTypes: {
		color: {
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
	authorName: 'Author name',
	authorIcon: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameAndUrl = Template.bind({})
AuthorNameAndUrl.args = {
	authorName: 'Author name',
	authorUrl: 'https://i.imgur.com/0TeacfY.png',
}

export const AuthorNameIconAndUrl = Template.bind({})
AuthorNameIconAndUrl.args = {
	authorName: 'Author name',
	authorIcon: 'https://i.imgur.com/0TeacfY.png',
	authorUrl: 'https://i.imgur.com/0TeacfY.png',
}

export const Color = Template.bind({})
Color.args = {
	color: '#0099ff',
}

export const Footer = Template.bind({})
Footer.args = {
	footer: 'Footer content',
}

export const FooterWithIcon = Template.bind({})
FooterWithIcon.args = {
	footer: 'Footer content',
	footerIcon: 'https://i.imgur.com/0TeacfY.png',
}

export const FooterWithTimestamp = Template.bind({})
FooterWithTimestamp.args = {
	footer: 'Footer content',
	timestamp: '01/01/2020',
}

export const FooterWithIconAndTimestamp = Template.bind({})
FooterWithIconAndTimestamp.args = {
	footer: 'Footer content',
	footerIcon: 'https://i.imgur.com/0TeacfY.png',
	timestamp: '01/01/2020',
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
	timestamp: '01/01/2020',
}

export const Title = Template.bind({})
Title.args = {
	title: 'Embed title',
}

export const TitleAndUrl = Template.bind({})
TitleAndUrl.args = {
	title: 'Embed title',
	url: 'https://i.imgur.com/0TeacfY.png',
}
