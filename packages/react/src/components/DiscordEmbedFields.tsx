import React, { ReactElement, ReactNode } from 'react'
import '@discord-message-components/core/dist/styles/discord-embed-fields.css'

export type DiscordEmbedFieldsProps = {
	children?: ReactNode,
	slot?: string,
}

export default function DiscordEmbedFields({ children }: DiscordEmbedFieldsProps): ReactElement {
	return (
		<div className="discord-embed-fields">
			{children}
		</div>
	)
}
