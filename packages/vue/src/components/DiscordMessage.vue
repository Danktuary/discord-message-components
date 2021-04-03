<template>
	<div :class="{ 'discord-mention-highlight': highlightMessage }" class="discord-message">
		<div class="discord-author-avatar">
			<img src="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png" alt="" />
		</div>
		<div class="discord-message-content">
			<div v-if="!compactMode">
				<author-info :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
				<span class="discord-message-timestamp">
					{{ messageTimestamp }}
				</span>
			</div>
			<div class="discord-message-body">
				<template v-if="compactMode">
					<span class="discord-message-timestamp">
						{{ messageTimestamp }}
					</span>
					<author-info :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
				</template>
				<slot></slot>
				<span v-if="edited" class="discord-message-edited">(edited)</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, reactive, toRefs } from 'vue'
import { util } from '@discord-message-components/core'
import AuthorInfo from './AuthorInfo.vue'

export default defineComponent({
	name: 'DiscordMessage',
	components: {
		AuthorInfo,
	},
	props: {
		author: {
			type: String,
			'default': 'User',
		},
		bot: Boolean,
		edited: Boolean,
		roleColor: String,
		timestamp: {
			type: [Date, String],
			'default': util.defaultTimestamp,
		},
	},
	setup(props, { slots }) {
		const { author, bot, roleColor, timestamp } = toRefs(props)
		const compactMode = inject('compactMode')

		const highlightMessage = computed(() => {
			return slots.default?.().some(slot => slot?.props?.highlight && slot?.props?.type !== 'channel')
		})

		const messageTimestamp = computed(() => util.parseTimestamp(timestamp.value))

		const user = reactive({ author, bot, roleColor })

		return {
			compactMode,
			highlightMessage,
			messageTimestamp,
			user,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-message.css"></style>
