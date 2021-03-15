<template>
	<span class="discord-mention">
		{{ mentionCharacter }}<slot>{{ defaultContent }}</slot>
	</span>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
	name: 'DiscordMention',
	props: {
		type: {
			type: String,
			'default': 'user',
		},
	},
	setup(props) {
		const { type } = toRefs(props)

		const defaultContent = computed(() => {
			return type.value === 'channel'
				? type.value
				: type.value.charAt(0).toUpperCase() + type.value.slice(1)
		})

		const mentionCharacter = computed(() => type.value === 'channel' ? '#' : '@')

		return {
			defaultContent,
			mentionCharacter,
		}
	},
})
</script>

<style>
.discord-message .discord-mention {
	color: #7289da;
	background-color: rgba(114, 137, 218, 0.1);
	font-weight: 500;
	padding: 0 1px;
}

.discord-message .discord-mention:hover {
	color: #fff;
	background-color: rgba(114, 137, 218, 0.7);
}
</style>
