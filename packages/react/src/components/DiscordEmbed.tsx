import React, { ReactElement, isValidElement } from 'react'
import { util } from '@discord-message-components/core'
import { PropsWithSlot, elementsWithoutSlot, findSlot } from '../util'
import '@discord-message-components/core/dist/styles/discord-embed.css'

export type DiscordEmbedProps = {
	authorIcon?: string
	authorName?: string
	authorUrl?: string
	borderColor?: string
	embedTitle?: string
	image?: string
	footerIcon?: string
	thumbnail?: string
	timestamp?: Date | string
	url?: string
}

export default function DiscordEmbed({
	authorIcon,
	authorName,
	authorUrl,
	children,
	borderColor,
	embedTitle,
	footerIcon,
	image,
	thumbnail,
	timestamp,
	url,
}: DiscordEmbedProps & PropsWithSlot): ReactElement {
	const slots = {
		'default': children,
		fields: findSlot(children, 'fields'),
		footer: findSlot(children, 'footer'),
	}

	if (slots.fields) {
		if (!isValidElement(slots.fields)) {
			throw new Error('Element with slot name "fields" should be a valid DiscordEmbedFields component.')
		}

		slots.default = elementsWithoutSlot(slots.default, 'fields')
	}

	if (slots.footer) slots.default = elementsWithoutSlot(slots.default, 'footer')

	const content = {
		author: (
			<div className="discord-embed-author">
				{authorIcon && <img src={authorIcon} alt="" className="discord-embed-author-icon" />}
				{authorUrl
					? <a href={authorUrl} target="_blank" rel="noopener noreferrer">
						{authorName}
					</a>
					: <span>
						{authorName}
					</span>}
			</div>
		),
		footer: (
			<div className="discord-embed-footer">
				{(slots.footer && footerIcon) && <img src={footerIcon} alt="" className="discord-embed-footer-icon" />}
				<span>
					{slots.footer}
					{(slots.footer && timestamp) && <span className="discord-embed-footer-separator">
						&bull;
					</span>}
					{timestamp && <span>
						{util.parseTimestamp(timestamp)}
					</span>}
				</span>
			</div>
		),
		title: (
			<div className="discord-embed-title">
				{url
					? <a href={url} target="_blank" rel="noopener noreferrer">
						{embedTitle}
					</a>
					: <span>
						{embedTitle}
					</span>}
			</div>
		),
	}

	return (
		<div className="discord-embed">
			<div style={{ backgroundColor: borderColor }} className="discord-embed-left-border"></div>
			<div className="discord-embed-container">
				<div className="discord-embed-content">
					<div>
						{authorName && content.author}
						{embedTitle && content.title}
						<div className="discord-embed-description">
							{slots.default}
						</div>
						{slots.fields}
						{image && <img src={image} alt="" className="discord-embed-image" />}
					</div>
					{thumbnail && <img src={thumbnail} alt="" className="discord-embed-thumbnail" />}
				</div>
				{(slots.footer || timestamp) && content.footer}
			</div>
		</div>
	)
}
