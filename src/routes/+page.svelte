<script>
	import Button from '../components/Button.svelte';
	import Thing from '../components/Thing.svelte';

	let name = 'dante';
	let time = new Date();
	let src =
		'https://images.unsplash.com/photo-1625053705384-cdd21652b1ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80';
	let string = 'string';
	let count = 3;
	let colors = ['red', 'orange', 'yellow', 'green'];

	let buttonProps = {
		count: 10,
		unexpected: 2
	};

	$: {
		console.log('colors: ', colors);
	}

	const onClick = () => {
		colors = colors.slice(1);
	};
</script>

<div class="color-circle-box">
	{#each colors as color}
		<Thing style={`background-color: ${color};`} class="color-circle" name={color} />
	{/each}
	<Button {onClick}>remove first item</Button>
</div>

<style>
	.color-circle {
		color: white;
		background-color: var(--color, #000);
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
