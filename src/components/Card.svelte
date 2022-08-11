<script lang="ts">
	import { browser } from '$app/env'
	import { topicsTrack } from '../store/topics.store'
	import { onDestroy, onMount } from 'svelte'
	export let card: any = {}
	export let index = 0
	let isDone = false
	let topicSubscription: any
	onMount(() => {
		topicsTrack.get().subscribe((data) => {
			if (Array.isArray(data) && data.includes(card?.name)) {
				isDone = true
			}
		})
	})
	onDestroy(() => {
		if (!browser) return
		topicSubscription?.unsubscribe()
	})
</script>

<a
	href={`/${card?.language}/${card?.section}/${card?.name}`}
	class="card "
	class:done={isDone}
>
	<div class="status">
		<img src="./check.svg" alt="" />
	</div>
	<h5>{index + 1 + '  '}. {card?.meta?.title}</h5>
</a>

<style lang="postcss">
	.card {
		@apply bg-darkGray shadow-md;
		border-radius: 0.5rem;
		padding: 15px;
		border-width: 3px;
		@apply border-solid relative border-white border-opacity-10 transition-all lg:hover:scale-105;
		.status {
			@apply absolute right-3 top-3 h-5;
			img {
				@apply h-full w-full;
				filter: grayscale(100%);
			}
		}
		h5 {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 500;
			font-size: 1rem;
			line-height: 26px;
			text-decoration: none;
			cursor: pointer;
			padding-right: 20px;
		}
		p {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 24px;
			color: ffffffc7;
			margin: 10px 0px !important;
		}
		&.done {
			@apply border-primary bg-secondary  border-opacity-50;
			.status {
				img {
					@apply opacity-90 fill-red-600;
					filter: grayscale(0%);
				}
				svg {
					@apply hidden;
				}
			}
		}
	}
</style>
