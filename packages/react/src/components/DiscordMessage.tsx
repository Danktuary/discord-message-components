import React, { Fragment, ReactElement, ReactNode } from 'react'
import { util } from '@discord-message-components/core'
import AuthorInfo from './AuthorInfo'
import './DiscordMessage.css'

export type DiscordMessageProps = {
	author?: string,
	bot?: boolean,
	children?: ReactNode,
	roleColor?: string,
	timestamp?: Date | string,
}

export default function DiscordMessage({
	author = 'User',
	bot,
	children,
	compactMode,
	roleColor,
	timestamp = util.defaultTimestamp,
}: DiscordMessageProps & { compactMode?: boolean }): ReactElement {
	const highlightMessage = (elements: ReactNode): boolean => {
		if (!Array.isArray(elements)) return false
		return (elements as ReactElement[]).some(({ props = {} }) => props?.highlight && props?.type !== 'channel')
	}

	let messageClasses = 'discord-message'
	if (children && highlightMessage(children)) messageClasses += ' discord-mention-highlight'

	const messageTimestamp = util.parseTimestamp(timestamp)

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
							<span className="discord-message-timestamp">
								{messageTimestamp}
							</span>
						</div>
					)
					: null
				}
				<div className="discord-message-body">
					{compactMode
						? (
							<Fragment>
								<span className="discord-message-timestamp">
									{messageTimestamp}
								</span>
								<AuthorInfo author={user.author} bot={user.bot} roleColor={user.roleColor} />
							</Fragment>
						)
						: null
					}
					{children}
				</div>
			</div>
		</div>
	)
}
