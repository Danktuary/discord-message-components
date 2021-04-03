<template>
	<span ref="root" :style="colorStyle" class="discord-mention">
		{{ mentionCharacter }}<slot>{{ defaultContent }}</slot>
	</span>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, toRefs } from 'vue'
import { util } from '@discord-message-components/core'

export default defineComponent({
	name: 'DiscordMention',
	props: {
		color: String,
		highlight: Boolean,
		type: {
			type: String,
			'default': 'user',
		},
	},
	setup(props) {
		const { color, type } = toRefs(props)
		const root = ref<HTMLSpanElement>()
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
			return type.value === 'channel'
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
