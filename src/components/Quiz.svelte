<script lang="ts">
	import { page } from '$app/stores'
	import { topicsTrack } from '../store/topics.store'
	import type { IQuestion } from '../models/interfaces'
	import { getAlphabets } from '../utils/index'
	import { onDestroy, onMount } from 'svelte'
	import { browser } from '$app/env'
	const name: any = $page.url.pathname.slice(1).split('/')[2]
	export let questions: IQuestion[] = []
	let selectedAnswer: string = ''
	$: currentQuestionIndex = 0
	$: currentQuestion = questions[currentQuestionIndex]
	const onSubmit = () => {
		if (currentQuestionIndex <= questions.length - 1) {
			currentQuestion.isCorrect =
				currentQuestion.correctAnswer === selectedAnswer
			questions[currentQuestionIndex] = currentQuestion
			currentQuestionIndex = currentQuestionIndex + 1
		}
		if (
			currentQuestionIndex === questions.length &&
			currentQuestion?.isCorrect
		) {
			topicsTrack.update((pv: any) => {
				if (!pv) return [name]
				if (pv.includes(name)) return pv
				return [...pv, name]
			})
		}
		selectedAnswer = ''
	}
	const onReset = () => {
		currentQuestionIndex = 0
		questions = questions.map((question) => {
			question.isCorrect = false
			return question
		})
		isDone = false
		topicsTrack.update((pv: any) => {
			return pv?.filter((t: any) => t !== name)
		})
	}
	let isDone: boolean = false
	let topicSubscription: any
	onMount(() => {
		topicsTrack.get().subscribe((data) => {
			if (data?.includes(name)) {
				isDone = true
			}
		})
	})
	onDestroy(() => {
		if (!browser) return
		topicSubscription?.unsubscribe()
	})
</script>

{#if questions.length}
	<div class="quiz ">
		{#if !isDone && currentQuestionIndex <= questions.length - 1}
			<p class="text-lg font-medium pb-2">
				{currentQuestionIndex + 1}/{questions?.length}
			</p>
			<h2>{currentQuestion?.question}</h2>
			<div class="options">
				{#each currentQuestion?.answer || [] as answer, index}
					<div
						class="option"
						class:selected={answer === selectedAnswer}
						on:click={() => {
							selectedAnswer = answer
						}}
					>
						<span>{getAlphabets(index)}</span>
						<h4>{answer}</h4>
					</div>
				{/each}
			</div>
			<div class="actions">
				<button class="btn submit" on:click={onSubmit}>Next</button>
			</div>
		{:else}
			<div class="result">
				<h2>Result</h2>
				{#each questions as question, index}
					<div class="card mb-4">
						<h4 class="text-base font-medium">
							{index + 1}. {question?.question}
						</h4>
						<p
							class="ml-3 text-sm"
							class:text-red-600={!question?.isCorrect}
							class:text-green-600={question?.isCorrect}
						>
							Ans: {question.correctAnswer}
						</p>
					</div>
				{/each}
				<div class="actions">
					<button class="btn reset" on:click={onReset}>Reset</button>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.quiz {
		@apply p-5 rounded-md;
		@apply bg-darkGray;
		h2 {
			@apply text-xl font-semibold mb-7 text-left;
		}
		.option {
			border-width: 1.5px;
			@apply border-solid  border-white border-opacity-50 rounded-md p-3 mb-3 cursor-pointer flex items-center  transition-all hover:scale-105 relative;
			h4 {
				@apply text-white font-medium;
			}
			span {
				@apply bg-primary py-1 px-2 inline-block text-center rounded-sm mr-3 font-semibold text-sm;
			}
			.icon {
				top: 50%;
				transform: translateY(-50%);
				@apply absolute right-2 h-8;
			}
			&.selected {
				@apply border-primary bg-primary;
				span {
					@apply bg-primary text-white;
				}
			}
		}
		.actions {
			@apply flex justify-end mt-5;
			.btn {
				@apply bg-primary text-white font-medium px-5 py-2 rounded-md mr-3;
				&.reset {
					@apply bg-darkGray;
					@apply border-primary border-2;
				}
			}
		}
	}
</style>
