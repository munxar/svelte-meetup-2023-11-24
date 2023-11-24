import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
	if (!res.ok) {
		throw error(404);
	}
	const post = (await res.json()) as { id: number; title: string; body: string };

	return {
		post
	};
};
