<script lang="ts">
	import { parseString } from '../../utils'
	import Card from '../../components/Card.svelte'
	import Header from '../../components/Header.svelte'
	import SeoHead from '../../components/SeoHead.svelte'
	export let payload: any[] = []
	export let total: number = 0
</script>

<SeoHead />
<div class="container " style="min-height: 75vh">
	<Header totalTopics={total} />
	{#if payload}
		{#each Object.entries(payload) || [] as content, index}
			<div class="section">
				<h4>{parseString(content[0])}</h4>
				<div class="grid  grid-cols-1 lg:gap-5 gap-4">
					{#each content[1] as card, index}
						<Card {card} {index} />
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="postcss">
	.section {
		@apply py-2;
		h4 {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 600;
			font-size: 22px;
			line-height: 42px;
			margin-top: 10px;
			@apply mb-3 uppercase;
			@apply text-white;
		}
	}
</style>
