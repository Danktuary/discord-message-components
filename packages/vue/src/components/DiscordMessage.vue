<template>
	<div :class="{ 'discord-mention-highlight': highlightMessage }" class="discord-message">
		<div class="discord-author-avatar">
			<img src="https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png" alt="" />
		</div>
		<div class="discord-message-content">
			<div v-if="!compactMode">
				<author-info author="User" :bot="true" role-color="#0099ff" />
			</div>
			<div class="discord-message-body">
				<template v-if="compactMode">
					<author-info author="User" :bot="true" role-color="#0099ff" />
				</template>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import AuthorInfo from './AuthorInfo.vue'

export default defineComponent({
	name: 'DiscordMessage',
	components: {
		AuthorInfo,
	},
	setup(props, { slots }) {
		const compactMode = inject('compactMode')

		const highlightMessage = computed(() => {
			return slots.default?.().some(slot => slot?.props?.highlight && slot?.props?.type !== 'channel')
		})

		return {
			compactMode,
			highlightMessage,
		}
	},
})
</script>

<style>
.discord-message {
	color: #dcddde;
	display: flex;
	font-size: 0.9em;
	margin: 1em 0;
	padding: 0.25em 1em 0;
}

.discord-message:hover {
	background-color: #32353b;
}

.discord-light-theme .discord-message {
	color: #2e3338;
}

.discord-light-theme .discord-message:hover {
	background-color: #fafafa;
}

.discord-message a {
	color: #0096cf;
	font-weight: normal;
	text-decoration: none;
}

.discord-message a:hover {
	text-decoration: underline;
}

.discord-light-theme .discord-message a {
	color: #00b0f4;
}

.discord-message .discord-author-avatar {
	margin-top: 1px;
	margin-right: 16px;
	min-width: 40px;
}

.discord-message .discord-author-avatar img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.discord-message .discord-message-content {
	width: 100%;
	line-height: 160%;
	font-weight: normal;
	overflow-wrap: anywhere;
}

.discord-message .discord-message-body {
	position: relative;
}

.discord-compact-mode .discord-message {
	margin: 0.15em 0;
	padding-left: 0.25em;
	padding-right: 0.25em;
}

.discord-compact-mode .discord-author-avatar {
	display: none;
}

.discord-compact-mode .discord-message-body {
	margin-left: 0.25em;
}

.discord-message.discord-mention-highlight {
	background-color: rgba(250, 166, 26, 0.05);
	position: relative;
}

.discord-message.discord-mention-highlight::before {
	content: '';
	background-color: #faa61a;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 2px;
}

.discord-message.discord-mention-highlight:hover {
	background-color: rgba(250, 166, 26, 0.1);
}
</style>
