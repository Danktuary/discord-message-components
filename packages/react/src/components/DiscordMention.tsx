import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react'
import { util } from '@discord-message-components/core'
import '@discord-message-components/core/dist/styles/discord-mention.css'

export type DiscordMentionProps = PropsWithChildren<{
	highlight?: boolean
	roleColor?: string
	type?: string
}>

export default function DiscordMention({ children, roleColor: color, type = 'user' }: DiscordMentionProps): ReactElement {
	const root = useRef<HTMLSpanElement>(null)
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

	const defaultContent = children || (
		type === 'channel'
			? type
			: type.charAt(0).toUpperCase() + type.slice(1)
	)

	const mentionCharacter = type === 'channel' ? '#' : '@'

	return (
		<span ref={root} style={colorStyle} className="discord-mention">
			{mentionCharacter}{defaultContent}
		</span>
	)
}
