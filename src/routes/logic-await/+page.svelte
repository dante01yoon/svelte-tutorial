<script>
	import { getRandomNumber } from '~/utils';

	let promise = getRandomNumber();
	let promiseLong = getRandomNumber(5000);
</script>

<h1>Await blocks example</h1>
<div>
	<h2>pending 3s</h2>
	{#await promise}
		<p>...waiting</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red;">{error.message}</p>
	{/await}
</div>
<div>
	<h2>pending 5s without '...waiting' ui</h2>
	{#await promiseLong then number}
		<p>The number is {number}</p>
	{/await}
</div>
