<template>
	<div class="discord-embed">
		<div :style="{ 'background-color': borderColor }" class="discord-embed-left-border"></div>
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
					<div v-if="embedTitle" class="discord-embed-title">
						<a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
							{{ embedTitle }}
						</a>
						<span v-else>
							{{ embedTitle }}
						</span>
					</div>
					<div class="discord-embed-description">
						<slot></slot>
					</div>
					<slot name="fields"></slot>
					<img v-if="image" :src="image" alt="" class="discord-embed-image" />
				</div>
				<img v-if="thumbnail" :src="thumbnail" alt="" class="discord-embed-thumbnail" />
			</div>
			<div v-if="showFooter" class="discord-embed-footer">
				<img v-if="showFooterIcon" :src="footerIcon" alt="" class="discord-embed-footer-icon" />
				<span>
					<slot name="footer"></slot>
					<span v-if="showFooterSeparator" class="discord-embed-footer-separator">
						&bull;
					</span>
					<span v-if="embedTimestamp">
						{{ embedTimestamp }}
					</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue'
import { util } from '@discord-message-components/core'

export default defineComponent({
	name: 'DiscordEmbed',
	props: {
		authorIcon: String,
		authorName: String,
		authorUrl: String,
		borderColor: String,
		embedTitle: String,
		footerIcon: String,
		image: String,
		thumbnail: String,
		timestamp: [Date, String],
		url: String,
	},
	setup(props, { slots }) {
		const { authorIcon, authorName, authorUrl, footerIcon, timestamp } = toRefs(props)

		const author = computed(() => ({
			icon: authorIcon?.value,
			name: authorName?.value,
			url: authorUrl?.value,
		}))

		const embedTimestamp = computed(() => timestamp?.value ? util.parseTimestamp({ timestamp: timestamp.value }) : null)
		const showFooter = computed(() => slots.footer || embedTimestamp.value)
		const showFooterIcon = computed(() => slots.footer && footerIcon?.value)
		const showFooterSeparator = computed(() => slots.footer && embedTimestamp.value)

		return {
			author,
			embedTimestamp,
			showFooter,
			showFooterIcon,
			showFooterSeparator,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-embed.css"></style>
