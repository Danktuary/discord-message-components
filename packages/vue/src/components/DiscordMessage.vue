<template>
	<div
		class="discord-message"
		:class="{
			'discord-ephemeral-highlight': ephemeralMessage,
			'discord-mention-highlight': highlightMessage && !ephemeralMessage,
		}"
	>
		<slot name="interactions"></slot>
		<div class="discord-message-content">
			<div class="discord-author-avatar">
				<img :src="user.avatar" alt="" />
			</div>
			<div class="discord-message-body">
				<div v-if="!compactMode">
					<author-info :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
					<span class="discord-message-timestamp">
						{{ messageTimestamp }}
					</span>
				</div>
				<template v-else>
					<span class="discord-message-timestamp">
						{{ messageTimestamp }}
					</span>
					<author-info :author="user.author" :bot="user.bot" :role-color="user.roleColor" />
				</template>
				<slot></slot>
				<span v-if="edited" class="discord-message-edited">(edited)</span>
				<slot name="embeds"></slot>
				<slot name="actions"></slot>
				<div v-if="ephemeralMessage" class="discord-message-ephemeral-notice">
					Only you can see this
				</div>
				<slot name="reactions"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, toRefs } from 'vue'
import { util } from '@discord-message-components/core'
import { Profile } from '../index'
import AuthorInfo from './AuthorInfo.vue'

export default defineComponent({
	name: 'DiscordMessage',
	components: {
		AuthorInfo,
	},
	props: {
		author: String,
		avatar: String,
		bot: Boolean,
		edited: Boolean,
		profile: String,
		roleColor: String,
		timestamp: {
			type: [Date, String],
			'default': util.defaultTimestamp,
		},
	},
	setup(props, { slots }) {
		const { $discordOptions: options } = getCurrentInstance()?.appContext.config.globalProperties
		const { author, avatar, bot, profile: profileKey, roleColor, timestamp } = toRefs(props)
		const compactMode = inject('compactMode')

		const profile: Profile = options.profiles?.[profileKey?.value] ?? {}
		const user: Profile = {
			author: !author?.value && profile?.author ? profile.author : author?.value || 'User',
			avatar: util.resolveImage(options.avatars, avatar?.value || profile?.avatar),
			bot: bot.value ?? profile?.bot,
			roleColor: roleColor?.value || profile?.roleColor,
		}

		const ephemeralMessage = computed(() => {
			return slots.interactions?.().some(slot => slot?.props?.ephemeral)
		})

		const highlightMessage = computed(() => {
			return slots.default?.().some(slot => slot?.props?.highlight && slot?.props?.type !== 'channel')
				|| slots.interactions?.().some(slot => slot?.props?.highlight)
		})

		const messageTimestamp = computed(() => {
			return util.parseTimestamp({
				timestamp: timestamp.value,
				format: compactMode ? 'compact' : 'cozy',
			})
		})

		return {
			compactMode,
			ephemeralMessage,
			highlightMessage,
			messageTimestamp,
			user,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-message.css"></style>
