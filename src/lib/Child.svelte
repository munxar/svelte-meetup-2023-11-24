<script lang="ts">
	import { getContext } from 'svelte';
	export let id: string;
	const { say, test } = getContext('Parent');
</script>

<div>
	from parent: {$test}
</div>
<button on:click={() => say(`hello from child ${id}`)}>say</button>
<input type="text" bind:value={$test} />
