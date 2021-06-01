import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import '@discord-message-components/core/dist/styles/discord-buttons.css'

export default function DiscordButtons({ children }: PropsWithSlot): ReactElement {
	return (
		<div className="discord-buttons">
			{children}
		</div>
	)
}
