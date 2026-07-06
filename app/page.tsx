import Header from "./_components/header"
import Image from "next/image"
import { db } from "./_lib/prisma"
import ServiceItem from "./_components/service-item"
import BookingItem from "./_components/booking-item"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"
import { MapPinIcon, StarIcon } from "lucide-react"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershop = await db.barbershop.findFirst({
    include: { services: true },
  })
  const confirmedBookings = await getConfirmedBookings()

  if (!barbershop) return null

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>

            {/* AGENDAMENTO */}
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

        {/* IMAGEM DA BARBEARIA */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* SOBRE */}
        <div className="mt-4">
          <h1 className="text-xl font-bold">{barbershop.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <MapPinIcon className="text-primary" size={18} />
            <p className="text-sm">{barbershop.address}</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <StarIcon className="fill-primary text-primary" size={18} />
            <p className="text-sm">5,0 (9 avaliações)</p>
          </div>
          <p className="mt-3 text-sm text-gray-400">{barbershop.description}</p>
        </div>

        {/* SERVIÇOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Serviços
        </h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={{ name: barbershop.name }}
              service={JSON.parse(JSON.stringify(service))}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
