import React, { ReactElement, ReactNode } from 'react'
import '@discord-message-components/core/dist/styles/discord-embed.css'

export type DiscordEmbedProps = {
	authorIcon?: string,
	authorName?: string,
	authorUrl?: string,
	children?: ReactNode,
	color?: string,
	slot?: string,
}

export default function DiscordEmbed({ authorIcon, authorName, authorUrl, children, color }: DiscordEmbedProps): ReactElement {
	const content = {
		author: (
			<div className="discord-embed-author">
				{authorIcon
					&& <img src={authorIcon} alt="" className="discord-embed-author-icon" />}
				{authorUrl
					? <a href={authorUrl} target="_blank" rel="noopener noreferrer">{authorName}</a>
					: <span>{authorName}</span>}
			</div>
		),
	}

	return (
		<div className="discord-embed">
			<div style={{ backgroundColor: color }} className="discord-embed-left-border"></div>
			<div className="discord-embed-container">
				<div className="discord-embed-content">
					<div>
						{authorName && content.author}
						<div className="discord-embed-description">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
