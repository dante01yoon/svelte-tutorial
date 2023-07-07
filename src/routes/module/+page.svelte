<script>
	import AudioPlayer, { stopAll } from './AudioPlayer.svelte';
	import { tracks } from './tracks';
</script>

<div class="centered">
	{#each tracks as track}
		<AudioPlayer {...track} />
	{/each}
	<button on:click={stopAll}>Stop All </button>
</div>

<style>
	.centered {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: 0.5em;
		max-width: 40em;
		margin: 0 auto;
	}
</style>
