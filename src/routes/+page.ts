export const load = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = (await res.json()) as { id: number; title: string; body: string }[];

	return {
		posts
	};
};
