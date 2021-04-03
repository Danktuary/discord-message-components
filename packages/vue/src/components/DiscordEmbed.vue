<template>
	<div class="discord-embed">
		<div class="discord-embed-left-border"></div>
		<div class="discord-embed-container">
			<div class="discord-embed-content">
				<div>
					<div v-if="author.name" class="discord-embed-author">
						<img v-if="author.icon" :src="author.icon" alt="" class="discord-embed-author-icon" />
						<a v-if="author.url" :href="author.url" target="_blank" rel="noopener noreferrer">
							{{ author.name }}
						</a>
						<span v-else>
							{{ author.name }}
						</span>
					</div>
					<div class="discord-embed-description">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
	name: 'DiscordEmbed',
	props: {
		authorIcon: String,
		authorName: String,
		authorUrl: String,
	},
	setup(props) {
		const { authorIcon, authorName, authorUrl } = toRefs(props)

		const author = computed(() => ({
			icon: authorIcon?.value,
			name: authorName?.value,
			url: authorUrl?.value,
		}))

		return {
			author,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-embed.css"></style>
