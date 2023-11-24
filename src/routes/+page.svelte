<script lang="ts">
	import { page } from '$app/stores';
	import Child from '$lib/Child.svelte';
	import Container from '$lib/Container.svelte';
	import Parent from '$lib/Parent.svelte';
	export let data;
</script>

<Parent>
	<Container>
		<Child id="one" />
		<Child id="two" />
	</Container>
</Parent>
