<template>
	<div class="discord-interaction">
		<img class="discord-interaction-author-avatar" :src="user.avatar" alt="" />
		<author-info
			class="discord-interaction-author-info"
			:author="highlight ? `@${user.author}` : user.author"
			:bot="user.bot"
			:role-color="user.roleColor"
		/>
		<span v-if="command" class="discord-interaction-command">
			used
			<span class="discord-interaction-command-name">
				/<slot></slot>
			</span>
		</span>
		<span v-else class="discord-interaction-reply">
			<slot></slot>
			<span v-if="edited" class="discord-interaction-reply-edited">(edited)</span>
		</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, toRefs } from 'vue'
import { util } from '@discord-message-components/core'
import { Profile } from '../index'
import AuthorInfo from './AuthorInfo.vue'

export default defineComponent({
	components: {
		AuthorInfo,
	},
	props: {
		author: String,
		avatar: String,
		bot: Boolean,
		command: Boolean,
		edited: Boolean,
		ephemeral: Boolean,
		highlight: Boolean,
		profile: String,
		roleColor: String,
	},
	setup(props) {
		const { $discordOptions: options } = getCurrentInstance()?.appContext.config.globalProperties
		const { author, avatar, bot, profile: profileKey, roleColor } = toRefs(props)

		const profile: Profile = options.profiles?.[profileKey?.value] ?? {}
		const user: Profile = {
			author: !author?.value && profile?.author ? profile.author : author?.value || 'User',
			avatar: util.resolveImage(options.avatars, avatar?.value || profile?.avatar),
			bot: bot.value ?? profile?.bot,
			roleColor: roleColor?.value || profile?.roleColor,
		}

		return {
			user,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-interaction.css"></style>
