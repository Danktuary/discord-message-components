import React, { Children, cloneElement, PropsWithChildren, ReactElement } from 'react'
import '@discord-message-components/core/dist/styles/discord-messages.css'

export type DiscordMessagesProps = PropsWithChildren<{
	compactMode?: boolean,
	lightTheme?: boolean,
}>

export default function DiscordMessages({ children, compactMode, lightTheme }: DiscordMessagesProps): ReactElement {
	let classes = 'discord-messages'
	if (lightTheme) classes += ' discord-light-theme'
	if (compactMode) classes += ' discord-compact-mode'

	const messages = Children.map(children, (child, index) => {
		return cloneElement(child, { compactMode, key: index })
	})

	return (
		<div className={classes}>
			{messages}
		</div>
	)
}
