import React, { PropsWithChildren, ReactElement } from 'react'
import '@discord-message-components/core/dist/styles/discord-embed-field.css'

export type DiscordEmbedFieldProps = PropsWithChildren<{
	inline?: boolean,
	title: string,
}>

export default function DiscordEmbedField({ children, inline, title }: DiscordEmbedFieldProps): ReactElement {
	let classes = 'discord-embed-field'
	if (inline) classes += ' discord-embed-field-inline'

	return (
		<div className={classes}>
			<div className="discord-embed-field-title">
				{title}
			</div>
			{children}
		</div>
	)
}
