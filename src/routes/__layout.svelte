<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;
		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import '../styles/markdown-dark.css';
	export let currentRoute;
	let showScrollTop = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				showScrollTop = true;
			} else {
				showScrollTop = false;
			}
		});
	});
	// scroll to top
	const scrollToTop = () => {
		if (browser) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	};
</script>

{#key currentRoute}
	<main in:fade={{ duration: 500, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}
<Footer />
{#if showScrollTop}
	<div class="fixed right-3 bottom-5 z-10">
		<div
			on:click={scrollToTop}
			class="bg-primary inline-block  cursor-pointer text-white font-semibold py-1 px-1  rounded-lg transition-all"
			in:fade={{ duration: 500, delay: 100 }}
			out:fade={{ duration: 100 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /><path
					d="M0 0h24v24H0z"
					fill="none"
				/></svg
			>
		</div>
	</div>
{/if}
