import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    console.log('Getting spots from database.')
    const spots = await prisma.spot.findMany({select: { name: true, id: true} })
    return json({ spots });
};

export async function POST({ request }) {
    const req = await request.json()
    const spot = await prisma.spot.create({ data: {name: req.name, latitude: parseFloat(req.latitude), longitude: parseFloat(req.longitude) }})
	return json({ spot }, { status: 201 });
};
