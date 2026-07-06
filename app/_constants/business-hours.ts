interface DayHours {
  open: string
  close: string
}

// Chave é o índice retornado por Date.getDay() (0 = Domingo ... 6 = Sábado)
export const BUSINESS_HOURS: Record<number, DayHours | null> = {
  0: { open: "07:00", close: "12:00" },
  1: null,
  2: { open: "08:00", close: "18:30" },
  3: { open: "08:00", close: "18:30" },
  4: { open: "08:00", close: "18:30" },
  5: { open: "07:00", close: "19:00" },
  6: { open: "07:00", close: "19:00" },
}

export const BUSINESS_HOURS_LABELS = [
  { day: "Domingo", hours: "07:00 às 12:00" },
  { day: "Segunda-Feira", hours: "Fechado" },
  { day: "Terça-Feira", hours: "08:00 às 18:30" },
  { day: "Quarta-Feira", hours: "08:00 às 18:30" },
  { day: "Quinta-Feira", hours: "08:00 às 18:30" },
  { day: "Sexta-Feira", hours: "07:00 às 19:00" },
  { day: "Sábado", hours: "07:00 às 19:00" },
]

export const isBarbershopClosedOn = (date: Date): boolean =>
  BUSINESS_HOURS[date.getDay()] === null

export const generateTimeSlotsForDay = (date: Date): string[] => {
  const hours = BUSINESS_HOURS[date.getDay()]
  if (!hours) return []

  const [openHour, openMinutes] = hours.open.split(":").map(Number)
  const [closeHour, closeMinutes] = hours.close.split(":").map(Number)

  const slots: string[] = []
  let hour = openHour
  let minutes = openMinutes

  while (hour < closeHour || (hour === closeHour && minutes < closeMinutes)) {
    slots.push(
      `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
    )
    minutes += 30
    if (minutes >= 60) {
      minutes -= 60
      hour += 1
    }
  }

  return slots
}
