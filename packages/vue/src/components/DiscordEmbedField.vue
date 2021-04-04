<template>
	<div :class="{ 'discord-embed-field-inline': inline }" class="discord-embed-field">
		<div class="discord-embed-field-title">
			{{ title }}
		</div>
		<slot></slot>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordEmbedField',
	props: {
		title: {
			type: String,
			required: true,
		},
		inline: Boolean,
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-embed-field.css"></style>
