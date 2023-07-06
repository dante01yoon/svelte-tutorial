<script>
	import { onDestroy } from 'svelte';
	import { count } from '~/store/count';
	import Incrementer from './Incrementer.svelte';
	import Resetter from './Resetter.svelte';

	/** @type number */
	let count_value;
	const unsubscribe = count.subscribe((value) => {
		count_value = value;
	});

	onDestroy(unsubscribe);
</script>

<h1>The count is {count_value}</h1>
<Incrementer />
<Resetter />
