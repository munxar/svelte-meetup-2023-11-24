<script lang="ts">
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import { makeIp } from './stores';
	export let id: string;
	const ip = makeIp();
</script>

ip: {$ip}
