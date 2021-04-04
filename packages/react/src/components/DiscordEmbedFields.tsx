import React, { PropsWithChildren, ReactElement } from 'react'
import '@discord-message-components/core/dist/styles/discord-embed-fields.css'

export type DiscordEmbedFieldsProps = PropsWithChildren<{
	slot?: string,
}>

export default function DiscordEmbedFields({ children }: DiscordEmbedFieldsProps): ReactElement {
	return (
		<div className="discord-embed-fields">
			{children}
		</div>
	)
}
