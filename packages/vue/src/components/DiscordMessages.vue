<template>
	<div class="discord-messages" :class="{ 'discord-compact-mode': compactMode, 'discord-light-theme': lightTheme }">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
	name: 'DiscordMessages',
	props: {
		compactMode: Boolean,
		lightTheme: Boolean,
	},
	setup(props) {
		provide('compactMode', props.compactMode)
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-messages.css"></style>
