import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const horseshoes = await prisma.spot.create({
    data: {
        name: 'Horseshoes',
        latitude: 32.8391177,
        longitude: -117.2847756,
    }
 })
 console.log({ horseshoes })
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
