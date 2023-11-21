import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
        const response = await fetch('/api/spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.get('name'),
                latitude: data.get('latitude'),
                longitude: data.get('longitude'),
         }),
        }
         )
	}
};