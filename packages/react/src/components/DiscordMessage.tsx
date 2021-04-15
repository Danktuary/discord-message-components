import React, { Fragment, PropsWithChildren, ReactElement, ReactNode, isValidElement, useContext } from 'react'
import { util } from '@discord-message-components/core'
import { elementsWithoutSlot, findSlot } from '../util'
import DiscordDefaultOptions, { DiscordMessageOptions, Profile } from '../context/DiscordDefaultOptions'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import AuthorInfo from './AuthorInfo'
import '@discord-message-components/core/dist/styles/discord-message.css'

export type DiscordMessageProps = PropsWithChildren<{
	author?: string
	avatar?: string
	bot?: boolean
	edited?: boolean
	profile?: string
	roleColor?: string
	timestamp?: Date | string
}>

export default function DiscordMessage({
	author,
	avatar,
	bot,
	children,
	compactMode,
	edited,
	profile: profileKey,
	roleColor,
	timestamp = util.defaultTimestamp,
}: DiscordMessageProps & { compactMode?: boolean }): ReactElement {
	const options: DiscordMessageOptions = useContext(DiscordOptionsContext) ?? DiscordDefaultOptions

	const profile: Profile = options.profiles?.[profileKey] ?? {}
	const user: Profile = {
		author: !author && profile?.author ? profile.author : author || 'User',
		avatar: util.resolveImage(options.avatars, avatar || profile?.avatar),
		bot: bot ?? profile?.bot,
		roleColor: roleColor || profile?.roleColor,
	}

	const highlightMessage = (elements: ReactNode): boolean => {
		if (!Array.isArray(elements)) return false
		return (elements as ReactElement[]).some(({ props = {} }) => props?.highlight && props?.type !== 'channel')
	}

	let messageClasses = 'discord-message'
	if (children && highlightMessage(children)) messageClasses += ' discord-mention-highlight'

	const messageTimestamp = util.parseTimestamp(timestamp)

	const slots = {
		'default': children,
		embeds: findSlot(children, 'embeds'),
	}

	if (slots.embeds) {
		if (!isValidElement(slots.embeds)) {
			throw new Error('Element with slot name "embeds" should be a valid DiscordEmbed component.')
		}

		slots.default = elementsWithoutSlot(slots.default, 'embeds')
	}

	return (
		<div className={messageClasses}>
			<div className="discord-author-avatar">
				<img src={user.avatar} alt="" />
			</div>
			<div className="discord-message-content">
				{!compactMode
					&& <div>
						<AuthorInfo author={user.author} bot={user.bot} roleColor={user.roleColor} />
						<span className="discord-message-timestamp">
							{messageTimestamp}
						</span>
					</div>}
				<div className="discord-message-body">
					{compactMode
						&& <Fragment>
							<span className="discord-message-timestamp">
								{messageTimestamp}
							</span>
							<AuthorInfo author={user.author} bot={user.bot} roleColor={user.roleColor} />
						</Fragment>}
					{slots.default}
					{edited && <span className="discord-message-edited">(edited)</span>}
				</div>
				{slots.embeds}
			</div>
		</div>
	)
}
