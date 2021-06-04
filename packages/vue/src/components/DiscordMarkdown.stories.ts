import { Meta, Story } from '@storybook/vue3'
import DiscordMarkdown from './DiscordMarkdown.vue'
import DiscordMessage from './DiscordMessage.vue'
import DiscordMessages from './DiscordMessages.vue'

export default {
	title: 'DiscordMarkdown',
	component: DiscordMarkdown,
	argTypes: {
		defaultSlot: {
			control: 'text',
			defaultValue: '**Here\'s** _some_ __markdown__ ~~for~~ ||you||.',
		},
	},
} as Meta

const Template: Story = args => ({
	components: {
		DiscordMarkdown,
		DiscordMessage,
		DiscordMessages,
	},
	setup() {
		return {
			args,
		}
	},
	template: `
		<discord-messages>
			<discord-message>
				Hello World. <discord-markdown>{{ args.defaultSlot }}</discord-markdown>
			</discord-message>
		</discord-messages>
	`,
})

export const Default = Template.bind({})

export const UsingAllMarkdown = Template.bind({})
UsingAllMarkdown.args = {
	defaultSlot: [
		'**Here\'s** _some_ __markdown__ ~~for~~ ||you||.',
		'Autolink: https://google.com',
		'Codeblock (js): ```js\nconsole.log(true);```',
		'Inline code: `assert(true)`',
		'Spoiler: ||spoiler content||',
		'> Blockquote\n> With multi-line content',
	].join('\n'),
}
