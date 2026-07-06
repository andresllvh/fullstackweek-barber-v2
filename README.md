# Darlan Duarte Barbearia

Sistema de agendamento online para a **Darlan Duarte Barbearia**, em João Pessoa - PB. Permite que clientes vejam os serviços disponíveis, escolham um horário dentro do funcionamento real da barbearia e confirmem a reserva com login via Google.

> Este projeto tem como base o tutorial [Full Stack Week - Barber](https://github.com/felipemotarocha/fullstackweek-barber-v2) do [Felipe Mota Rocha](https://github.com/felipemotarocha). A partir dessa base, o projeto foi customizado com os dados reais de um cliente (Darlan Duarte Barbearia) e evoluído com novas features, refatorações e identidade visual próprias — descritas abaixo e no histórico de commits.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Prisma](https://www.prisma.io/) + PostgreSQL
- [NextAuth.js](https://next-auth.js.org/) (login com Google)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

## Customizações feitas para o cliente

- Identidade visual (nome, logo e paleta preto/dourado) da Darlan Duarte Barbearia
- Serviços e preços reais (corte, barba, sobrancelha e combos)
- Endereço, WhatsApp e Instagram reais no rodapé
- Geração de horários de agendamento baseada no funcionamento real da barbearia por dia da semana (ao invés de uma lista fixa de horários)

## Getting Started

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz com as variáveis:

   ```bash
   DATABASE_URL=""        # connection string do Postgres (ex: Neon)
   GOOGLE_CLIENT_ID=""    # OAuth do Google Cloud Console
   GOOGLE_CLIENT_SECRET=""
   NEXT_AUTH_SECRET=""    # string aleatória, ex: openssl rand -base64 32
   ```

3. Rode as migrations e popule o banco:

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Suba o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000).
