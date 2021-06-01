<template>
	<a
		v-if="type === 'link' && url && !disabled"
		class="discord-button discord-button-link"
		:href="url"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img v-if="image" class="discord-button-emoji" :src="image" alt="" />
		<slot></slot>
		<outbound-link-icon />
	</a>
	<button
		v-else
		class="discord-button"
		:class="[`discord-button-${type}`, disabled ? 'discord-button-disabled' : '']"
		:disabled="disabled"
	>
		<img v-if="image" class="discord-button-emoji" :src="image" alt="" />
		<slot></slot>
		<outbound-link-icon v-if="type ==='link'" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OutboundLinkIcon from './OutboundLinkIcon.vue'

export default defineComponent({
	name: 'DiscordButton',
	components: {
		OutboundLinkIcon,
	},
	props: {
		disabled: Boolean,
		image: String,
		type: {
			type: String,
			'default': 'primary',
		},
		url: String,
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-button.css"></style>
