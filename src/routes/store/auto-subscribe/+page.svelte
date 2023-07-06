<script>
	import { count } from '~/store/count';
	import Incrementer from '../writable/Incrementer.svelte';
	import Resetter from '../writable/Resetter.svelte';
</script>

<h1>Auto subscribing</h1>
<div>
	<span>count: {$count}</span>
	<Incrementer />
	<Resetter />
</div>
