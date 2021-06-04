import React, { Children, PropsWithChildren, ReactElement, cloneElement, useContext } from 'react'
import DiscordDefaultOptions, { DiscordMessageOptions } from '../context/DiscordDefaultOptions'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import '@discord-message-components/core/dist/styles/discord-messages.css'

export type DiscordMessagesProps = PropsWithChildren<{
	compactMode?: boolean
	lightTheme?: boolean
}>

export default function DiscordMessages({ children, compactMode, lightTheme }: DiscordMessagesProps): ReactElement {
	const options: DiscordMessageOptions = useContext(DiscordOptionsContext) ?? DiscordDefaultOptions

	compactMode = compactMode === true || (options.defaultMode === 'compact' && compactMode !== false)
	lightTheme = lightTheme === true || (options.defaultTheme === 'light' && lightTheme !== false)

	let classes = 'discord-messages'
	if (compactMode) classes += ' discord-compact-mode'
	if (lightTheme) classes += ' discord-light-theme'

	const messages = Children.map((children as ReactElement[]), (child: ReactElement, index: number): ReactElement => {
		return cloneElement(child, { compactMode, key: index })
	})

	return (
		<div className={classes}>
			{messages}
		</div>
	)
}
