import React, { ReactElement, ReactNode } from 'react'
import AuthorInfo from './AuthorInfo'
import './DiscordMessage.css'

export type DiscordMessageProps = {
	children?: ReactNode,
}

function DiscordMessage({ children }: DiscordMessageProps): ReactElement {
	return (
		<div className="discord-message">
			<div className="discord-author-avatar">
				<img src="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png" alt="" />
			</div>
			<div className="discord-message-content">
				<AuthorInfo author="User" bot={true} roleColor="#0099ff" />
				<div className="discord-message-body">
					{children}
				</div>
			</div>
		</div>
	)
}

export default DiscordMessage
