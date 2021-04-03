<template>
	<div class="discord-embed">
		<div class="discord-embed-left-border"></div>
		<div class="discord-embed-container">
			<div class="discord-embed-content">
				<div>
					<div class="discord-embed-description">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DiscordEmbed',
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-embed.css"></style>
