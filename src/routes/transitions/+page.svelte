<script>
	import { fade, fly } from 'svelte/transition';

	let visible = true;
	let flyVisible = true;
</script>

<h1>Transitions</h1>
<section>
	<h2>basic transition</h2>
	<label>
		<input type="checkbox" bind:checked={visible} />
	</label>

	{#if visible}
		<p transition:fade>Fades in and out</p>
	{/if}
</section>
<section>
	<label>
		<input type="checkbox" bind:checked={flyVisible} />
		visible
	</label>

	{#if flyVisible}
		<p transition:fly={{ y: 200, duration: 2000 }}>Fades in and out</p>
	{/if}

	{#if flyVisible}
		<p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
	{/if}
</section>
