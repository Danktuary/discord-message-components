import React, { ReactElement, ReactNode } from 'react'
import './DiscordMention.css'

export type DiscordMentionProps = {
	children?: ReactNode,
	type?: string,
}

export default function DiscordMention({ children, type = 'user' }: DiscordMentionProps): ReactElement {
	const defaultContent = children || (
		type === 'channel'
			? type
			: type.charAt(0).toUpperCase() + type.slice(1)
	)

	const mentionCharacter = type === 'channel' ? '#' : '@'

	return (
		<span className="discord-mention">
			{mentionCharacter}{defaultContent}
		</span>
	)
}
