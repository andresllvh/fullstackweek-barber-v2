const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const services = [
      {
        name: "Barba",
        description:
          "Modelagem completa da barba, com toalha quente e acabamento na navalha. Duração: 30 min.",
        price: 30.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Acabamento",
        description:
          "Retoque rápido de contorno e nuca para manter o corte em dia. Duração: 15 min.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Cabelo",
        description:
          "Corte de cabelo personalizado de acordo com o seu estilo. Duração: 30 min.",
        price: 30.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Cabelo + Barba",
        description: "Combo completo de corte de cabelo e barba. Duração: 1h.",
        price: 45.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Cabelo + Barba + Sobrancelha",
        description:
          "Combo completo de corte de cabelo, barba e design de sobrancelha. Duração: 1h.",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Cabelo + Sobrancelha",
        description:
          "Corte de cabelo com design de sobrancelha incluso. Duração: 45 min.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
      {
        name: "Sobrancelha",
        description:
          "Design e alinhamento de sobrancelha na navalha. Duração: 10 min.",
        price: 10.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
    ]

    const barbershop = await prisma.barbershop.create({
      data: {
        name: "Darlan Duarte Barbearia",
        address:
          "R. Pres. Nereu Ramos, 1980 - Cristo Redentor, João Pessoa - PB, 58070-460",
        imageUrl:
          "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
        phones: ["(83) 99993-8239"],
        description:
          "Barbearia em João Pessoa - PB, reconhecida pela qualidade dos cortes e pelo atendimento acolhedor. Empresa que valoriza e acolhe a comunidade LGBTQ+.",
      },
    })

    for (const service of services) {
      await prisma.barbershopService.create({
        data: {
          name: service.name,
          description: service.description,
          price: service.price,
          imageUrl: service.imageUrl,
          barbershop: {
            connect: {
              id: barbershop.id,
            },
          },
        },
      })
    }
  } catch (error) {
    console.error("Erro ao popular o banco de dados:", error)
  } finally {
    await prisma.$disconnect()
  }
}

seedDatabase()
