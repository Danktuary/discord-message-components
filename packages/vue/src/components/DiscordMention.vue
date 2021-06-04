<template>
	<span ref="root" class="discord-mention" :style="colorStyle">
		{{ mentionCharacter }}<slot>{{ defaultContent }}</slot>
	</span>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, toRefs } from 'vue'
import { util } from '@discord-message-components/core'
import { resolveOptions } from '../options'

export default defineComponent({
	name: 'DiscordMention',
	props: {
		highlight: Boolean,
		profile: String,
		roleColor: String,
		type: {
			type: String,
			'default': 'user',
		},
	},
	setup(props) {
		const options = resolveOptions()
		const root = ref<HTMLSpanElement>()
		const { profile: profileKey, roleColor, type } = toRefs(props)
		const profile = ref(!profileKey?.value ? {} : options.profiles?.[profileKey?.value] ?? {})
		const color = ref(roleColor?.value ?? profile?.value?.roleColor)

		const hovering = ref(false)
		const setHoverColor = () => hovering.value = true
		const resetHoverColor = () => hovering.value = false

		const colors = {
			background: util.parseColorToRgba(color?.value, 0.1),
			hover: util.parseColorToRgba(color?.value, 0.3),
		}

		const colorStyle = computed(() => {
			return color?.value && type.value === 'role'
				? {
					color: color.value,
					'background-color': hovering.value ? colors.hover : colors.background,
				}
				: {}
		})

		onMounted(() => {
			if (color?.value && type?.value === 'role') {
				root?.value?.addEventListener('mouseenter', setHoverColor)
				root?.value?.addEventListener('mouseout', resetHoverColor)
			}
		})

		onBeforeUnmount(() => {
			root?.value?.removeEventListener('mouseenter', setHoverColor)
			root?.value?.removeEventListener('mouseout', resetHoverColor)
		})

		const defaultContent = computed(() => {
			return type.value === 'user' && profile?.value?.author
				? profile?.value.author
				: type.value === 'channel'
					? type.value
					: type.value.charAt(0).toUpperCase() + type.value.slice(1)
		})

		const mentionCharacter = computed(() => type.value === 'channel' ? '#' : '@')

		return {
			root,
			colorStyle,
			defaultContent,
			mentionCharacter,
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-mention.css"></style>
