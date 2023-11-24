<script lang="ts">
	export let data;
</script>

<h1>My Posts</h1>
{#each data.posts as post}
	<div>
		<a href="/{post.id}">{post.title}</a>
	</div>
{/each}
