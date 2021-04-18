<template>
	<div class="discord-messages" :class="{ 'discord-compact-mode': layout.compact, 'discord-light-theme': layout.light }">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide, toRefs } from 'vue'

export default defineComponent({
	name: 'DiscordMessages',
	props: {
		compactMode: {
			type: Boolean,
			'default': null,
		},
		lightTheme: {
			type: Boolean,
			'default': null,
		},
	},
	setup(props) {
		const { compactMode, lightTheme } = toRefs(props)
		const { $discordOptions: options } = getCurrentInstance()?.appContext.config.globalProperties

		const layout = {
			compact: compactMode?.value === true || (options.defaultMode === 'compact' && compactMode?.value !== false),
			light: lightTheme?.value === true || (options.defaultTheme === 'light' && lightTheme?.value !== false),
		}

		provide('compactMode', layout.compact)

		return {
			layout,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-messages.css"></style>
