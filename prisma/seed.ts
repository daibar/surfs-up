import { PrismaClient } from '@prisma/client'
import { create } from 'domain'
const prisma = new PrismaClient()
async function main() {
  console.log('Start seeding...')
  const horseshoes = await prisma.spot.upsert({
    where: {name: 'Horseshoes'},
    update: {},
    create: {
        name: 'Horseshoes',
        latitude: 32.8391177,
        longitude: -117.2847756,
    }
 })

  const scripps = await prisma.spot.upsert({
    where: {name: 'Scripps'},
    update: {},
    create: {
        name: 'Scripps',
        latitude: 32.8656048,
        longitude: -117.256843
    }
 })

 console.log({horseshoes, scripps})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
