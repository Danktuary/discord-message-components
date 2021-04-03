import React, { ReactElement, ReactNode } from 'react'
import '@discord-message-components/core/dist/styles/discord-embed.css'

export type DiscordEmbedProps = {
	children?: ReactNode,
	slot?: string,
}

export default function DiscordEmbed({ children }: DiscordEmbedProps): ReactElement {
	return (
		<div className="discord-embed">
			<div className="discord-embed-left-border"></div>
			<div className="discord-embed-container">
				<div className="discord-embed-content">
					<div>
						<div className="discord-embed-description">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
