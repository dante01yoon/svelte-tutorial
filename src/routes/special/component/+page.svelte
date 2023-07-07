<script>
	import BlueThing from './BlueThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import RedThing from './RedThing.svelte';

	/** @type {{ color: string; component: ConstructorOfATypedSvelteComponent }}  */
	let selected;
	const options = [
		{
			color: 'green',
			component: GreenThing
		},
		{ color: 'blue', component: BlueThing },
		{ color: 'red', component: RedThing }
	];
</script>

<h1>svelte:component</h1>
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected?.component} />
