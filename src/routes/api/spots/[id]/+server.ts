import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({params}) => {
    console.log(`Getting spot id: ${params.id} from database.`)
    const spot = await prisma.spot.findFirst({where: { id: Number(params.id) }})
    return json(spot);
};