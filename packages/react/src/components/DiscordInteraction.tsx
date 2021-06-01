import React, { ReactElement, useContext } from 'react'
import { util } from '@discord-message-components/core'
import DiscordDefaultOptions, { DiscordMessageOptions, Profile } from '../context/DiscordDefaultOptions'
import DiscordOptionsContext from '../context/DiscordOptionsContext'
import { PropsWithSlot } from '../util'
import AuthorInfo from './AuthorInfo'
import '@discord-message-components/core/dist/styles/discord-interaction.css'

export type DiscordInteractionProps = {
	author?: string
	avatar?: string
	bot?: boolean
	command?: boolean
	edited?: boolean
	ephemeral?: boolean
	highlight?: boolean
	profile?: string
	roleColor?: string
} & PropsWithSlot

export default function DiscordInteraction({
	author,
	avatar,
	bot,
	children,
	command,
	edited,
	highlight,
	profile: profileKey,
	roleColor,
}: DiscordInteractionProps): ReactElement {
	const options: DiscordMessageOptions = useContext(DiscordOptionsContext) ?? DiscordDefaultOptions

	const profile: Profile = !profileKey ? {} : options.profiles?.[profileKey] ?? {}
	const user: Profile = {
		author: !author && profile?.author ? profile.author : author || 'User',
		avatar: util.resolveImage(options.avatars, avatar || profile?.avatar),
		bot: bot ?? profile?.bot,
		roleColor: roleColor || profile?.roleColor,
	}

	return (
		<div className="discord-interaction">
			<img className="discord-interaction-author-avatar" src={user.avatar} alt="" />
			<AuthorInfo
				className="discord-interaction-author-info"
				author={highlight ? `@${user.author}` : user.author}
				bot={user.bot}
				roleColor={user.roleColor}
			/>
			{command
				? <span className="discord-interaction-command">
					used{' '}
					<span className="discord-interaction-command-name">
						/{children}
					</span>
				</span>
				: <span className="discord-interaction-reply">
					{children}
					{edited && <span className="discord-interaction-reply-edited">(edited)</span>}
				</span>
			}
		</div>
	)
}
