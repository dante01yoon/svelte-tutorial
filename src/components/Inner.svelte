<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<Button
	onClick={() => {
		dispatch('innerMessage', {
			text: 'Hello!'
		});
	}}
/>
