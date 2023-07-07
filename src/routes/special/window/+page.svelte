<script>
	let y = 0;

	function handleScroll(e) {
		y = e.currentTarget.scrollY;
	}
</script>

<!-- <svelte:window on:scroll={handleScroll} /> -->
<svelte:window bind:scrollY={y} />
<div class="body">
	<span> depth: {y}px</span>
</div>

<style>
	:global(body) {
		padding: 0 0;
		margin: 0 0;
	}
	.body {
		height: 400vw;
		background: url(./deepsea.webp);
		background-size: cover;
	}

	span {
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	}
</style>
