<script>
	import SeoHead from '../components/SeoHead.svelte'
	import Header from '../components/Header.svelte'
	import Quiz from '../components/Quiz.svelte'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	export let title = ''
	export let questions = ''
	let nextArticleUrl = ''
	const paths = $page.url.pathname.slice(1).split('/')
	onMount(async () => {
		try {
			const response = await fetch(
				`${$page.url.origin}/apis/next-article/${paths[0]}/${paths[2]}`
			).then((res) => res.json())
			if (!response?.name) {
				nextArticleUrl = null
			} else {
				nextArticleUrl = `/${response?.language}/${response?.section}/${response?.name}`
			}
		} catch (error) {}
	})
</script>

<SeoHead {title} />
<div class="container">
	<Header />
	<article class="blog">
		<div class="edit-on-github flex justify-end w-full">
			<a
				href={`https://github.com/jobayer977/js.jobayer.dev/blob/main/src/routes/${$page.url.pathname}/index.md`}
				target="_blank"
				class="flex items-center text-sm underline"
			>
				Edit on GitHub <img src="/github.svg" class="ml-2 h-5" alt="" />
			</a>
		</div>
		<div class="markdown-body markdown-body--dark">
			<slot />
		</div>
	</article>
	{#if questions.length}
		<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
			<div class=" col-span-1">
				<div class="text-left">
					<h2 class="text-[2rem] font-medium mb-10">Exercises and Quizzes</h2>
				</div>
				<Quiz {questions} />
			</div>
		</div>
	{/if}
</div>
<div class="actions">
	<a
		href={nextArticleUrl}
		disabled={!nextArticleUrl}
		class:hidden={!nextArticleUrl}
		class="btn submit"
	>
		Next Article</a
	>
</div>

<style lang="postcss">
	.actions {
		@apply flex justify-center my-16;
	}
	.actions .btn {
		@apply bg-primary text-white font-medium px-16 py-4 rounded-md mr-3;
	}

	::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge add Firefox */
	.scrollbar-hidden {
		-ms-overflow-style: none;
		scrollbar-width: none; /* Firefox */
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
