import { getCurrentInstance } from 'vue'
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

export const resolveOptions = (): DiscordMessageOptions => {
	return getCurrentInstance()?.appContext.config.globalProperties?.$discordOptions ?? defaultOptions
}
