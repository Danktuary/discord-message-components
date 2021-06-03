import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import OutboundLinkIcon from './OutboundLinkIcon'
import '@discord-message-components/core/dist/styles/discord-button.css'

export type DiscordButtonProps = {
	disabled?: boolean
	image?: string
	type?: string
	url?: string
} & PropsWithSlot

export default function DiscordButton({ children, disabled, image, type = 'primary', url }: DiscordButtonProps): ReactElement {
	return type === 'link' && url && !disabled
		? (
			<a
				className="discord-button discord-button-link"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{image && <img className="discord-button-emoji" src={image} alt="" />}
				{children}
				<OutboundLinkIcon />
			</a>
		)
		: (
			<button
				className={`discord-button discord-button-${type}${disabled ? ' discord-button-disabled' : ''}`}
				disabled={disabled}
			>
				{image && <img className="discord-button-emoji" src={image} alt="" />}
				{children}
				{type === 'link' && <OutboundLinkIcon />}
			</button>
		)
}
