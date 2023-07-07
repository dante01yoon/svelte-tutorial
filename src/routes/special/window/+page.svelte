<script>
	let y = 0;

	function handleScroll(e) {
		y = e.currentTarget.scrollY;
	}
</script>

<!-- <svelte:window on:scroll={handleScroll} /> -->
<svelte:window bind:scrollY={y} />

<span> depth: {y}px</span>

<style>
	:global(body) {
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
