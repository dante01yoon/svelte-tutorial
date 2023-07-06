import { writable } from 'svelte/store';

export const count = writable(0);

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((c) => c++),
		decrement: () => update((c) => c--),
		reset: () => set(0)
	};
}

export const customCount = createCount();
