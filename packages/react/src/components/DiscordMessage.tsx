import React, { Fragment, ReactElement, ReactNode } from 'react'
import { avatars, util } from '@discord-message-components/core'
import AuthorInfo from './AuthorInfo'
import '@discord-message-components/core/dist/styles/discord-message.css'

export type DiscordMessageProps = {
	author?: string,
	avatar?: string,
	bot?: boolean,
	children?: ReactNode,
	edited?: boolean,
	roleColor?: string,
	timestamp?: Date | string,
}

export default function DiscordMessage({
	author = 'User',
	avatar,
	bot,
	children,
	compactMode,
	edited,
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

	const resolveAvatar = (userAvatar: string) => avatars[userAvatar] || userAvatar

	const user = { author, avatar: resolveAvatar(avatar ?? 'blue'), bot, roleColor }

	return (
		<div className={messageClasses}>
			<div className="discord-author-avatar">
				<img src={user.avatar} alt="" />
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
					{edited ? <span className="discord-message-edited">(edited)</span> : null}
				</div>
			</div>
		</div>
	)
}
