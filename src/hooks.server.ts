export const handle = async ({ event, resolve }) => {
	event.locals.ip = event.getClientAddress();

	// before my sveltekit app
	const response = await resolve(event);
	// after the sveltekit app SSR runs
	return response;
};
