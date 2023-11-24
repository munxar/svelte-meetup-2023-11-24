<script lang="ts">
	let name = 'Sascha';
</script>

<h1>Stores</h1>
one way
<input type="text" value={name} />
two way
<input type="text" bind:value={name} />
My name is {name}.
