import { App } from 'vue'
import { avatars as discordAvatars } from '@discord-message-components/core'

export type Avatars = {
	blue: string
	gray: string
	green: string
	orange: string
	red: string
	[key: string]: string
}

export type Profile = {
	author?: string
	avatar?: string
	bot?: boolean
	roleColor?: string
}

export type DiscordMessageOptions = {
	avatars: Avatars
	profiles: { [key: string]: Profile | undefined }
}

const defaultOptions = {
	avatars: discordAvatars,
	profiles: {},
}

export default function install(app: App, options: DiscordMessageOptions): void {
	const avatars = { ...defaultOptions?.avatars, ...options?.avatars }

	app.config.globalProperties.$discordOptions = {
		...defaultOptions,
		...options,
		avatars: {
			...avatars,
			'default': defaultOptions.avatars[avatars.default] ?? avatars.default ?? defaultOptions?.avatars?.blue,
		},
	} as DiscordMessageOptions
}

export { default as DiscordEmbed } from './components/DiscordEmbed.vue'
export { default as DiscordEmbedField } from './components/DiscordEmbedField.vue'
export { default as DiscordEmbedFields } from './components/DiscordEmbedFields.vue'
export { default as DiscordMention } from './components/DiscordMention.vue'
export { default as DiscordMessage } from './components/DiscordMessage.vue'
export { default as DiscordMessages } from './components/DiscordMessages.vue'
