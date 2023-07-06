import { readable, writable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const writableTime = writable(new Date());

const start = new Date();
// https://svelte.dev/docs/svelte-store#derived
export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
