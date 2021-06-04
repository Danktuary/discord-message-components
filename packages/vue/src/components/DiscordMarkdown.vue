<script lang="ts">
import { VNode, defineComponent, h } from 'vue'
import { util } from '@discord-message-components/core'

export default defineComponent({
	name: 'DiscordMarkdown',
	setup(props, { slots }) {
		return (): VNode => {
			const parsedContent = slots.default?.().map((vNode: VNode): VNode => {
				if (typeof vNode.children !== 'string' || !vNode.children.length) return vNode
				return h('span', {
					'class': 'discord-markdown-content',
					innerHTML: util.markdownParser.toHTML(vNode.children),
				})
			})

			return h('span', { 'class': 'discord-markdown' }, {
				'default': () => parsedContent,
			})
		}
	},
})
</script>

<style src="@discord-message-components/core/dist/styles/discord-markdown.css"></style>
