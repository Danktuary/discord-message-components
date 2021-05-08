import React, { ReactElement } from 'react'
import '@discord-message-components/core/dist/styles/discord-author-info.css'

type AuthorInfoProps = {
	author?: string
	bot?: boolean
	roleColor?: string
}

export default function AuthorInfo({ author, bot, className, roleColor }: AuthorInfoProps & { className?: string }): ReactElement {
	let authorInfoClasses = 'discord-author-info'
	if (className) authorInfoClasses += ` ${className}`

	return (
		<span className={authorInfoClasses}>
			<span style={{ color: roleColor }} className="discord-author-username">
				{author}
			</span>
			{bot && <span className="discord-author-bot-tag">
				Bot
			</span>}
		</span>
	)
}
