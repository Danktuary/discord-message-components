<template>
	<span class="discord-author-info">
		<span :style="{ color: roleColor }" class="discord-author-username">
			{{ author }}
		</span>
		<span v-if="bot" class="discord-author-bot-tag">
			Bot
		</span>
	</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AuthorInfo',
	props: {
		author: String,
		bot: Boolean,
		roleColor: String,
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-author-info.css"></style>
