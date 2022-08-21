<script lang="ts">
	export let item: any;
	export let index: any;
	import hljs from 'highlight.js';
	import md from 'markdown-it';
	import { topicsTrack } from '../store/topics.store';
	import { onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { browser } from '$app/env';
	let isCollapsed = true;
	const markdonw = md({
		langPrefix: 'language-',
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}
			return '';
		},
		html: true
	});
	let topicSubscription: any;
	let isDone = false;
	onMount(() => {
		topicsTrack.get().subscribe((data) => {
			if (data?.includes(item?.title)) {
				isDone = true;
			} else {
				isDone = false;
			}
		});
	});
	onDestroy(() => {
		if (!browser) return;
		topicSubscription?.unsubscribe();
	});
	const onDone = () => {
		topicsTrack.update((pv: any) => {
			if (!pv) return [item?.title];
			if (pv.includes(item?.title)) {
				return pv.filter((v: any) => v !== item?.title);
			} else {
				return [...pv, item?.title];
			}
		});
	};
</script>

<div class="card " class:done={isDone} on:click={() => (isCollapsed = !isCollapsed)}>
	<div class="status" on:click|stopPropagation={onDone}>
		<img src="./check.svg" alt="" />
	</div>
	<h5>{index + 1 + '  '}. {item?.title}</h5>
</div>
{#if isCollapsed === false}
	<div class="body" transition:slide>
		<article>
			<div class="markdown-body px-5 pt-2 pb-10 lg:pl-10">
				{@html markdonw.render(item?.content)}
			</div>
			<div class="edit-on-github flex justify-end w-full">
				{#if item?.source}
					<a href={item?.source} target="_blank" class="flex items-center text-gray-500 text-sm">
						<u>Source</u>
					</a>
				{/if}
			</div>
		</article>
	</div>
{/if}

<style lang="postcss">
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 48px;
		cursor: pointer;
		@apply relative lg:p-[15px] p-4;
		@apply hover:bg-gray-100 hover:text-gray-900;
		padding-right: 30px;
		.status {
			@apply absolute right-5 top-1/2 -translate-y-1/2 h-5;
			img {
				@apply h-full w-full opacity-10;
				filter: grayscale(100%);
			}
		}
		h5 {
			align-items: center;
			font-weight: 600;
			/* font-size: 16px; */
			@apply text-typographyPrimary text-sm  lg:text-base;
			line-height: 22px;
		}
		p {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 24px;
			@apply text-typographyPrimary;
			margin: 10px 0px !important;
		}
		&.done {
			.status {
				img {
					@apply opacity-90;
					filter: grayscale(0%);
				}
			}
		}
	}
	.ref {
		font-size: 14px;
		@apply text-typographySecondary;
	}
</style>
