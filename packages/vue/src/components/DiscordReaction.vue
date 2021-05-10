<template>
	<div class="discord-reaction" :class="{ 'discord-reaction-active': active }" :title="name">
		<img class="discord-reaction-emoji" :src="image" :alt="name" />
		<span class="discord-reaction-count">{{ count }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordReaction',
	props: {
		active: Boolean,
		count: {
			type: Number,
			'default': 1,
		},
		image: {
			type: String,
			required: true,
		},
		name: String,
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-reaction.css"></style>
