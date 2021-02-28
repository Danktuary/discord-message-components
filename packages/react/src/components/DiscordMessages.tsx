import React, { Children, cloneElement, ReactNode } from 'react'
import PropTypes, { InferProps, ReactElementLike } from 'prop-types'
import './DiscordMessages.css'

function DiscordMessages({ children, compactMode, lightTheme }: InferProps<typeof DiscordMessages.propTypes>): ReactNode {
	let classes = 'discord-messages'
	if (lightTheme) classes += ' discord-light-theme'
	if (compactMode) classes += ' discord-compact-mode'

	const messages = Children.map(children, (child, index) => {
		return cloneElement(child as ReactElementLike, { key: index })
	})

	return (
		<div className={classes}>
			{messages}
		</div>
	)
}

DiscordMessages.propTypes = {
	children: PropTypes.node,
	compactMode: PropTypes.bool,
	lightTheme: PropTypes.bool,
}

export default DiscordMessages
