/*
export const name = writable('Sascha');
export const ip = writable('asd');
*/

import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export const makeIp = () => {
	let ctx = getContext('ip') as Writable<string>;
	if (!ctx) {
		ctx = writable('');
		setContext('ip', ctx);
	}
	return ctx;
};
