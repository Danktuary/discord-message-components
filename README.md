# Discord Message Components

Components to easily build and display fake Discord messages on your webpages. Currently available for [Vue 3](https://github.com/Danktuary/discord-message-components/tree/main/packages/vue) and [React](https://github.com/Danktuary/discord-message-components/tree/main/packages/react). Vue 2 and Web Components support coming soon.

## Features

- Design modeled after [Discord](https://discordapp.com/) itself
- Cozy and compact modes
- Dark and light themes
- Components for buttons, embeds, markdown, mentions, reactions, replies, and slash commands
- Simple syntax!

## Storybook

Publishing soon!

## Docs

Coming soon!

## Installation and usage

![@discord-message-components preview](https://i.imgur.com/ZxsfkHb.png)

### Vue

Refer to [`@discord-message-components/vue`'s README](https://github.com/Danktuary/discord-message-components/packages/vue#readme) for full notes and examples.

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
app.use(DiscordMessageComponents, { /*...*/ })

app.mount('#app')
```

```html
<template>
	<DiscordMessages>
		<DiscordMessage>
			Hello, World!
		</DiscordMessage>
	</DiscordMessages>
</template>

<script setup>
import { DiscordMessage, DiscordMessages } from '@discord-message-components/vue'
</script>
```

### React

Refer to [`@discord-message-components/react`'s README](https://github.com/Danktuary/discord-message-components/packages/react#readme) for full notes and examples.

```sh
yarn add @discord-message-components/react
# or npm install @discord-message-components/react
```

```js
import React from 'react'
import { DiscordMessage, DiscordMessages } from '@discord-message-components/react'
import '@discord-message-components/react/styles'

export default function App() {
	return (
		<DiscordMessages>
			<DiscordMessage>
				Hello, World!
			</DiscordMessage>
		</DiscordMessages>
	)
}
```

## General notes

There are a few clear differences between these packages and actual Discord. These packages aren't meant to be a pixel-perfect mock of Discord. Some of these differences would be:

- These packages use the [Roboto](https://fonts.google.com/specimen/Roboto) font, which is not Discord's default font. You can override this with `.discord-messages { font-family: ... }` in your CSS.
- Certain icons (such as the ephemeral message icon, verified bot tag icon, etc.) are not included. This may change in the future, but will use free SVG icons as opposed to ones identical to Discord's.

These packages were made to help developers improve their websites (such as guides, bot dashboards, etc.) by replacing images with code. I do not own any assets used in these packages and do not intend to infringe on any of Discord's copyright. Please contact me if there are any issues in this regard.
