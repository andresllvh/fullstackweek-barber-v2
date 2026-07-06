import { Instagram, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { BUSINESS_HOURS_LABELS } from "../_constants/business-hours"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="space-y-5 px-5 py-6">
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase text-gray-400">
              Horário de Atendimento
            </h3>
            <ul className="space-y-1 text-sm">
              {BUSINESS_HOURS_LABELS.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-3">
                  <span className="text-gray-400">{day}</span>
                  <span className={hours === "Fechado" ? "text-gray-500" : ""}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                R. Pres. Nereu Ramos, 1980 - Cristo Redentor, João Pessoa - PB,
                58070-460
              </span>
            </div>

            <Link
              href="https://wa.me/5583999938239"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-primary"
            >
              <MessageCircle size={16} />
              (83) 99993-8239
            </Link>

            <Link
              href="https://instagram.com/darlanduarte98"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-primary"
            >
              <Instagram size={16} />
              @darlanduarte98
            </Link>
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Copyright{" "}
            <span className="font-bold">Darlan Duarte Barbearia</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
