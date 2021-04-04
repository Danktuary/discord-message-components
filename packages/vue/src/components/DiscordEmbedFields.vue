<template>
	<div class="discord-embed-fields">
		<slot></slot>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordEmbedFields',
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-embed-fields.css"></style>
