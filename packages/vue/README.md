# @discord-message-components/vue

## Installation and usage

![@discord-message-components/vue preview](https://i.imgur.com/ZxsfkHb.png)

```sh
yarn add @discord-message-components/vue
# or npm install @discord-message-components/vue
```

```js
import { createApp } from 'vue'
import { install as DiscordMessageComponents } from '@discord-message-components/vue'
import App from './App.vue'
import '@discord-message-components/vue/styles'

const app = createApp(App)

// Only necessary if you want to provide plugin options
app.use(DiscordMessageComponents, {
	profiles: {
		sanc: {
			author: 'Sanc',
			avatar: 'https://i.imgur.com/0TeacfY.png',
			roleColor: '#0099ff',
		},
	},
})

app.mount('#app')
```

```html
<template>
	<DiscordMessages>
		<DiscordMessage profile="sanc">
			Hey, <DiscordMention :highlight="true" /> and <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
			<template #reactions>
				<DiscordReactions>
					<DiscordReaction name="blobreach" image="https://i.imgur.com/DUAI5Pu.png" :count="2" :active="true" />
				</DiscordReactions>
			</template>
		</DiscordMessage>
		<DiscordMessage author="Dawn" avatar="red">
			Thank you <DiscordMention profile="sanc" />!
		</DiscordMessage>
		<DiscordMessage>
			Thanks! How's it going?
		</DiscordMessage>
		<DiscordMessage :bot="true" author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet">
			<template #interactions>
				<DiscordInteraction profile="sanc" :command="true">8ball</DiscordInteraction>
			</template>
			<DiscordMarkdown>
				**Question**: How am I doing today?
				{{ '\n' }}
				**Answer**: Yes.
			</DiscordMarkdown>
		</DiscordMessage>
	</DiscordMessages>
</template>

<script setup>
import {
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
} from '@discord-message-components/vue'
</script>
```

### Usage inside Markdown files

If you're using a static site generator like [VuePress](https://vuepress.vuejs.org/) and want to use these components inside your Markdown files, you should use it as such:

```html
<div is="discord-messages">
	<discord-message>
		...
	</discord-message>
</div>
```

This is the recommended approach due to how VuePress renders Markdown and HTML inside Markdown files. It doesn't recognize `<discord-messages>` as an HTML element, therefore rendering anything indented inside it as a regular codeblock.

### Upgrading from vue-discord-message

The components have been kept mostly the same, with many improvements and some breaking changes. `@discord-message-components/vue` doesn't support Vue 2 (yet), so be sure you're using Vue 3 with this package. [vue-discord-message](https://github.com/danktuary/vue-discord-message) supports Vue 2 but is outdated.

**New**:
- Components: `DiscordButton(s)`, `DiscordInteraction`, `DiscordMarkdown`, and `DiscordReaction(s)`
- Slots inside the `DiscordMessage` component: `actions` for buttons, `interactions` for replies and slash commands, `reactions` for reactions

**Breaking**:
- Components are no longer globally registered. It's recommended to import them where necessary, or you may globally register them yourself
- The `componentNames` and `disableFont` plugin options have been removed
- The `EmbedField(s)` components have been renamed to `DiscordEmbedField(s)`
- The `Mention` component has been renamed to `DiscordMention`
- These component props have been renamed:
	- `DiscordEmbed#authorImage` -> `DiscordEmbed#authorIcon`
	- `DiscordEmbed#color` -> `DiscordEmbed#borderColor`
	- `DiscordEmbed#footerImage` -> `DiscordEmbed#footerIcon`
	- `DiscordEmbed#title` -> `DiscordEmbed#embedTitle`
	- `EmbedField#title` -> `DiscordEmbedField#fieldTitle`
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
