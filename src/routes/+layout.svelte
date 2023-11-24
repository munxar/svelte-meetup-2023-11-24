<script lang="ts">
	import { makeIp } from '$lib/stores.js';

	export let data;
	const ip = makeIp();
	const ip2 = makeIp();
	$ip = data.ip;
</script>

<slot />
