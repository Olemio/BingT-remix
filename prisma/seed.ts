import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const post = await prisma.post.create({
    data: {
      time: "testing prisma"
    }
  })
  console.log(post)
}

seed()

function getPosts() {
  return [
    {
      time: 'JavaScript Performance Tips',
    },
    {
      time: 'Tailwind vs. Bootstrap',
    },
    {
      time: 'Writing Great Unit Tests',
    },
    {
      time: 'What Is New In PHP 8?',
    },
  ]
}