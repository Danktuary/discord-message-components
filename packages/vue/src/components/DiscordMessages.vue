<template>
	<div class="discord-messages" :class="{ 'discord-compact-mode': compactMode, 'discord-light-theme': lightTheme }">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordMessages',
	props: {
		compactMode: Boolean,
		lightTheme: Boolean,
	},
})
</script>

<style>
.discord-messages {
	color: #fff;
	background-color: #36393e;
	font-size: 16px;
	font-family: sans-serif;
	line-height: 170%;
	border: 1px solid rgba(255, 255, 255, 0.05);
}

.discord-messages.discord-light-theme {
	color: #747f8d;
	background-color: #f7f7f7;
	border-color: #dedede;
}
</style>
