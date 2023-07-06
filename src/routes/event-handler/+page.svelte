<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import ForwardButton from '~/components/ForwardButton.svelte';
	import Inner from '~/components/Inner.svelte';
	import ManualOuter from '~/components/ManualOuter.svelte';
	import Outer from '~/components/Outer.svelte';
	import horn from '~/components/horn.mp3';
	const dispatch = createEventDispatcher();

	/** @typedef {{x: number, y: number}} Point */
	/** @type { Point } */
	let m = { x: 0, y: 0 };

	/** @param { MouseEvent } event */
	function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
	/** @type {HTMLAudioElement} */
	let audio;

	onMount(() => {
		audio = new Audio();
	});
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
	<section>
		<h2>Component event + Event modifiers</h2>
		<div>
			<Inner
				on:innerMessage|once={(e) => {
					alert(e.detail.text);
				}}
			/>
		</div>
	</section>
	<section>
		<h2>Event forward - not forwarding</h2>
		<ManualOuter on:innerMessage|once={(e) => alert(`Manual Outer: , ${e.detail.text}`)} />
	</section>
	<section>
		<h2>Event forward - apply forwarding</h2>
		<Outer on:innerMessage|once={(e) => alert(`Outer: , ${e.detail.text}`)} />
	</section>
	<section>
		<h2>DOM forward - apply forwarding</h2>
		<ForwardButton
			on:click={() => {
				audio.src = horn;

				if (!audio.paused) {
					audio.pause();
				} else {
					audio.play();
				}
			}}
		/>
	</section>
</main>

<style>
	.playground {
		width: 100vw;
		height: 100vh;
	}
</style>
