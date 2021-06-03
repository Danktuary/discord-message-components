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
	defaultMode: 'cozy' | 'compact'
	defaultTheme: 'dark' | 'light'
	profiles: { [key: string]: Profile | undefined }
}

export const defaultOptions: DiscordMessageOptions = {
	avatars: { ...discordAvatars, 'default': discordAvatars.blue },
	defaultMode: 'cozy',
	defaultTheme: 'dark',
	profiles: {},
}

export const install = (app: App, options: DiscordMessageOptions): void => {
	const avatars = { ...defaultOptions?.avatars, ...options?.avatars }

	app.config.globalProperties.$discordOptions = {
		...defaultOptions,
		...options,
		avatars: {
			...avatars,
			'default': defaultOptions.avatars[avatars.default] ?? avatars.default,
		},
	} as DiscordMessageOptions
}

export { default as DiscordButton } from './components/DiscordButton.vue'
export { default as DiscordButtons } from './components/DiscordButtons.vue'
export { default as DiscordEmbed } from './components/DiscordEmbed.vue'
export { default as DiscordEmbedField } from './components/DiscordEmbedField.vue'
export { default as DiscordEmbedFields } from './components/DiscordEmbedFields.vue'
export { default as DiscordInteraction } from './components/DiscordInteraction.vue'
export { default as DiscordMarkdown } from './components/DiscordMarkdown.vue'
export { default as DiscordMention } from './components/DiscordMention.vue'
export { default as DiscordMessage } from './components/DiscordMessage.vue'
export { default as DiscordMessages } from './components/DiscordMessages.vue'
export { default as DiscordReaction } from './components/DiscordReaction.vue'
export { default as DiscordReactions } from './components/DiscordReactions.vue'
