<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let messageFromChild = '';
	const test = writable('abc');
	const say = (message: string) => {
		messageFromChild = message;
	};

	setContext('Parent', { say, test });
</script>

<button on:click={() => say('Hello Parent')}>do it </button>
{messageFromChild}
test: {$test}
<button
	on:click={() => {
		$test = 'overwritten by parent';
	}}>overwrite</button
>
<slot />
