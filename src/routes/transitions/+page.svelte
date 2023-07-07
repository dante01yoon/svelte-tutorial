<script>
	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	let visible = true;
	let flyVisible = true;
	let customCSSVisible = true;
	let typeWriterVisible = true;

	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

	function spins(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i).concat('|');
			}
		};
	}

	export function typewriter2(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
	let keyIndex = -1;
	const messages = [
		'reticulating splines...',
		'generating witty dialog...',
		'swapping time and space...',
		'640K ought to be enough for anybody',
		'checking the gravitational constant in your locale...',
		'keep calm and npm install',
		'counting backwards from Infinity',
		"I'm sorry Dave, I can't do that.",
		'adjusting flux capacitor...',
		'constructing additional pylons...',
		'rm -rf /'
	];
	onMount(() => {
		const interval = setInterval(() => {
			keyIndex += 1;
			keyIndex %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>Transitions</h1>
<section>
	<h2>basic transition</h2>
	<label>
		<input type="checkbox" bind:checked={visible} />
	</label>

	{#if visible}
		<p transition:fade>Fades in and out</p>
	{/if}
</section>
<section>
	<label>
		<input type="checkbox" bind:checked={flyVisible} />
		visible
	</label>

	{#if flyVisible}
		<p transition:fly={{ y: 200, duration: 2000 }}>Fades in and out</p>
	{/if}

	{#if flyVisible}
		<p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
	{/if}
</section>

<section>
	<h2>Custom CSS transitions</h2>

	<label>
		<input type="checkbox" bind:checked={customCSSVisible} />
		visible
	</label>
	{#if customCSSVisible}
		<div
			class="centered"
			in:spins={{ duration: 8000 }}
			out:fade
			on:introstart={() => console.info('intro started')}
			on:outrostart={() => console.info('outro started')}
			on:introend={() => console.info('intro ended')}
			on:outroend={() => console.info('outro ended')}
		>
			<span>transitions!</span>
		</div>
	{/if}
</section>
<section>
	<h2>Custom JS transitions</h2>
	<label>
		<input type="checkbox" bind:checked={typeWriterVisible} />
		typeWriterVisible
	</label>
	{#if typeWriterVisible}
		<p
			transition:typewriter
			on:introstart={() => console.info('intro started')}
			on:outrostart={() => console.info('outro started')}
			on:introend={() => console.info('intro ended')}
			on:outroend={() => console.info('outro ended')}
		>
			the quick brown fox jumps over the lazy dog
		</p>
	{/if}
</section>
<section>
	<h2>slide global transition</h2>
	<label>
		<input type="checkbox" bind:checked={showItems} />
		show list
	</label>

	<label>
		<input type="range" bind:value={i} max="10" />
	</label>

	{#if showItems}
		{#each items.slice(0, i) as item}
			<div transition:slide|global>
				{item}
			</div>
		{/each}
	{/if}
</section>
<section>
	<h2>Key blocks</h2>
	<h3>loading...</h3>

	{#key i}
		<p in:typewriter2={{ speed: 10 }}>
			{messages[i] || ''}
		</p>
	{/key}
</section>

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>
