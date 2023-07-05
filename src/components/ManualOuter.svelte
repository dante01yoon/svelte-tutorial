<script>
	import { createEventDispatcher } from 'svelte';
	import Inner from './Inner.svelte';

	const dispatch = createEventDispatcher();

	/** @param {CustomEvent} e */
	const forward = (e) => {
		dispatch('innerMessage', e.detail);
	};
</script>

<Inner on:innerMessage={forward} />
