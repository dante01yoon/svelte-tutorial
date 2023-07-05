<script>
	/** @typedef {{x: number, y: number}} Point */
	/** @type { Point } */
	let m = { x: 0, y: 0 };

	/** @param { MouseEvent } event */
	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<h1>Event handler blocks</h1>
<main on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })} class="playground">
	<section>
		<h2>curreont position of 'm'</h2>
		<div>x: {m.x} y: {m.y}</div>
	</section>
	<section>
		<h2>Event modifiers</h2>
		<div>
			<button
				on:click|once|preventDefault={() => {
					alert("clicked! won't fire again ");
				}}>Click Me!</button
			>
		</div>
	</section>
</main>

<style>
	.playground {
		width: 100vw;
		height: 100vh;
	}
</style>
