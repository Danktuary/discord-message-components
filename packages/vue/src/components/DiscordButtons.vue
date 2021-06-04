<template>
	<div class="discord-buttons">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordButtons',
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-buttons.css"></style>
