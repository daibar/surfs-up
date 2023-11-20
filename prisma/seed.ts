import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	console.log('Start seeding...');
	const horseshoes = await prisma.spot.upsert({
		where: { name: 'Horseshoes' },
		update: {},
		create: {
			name: 'Horseshoes',
			latitude: 32.8391177,
			longitude: -117.2847756
		}
	});

	const scripps = await prisma.spot.upsert({
		where: { name: 'Pipeline' },
		update: {},
		create: {
			name: 'Pipeline',
			latitude: 21.6655525,
			longitude: -158.05502
		}
	});

	console.log({ horseshoes, scripps });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
