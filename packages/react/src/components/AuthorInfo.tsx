import React, { ReactElement } from 'react'
import './AuthorInfo.css'

type AuthorInfoProps = {
	author?: string,
	bot?: boolean,
	roleColor?: string,
}

function AuthorInfo({ author, bot, roleColor }: AuthorInfoProps): ReactElement {
	return (
		<span className="discord-author-info">
			<span style={{ color: roleColor }} className="discord-author-username">
				{author}
			</span>
			{bot
				? (<span className="discord-author-bot-tag">
					Bot
				</span>)
				: null}
		</span>
	)
}

export default AuthorInfo
