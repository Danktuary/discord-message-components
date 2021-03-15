import React, { ReactElement, ReactNode } from 'react'
import AuthorInfo from './AuthorInfo'
import './DiscordMessage.css'

export type DiscordMessageProps = {
	children?: ReactNode,
}

export default function DiscordMessage({ children, compactMode }: DiscordMessageProps & { compactMode?: boolean }): ReactElement {
	const highlightMessage = (elements: ReactNode): boolean => {
		if (!Array.isArray(elements)) return false
		return (elements as ReactElement[]).some(({ props = {} }) => props?.highlight && props?.type !== 'channel')
	}

	let messageClasses = 'discord-message'
	if (children && highlightMessage(children)) messageClasses += ' discord-mention-highlight'

	return (
		<div className={messageClasses}>
			<div className="discord-author-avatar">
				<img src="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png" alt="" />
			</div>
			<div className="discord-message-content">
				{!compactMode
					? (
						<div>
							<AuthorInfo author="User" bot={true} roleColor="#0099ff" />
						</div>
					)
					: null
				}
				<div className="discord-message-body">
					{compactMode
						? <AuthorInfo author="User" bot={true} roleColor="#0099ff" />
						: null
					}
					{children}
				</div>
			</div>
		</div>
	)
}
