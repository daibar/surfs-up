import type { LayoutServerLoad } from './$types';

export const load = (async ({fetch, params}) => {
	const spots = await fetch('/spots')
    return await spots.json();
}) satisfies LayoutServerLoad;