import React, { ReactElement, ReactNode } from 'react'
import AuthorInfo from './AuthorInfo'
import './DiscordMessage.css'

export type DiscordMessageProps = {
	author?: string,
	bot?: boolean,
	children?: ReactNode,
	roleColor?: string,
}

export default function DiscordMessage({
	author = 'User',
	bot,
	children,
	compactMode,
	roleColor,
}: DiscordMessageProps & { compactMode?: boolean }): ReactElement {
	const highlightMessage = (elements: ReactNode): boolean => {
		if (!Array.isArray(elements)) return false
		return (elements as ReactElement[]).some(({ props = {} }) => props?.highlight && props?.type !== 'channel')
	}

	let messageClasses = 'discord-message'
	if (children && highlightMessage(children)) messageClasses += ' discord-mention-highlight'

	const user = { author, bot, roleColor }

	return (
		<div className={messageClasses}>
			<div className="discord-author-avatar">
				<img src="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png" alt="" />
			</div>
			<div className="discord-message-content">
				{!compactMode
					? (
						<div>
							<AuthorInfo author={user.author} bot={user.bot} roleColor={user.roleColor} />
						</div>
					)
					: null
				}
				<div className="discord-message-body">
					{compactMode
						? <AuthorInfo author={user.author} bot={user.bot} roleColor={user.roleColor} />
						: null
					}
					{children}
				</div>
			</div>
		</div>
	)
}
