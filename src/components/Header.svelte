<script>
	import { environment } from '../environment'
	export let totalTopics
</script>

<div class="hero-blk">
	<a href="/" class="hero_info_blk my-5">
		<div class="flex justify-center lg:mr-5 ">
			<img class="h-16 lg:h-24" src="/logo.svg" alt="" />
		</div>
		<div>
			<h1>{environment.title}</h1>
			<p>
				{#if totalTopics}
					{totalTopics}+
				{/if}
				Interviews, Articles, and more
			</p>
		</div>
	</a>
	<!-- {#if $page.url.pathname === '/'}
			<div>
				<div class="search">
					<input type="text" placeholder="Search" />
				</div>
			</div>
		{/if} -->
</div>

<style lang="postcss">
	.hero-blk {
		@apply flex justify-center text-center lg:text-left lg:justify-between items-center;
	}
	.hero_info_blk {
		@apply lg:flex items-center;
		h1 {
			margin: 0px;
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 700;
			margin: 0;
			@apply lg:text-[2rem] text-[1.5rem];
		}
		p {
			font-family: 'Barlow', 'Anek Bangla', sans-serif;
			font-weight: 400;
			font-size: 14px;
		}
	}
	.search {
		@apply flex items-center relative;
		@apply bg-darkGray;
		input {
			font-size: 16px;
			padding: 10px 20px;
			height: 46px;
			width: 100%;
			-webkit-box-align: center;
			align-items: center;
			border-radius: 999px;
			display: inline-block;
			margin-right: 10px;
			margin-bottom: 10px;
			border: 1px solid rgb(148, 148, 148);
			color: rgb(99, 99, 99) !important;
			&:focus {
				outline: none;
			}
		}
	}
</style>
