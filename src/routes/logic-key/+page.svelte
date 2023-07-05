<script>
	import Button from '~/components/Button.svelte';
	import Thing from '~/components/Thing.svelte';

	let colors = ['red', 'orange', 'yellow', 'green'];

	$: {
		console.log('colors: ', colors);
	}

	const onClick = () => {
		colors = colors.slice(1);
	};
</script>

<div class="color-circle-box">
	{#each colors as color (color)}
		<Thing style={`background-color: ${color};`} class="color-circle" name={color} />
	{/each}
	<Button {onClick}>remove first item</Button>
</div>

<style>
	.color-circle-box {
		display: flex;
		gap: 10px;
	}
</style>
