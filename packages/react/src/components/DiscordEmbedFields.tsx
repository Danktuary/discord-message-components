import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import '@discord-message-components/core/dist/styles/discord-embed-fields.css'

export default function DiscordEmbedFields({ children }: PropsWithSlot): ReactElement {
	return (
		<div className="discord-embed-fields">
			{children}
		</div>
	)
}
