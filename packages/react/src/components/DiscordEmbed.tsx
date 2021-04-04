import React, { PropsWithChildren, ReactElement, isValidElement } from 'react'
import { util } from '@discord-message-components/core'
import { elementsWithoutSlot, findSlot } from '../util'
import '@discord-message-components/core/dist/styles/discord-embed.css'

export type DiscordEmbedProps = PropsWithChildren<{
	authorIcon?: string,
	authorName?: string,
	authorUrl?: string,
	color?: string,
	image?: string,
	footerIcon?: string,
	slot?: string,
	thumbnail?: string,
	timestamp?: Date | string,
	title?: string,
	url?: string,
}>

export default function DiscordEmbed({
	authorIcon,
	authorName,
	authorUrl,
	children,
	color,
	footerIcon,
	image,
	thumbnail,
	timestamp,
	title,
	url,
}: DiscordEmbedProps): ReactElement {
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
				{authorIcon
					&& <img src={authorIcon} alt="" className="discord-embed-author-icon" />}
				{authorUrl
					? <a href={authorUrl} target="_blank" rel="noopener noreferrer">{authorName}</a>
					: <span>{authorName}</span>}
			</div>
		),
		footer: (
			<div className="discord-embed-footer">
				{(slots.footer && footerIcon) && <img src={footerIcon} alt="" className="discord-embed-footer-icon" />}
				<span>
					{slots.footer}
					{(slots.footer && timestamp) && <span className="discord-embed-footer-separator">&bull;</span>}
					{timestamp && <span>{util.parseTimestamp(timestamp)}</span>}
				</span>
			</div>
		),
		title: (
			<div className="discord-embed-title">
				{url
					? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
					: <span>{title}</span>}
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
						{title && content.title}
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
