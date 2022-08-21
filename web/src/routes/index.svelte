<script>
	import * as topi from '../json/topics.json';
	import InnerHeader from '../components/InnerHeader.svelte';
	import Topic from '../components/Topic.svelte';
	let topics = Object.values(topi.default).flat(Infinity) || [];
	let searchTerm = '';
	$: sortedTopics = topics?.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="container">
	<InnerHeader
		totalTopics={topics.length}
		on:search={(e) => {
			searchTerm = e.detail;
		}}
	/>
</div>
<div class="container">
	<div class="content">
		{#if sortedTopics.length > 0}
			{#each sortedTopics as item, index}
				<Topic {index} {item} />
			{/each}
		{:else}
			<div class="p-8 text-center">
				<h3>No Topics Found</h3>
			</div>
		{/if}
	</div>
</div>
