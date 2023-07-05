<script>
	const emojis = {
		red: '🍎',
		orange: '🍌',
		yellow: '🥕',
		green: '🍩',
		blue: '🥚'
	};
	// the name is updated whenever the prop value changes...
	/**
	 * @type string;
	 */
	export let name;

	// ...but the "emoji" variable is fixed upon initialisation
	// of the component because it uses `const` instead of `$:`
	// @ts-ignore
	let emoji = emojis[name];
	$: {
		console.log('emoji: ', emoji);
	}
	$: {
		console.log('name: ', name);
	}
</script>

<p class="color-circle" {...$$props}>{emoji} {name}</p>

<style>
	.color-circle {
		color: blue;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color, #000);
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
