<script>
	import { count } from '~/store/count';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset}> reset </button>
