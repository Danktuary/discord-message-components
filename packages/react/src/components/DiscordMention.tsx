import React, { PropsWithChildren, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { util } from '@discord-message-components/core'
import DiscordDefaultOptions, { DiscordMessageOptions, Profile } from '../context/DiscordDefaultOptions'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import '@discord-message-components/core/dist/styles/discord-mention.css'

export type DiscordMentionProps = PropsWithChildren<{
	highlight?: boolean
	profile?: string
	roleColor?: string
	type?: string
}>

export default function DiscordMention({ children, roleColor, profile: profileKey, type = 'user' }: DiscordMentionProps): ReactElement {
	const options: DiscordMessageOptions = useContext(DiscordOptionsContext) ?? DiscordDefaultOptions
	const root = useRef<HTMLSpanElement>(null)
	const profile: Profile = options.profiles?.[profileKey] ?? {}
	const color = roleColor ?? profile?.roleColor

	const [hovering, setHovering] = useState(false)
	const setHoverColor = () => setHovering(true)
	const resetHoverColor = () => setHovering(false)

	const colors = {
		background: util.parseColorToRgba(color, 0.1),
		hover: util.parseColorToRgba(color, 0.3),
	}

	const colorStyle = color && type === 'role'
		? { color, backgroundColor: hovering ? colors.hover : colors.background }
		: {}

	useEffect(() => {
		if (color && type === 'role') {
			root?.current?.addEventListener('mouseenter', setHoverColor)
			root?.current?.addEventListener('mouseout', resetHoverColor)
		}

		return () => {
			root?.current?.removeEventListener('mouseenter', setHoverColor)
			root?.current?.removeEventListener('mouseout', resetHoverColor)
		}
	}, [root, color, type])

	const defaultContent = children && children !== ''
		? children
		: type === 'user' && profile?.author
			? profile.author
			: type === 'channel'
				? type
				: type.charAt(0).toUpperCase() + type.slice(1)

	const mentionCharacter = type === 'channel' ? '#' : '@'

	return (
		<span ref={root} style={colorStyle} className="discord-mention">
			{mentionCharacter}{defaultContent}
		</span>
	)
}
