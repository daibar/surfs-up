import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    console.log('Getting spots from database.')
    const spots = await prisma.spot.findMany({select: { name: true, id: true} })
    return json({ spots });
};