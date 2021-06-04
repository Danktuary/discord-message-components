# @discord-message-components/react

## Installation and usage

![@discord-message-components/react preview](https://i.imgur.com/ZxsfkHb.png)

```sh
yarn add @discord-message-components/react
# or npm install @discord-message-components/react
```

```js
import React from 'react'
import {
	DiscordDefaultOptions,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordOptionsContext,
	DiscordReaction,
	DiscordReactions,
} from '@discord-message-components/react'
import '@discord-message-components/react/styles'

// Extend the default options in order to provide your own
const discordOptions = {
	...DiscordDefaultOptions,
	profiles: {
		sanc: {
			author: 'Sanc',
			avatar: 'https://i.imgur.com/0TeacfY.png',
			roleColor: '#0099ff',
		},
	},
}

export default function App() {
	return (
		<DiscordOptionsContext.Provider value={discordOptions}>
			<DiscordMessages>
				<DiscordMessage profile="sanc">
					Hey, <DiscordMention highlight={true} /> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
					<div slot="reactions">
						<DiscordReactions>
							<DiscordReaction name="blobreach" image="https://i.imgur.com/DUAI5Pu.png" count={2} active={true} />
						</DiscordReactions>
					</div>
				</DiscordMessage>
				<DiscordMessage author="Dawn" avatar="red">
					Thank you <DiscordMention profile="sanc" />!
				</DiscordMessage>
				<DiscordMessage>
					Thanks! How's it going?
				</DiscordMessage>
				<DiscordMessage bot={true} author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet">
					<div slot="interactions">
						<DiscordInteraction profile="sanc" command={true}>8ball</DiscordInteraction>
					</div>
					<DiscordMarkdown>
						**Question**: How am I doing today?
						{'\n'}
						**Answer**: Yes.
					</DiscordMarkdown>
				</DiscordMessage>
			</DiscordMessages>
		</DiscordOptionsContext.Provider>
	)
}
```

### Upgrading from @danktuary/react-discord-message

The components have been kept mostly the same from [`@danktuary/react-discord-message`](https://github.com/Danktuary/react-discord-message), with many improvements and some breaking changes.

**New**:
- Components: `DiscordButton(s)`, `DiscordInteraction`, `DiscordMarkdown`, and `DiscordReaction(s)`
- Slots inside the `DiscordMessage` component: `actions` for buttons, `interactions` for replies and slash commands, `reactions` for reactions

**Breaking**:
- These component props have been renamed:
	- `DiscordEmbed#authorImage` -> `DiscordEmbed#authorIcon`
	- `DiscordEmbed#color` -> `DiscordEmbed#borderColor`
	- `DiscordEmbed#footerImage` -> `DiscordEmbed#footerIcon`
	- `DiscordEmbed#title` -> `DiscordEmbed#embedTitle`
	- `Mention#color` -> `DiscordMention#roleColor`

<details>
<summary>These HTML elements/CSS selectors have been moved around:</summary>

- `.discord-author-info .discord-bot-tag` -> `.discord-author-info .discord-author-bot-tag`
- `.discord-embed .discord-left-border` -> `.discord-embed .discord-embed-left-border`
- `.discord-embed .discord-author-image` -> `.discord-embed .discord-embed-author-icon`
- `.discord-embed-footer .discord-footer-image` -> `.discord-embed-footer .discord-embed-footer-icon`
- `.discord-embed-footer .discord-footer-separator` -> `.discord-embed-footer .discord-embed-footer-separator`
- `.discord-embed-footer .discord-footer-separator` -> `.discord-embed-footer .discord-embed-footer-separator`
- `.discord-embed-field .discord-inline-field` -> `.discord-embed-field .discord-embed-field-inline`
- `.discord-embed-field .discord-field-title` -> `.discord-embed-field .discord-embed-field-title`
- `.discord-message > .discord-author-image` -> `.discord-message > .discord-message-content .discord-author-avatar`
- `.discord-compact-mode .discord-message-content > .discord-message-timestamp` -> `.discord-compact-mode .discord-message-content .discord-message-body .discord-message-timestamp`
- `.discord-message-content .discord-embed` -> `.discord-message-content .discord-message-body .discord-embed`

</details>
