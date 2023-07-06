<script>
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	const size = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	const scaleUpBall = () => {
		$size += 1;
	};
	const scaleDownBall = () => {
		$size -= 1;
	};
</script>

<title>Motion - tweens</title>
<h1>Motion - tweens</h1>
<progress value={$progress} />
<div>
	<button on:click={() => progress.set(0)}> 0% </button>

	<button on:click={() => progress.set(0.25)}> 25% </button>

	<button on:click={() => progress.set(0.5)}> 50% </button>

	<button on:click={() => progress.set(0.75)}> 75% </button>

	<button on:click={() => progress.set(1)}> 100% </button>
</div>

<button on:click={scaleUpBall}> embiggen </button>
<button on:click={scaleDownBall}> emSmallen </button>

<div class="ball" style="transform: scale({$size}); transform-origin: 0 0" />

<style>
	progress {
		display: block;
		width: 100%;
	}

	.ball {
		width: 50px;
		height: 50px;
		background: greenyellow;
		border-radius: 50%;
	}
</style>
