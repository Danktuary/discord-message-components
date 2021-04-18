import { avatars } from '@discord-message-components/core'

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
	defaultMode: 'comfy' | 'compact'
	defaultTheme: 'dark' | 'light'
	profiles: { [key: string]: Profile | undefined }
}

export default {
	avatars: { ...avatars, 'default': avatars.blue },
	defaultMode: 'comfy',
	defaultTheme: 'dark',
	profiles: {},
} as DiscordMessageOptions
