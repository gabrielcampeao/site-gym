**STONE GYM**

Site institucional completo de uma academia fitness, construído com foco em performance, design profissional e experiência do usuário.

---

Intuição do Projeto

O objetivo foi criar uma presença digital moderna para a **Stone Gym** — uma academia fictícia situada em São Paulo — que transmitisse credibilidade, força e sofisticação através de uma paleta escura com acentos roxos.

A ideia central foi entregar uma experiência semelhante a grandes redes como Smart Fit: banner promocional, busca de unidades por geolocalização, páginas de detalhe por unidade, catálogo de equipamentos com tutoriais em vídeo, checkout completo com vouchers e order bump, e um sistema de suporte via chat em tempo real.

---

Tecnologias

| Tecnologia | Uso |
|---|---|
| **Next.js 14** (App Router) | Framework principal — SSR, rotas dinâmicas, API Routes |
| **React 18** | Interface e componentes interativos |
| **TypeScript** | Tipagem estática em todo o projeto |
| **Tailwind CSS v3** | Estilização utility-first com paleta customizada |
| **Nodemailer** | Envio de e-mails via Gmail SMTP na rota de contato |
| **Intersection Observer API** | Animações de scroll reveal nativas, sem dependências |
| **Geolocation API** | Cálculo de distância até as unidades via Haversine |
| **YouTube nocookie embed** | Vídeos tutoriais com lazy load e privacidade |
| **next/og (ImageResponse)** | Geração do favicon via SVG/PNG dinâmico |

---

Funcionalidades

- **Hero** com foto real de academia e overlay gradiente roxo
- **Seção de planos** com cards animados e loading skeleton
- **Checkout** em 2 etapas com:
  - Order bump (Acompanhamento Nutricional)
  - Cupons de desconto (`STONE10`, `PROMO20`, `WELCOME`, `FIRSTDAY`)
  - Pagamento por cartão ou Pix
- **Página de academias** com busca, geolocalização e distância em tempo real
- **Detalhe de unidade** com galeria de fotos, horários e CTA
- **Catálogo de equipamentos** com filtro por categoria
- **Detalhe de equipamento** com galeria, vídeo tutorial e guia de exercícios
- **Formulário de contato** com envio real para Gmail
- **Chat de suporte** flutuante com respostas automáticas
- **Animações de scroll reveal** com IntersectionObserver nativo
- **Logo SVG** customizada com "stone" branco + "gym" roxo + sorriso

---

Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                  # Home
│   ├── layout.tsx                # Layout global
│   ├── globals.css               # Estilos globais + scrollbar
│   ├── icon.tsx                  # Favicon dinâmico
│   ├── academias/
│   │   ├── page.tsx              # Lista de unidades
│   │   └── [id]/page.tsx         # Detalhe da unidade
│   ├── checkout/
│   │   └── [slug]/page.tsx       # Checkout por plano
│   ├── equipamentos/
│   │   ├── page.tsx              # Catálogo de equipamentos
│   │   └── [slug]/page.tsx       # Detalhe do equipamento
│   └── api/
│       ├── contact/route.ts      # POST — envio de e-mail
│       ├── plans/route.ts        # GET — planos
│       └── info/route.ts         # GET — informações da academia
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── CTASection.tsx
│   ├── Plans.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx                  # SVG logo customizada
│   ├── ChatWidget.tsx            # Chat de suporte
│   ├── ScrollReveal.tsx          # Animações de entrada
│   └── ClientProviders.tsx       # Wrapper para componentes client
└── data/
    ├── units.ts                  # 6 unidades em São Paulo
    └── equipamentos.ts           # 9 equipamentos com exercícios
```

---

Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Criar arquivo de variáveis de ambiente
cp .env.local.example .env.local
# (edite com suas credenciais)

# Iniciar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
GMAIL_USER=seu_email@gmail.com
GMAIL_APP_PASSWORD=sua_senha_de_app
CONTACT_RECIPIENT=email_que_recebe_contatos@gmail.com
```

> **Como gerar a senha de app do Gmail:**
> Google Account → Segurança → Verificação em duas etapas → Senhas de app

---

Deploy no Vercel

```bash
# Build de produção (verificar erros antes do deploy)
npm run build

# Deploy via CLI
npx vercel --prod
```

Ou conecte o repositório GitHub diretamente no [vercel.com](https://vercel.com) e adicione as variáveis de ambiente no painel **Settings → Environment Variables**.

---

Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `gym-dark` | `#0A0A0A` | Fundo principal |
| `gym-purple` | `#7B2FBE` | Cor de destaque |
| `gym-purple-dark` | `#6B21A8` | Hover de botões |
| `gym-purple-light` | `#C4B5FD` | Textos secundários |
| `gym-yellow` | `#F5C518` | Badge "Mais Popular" |

---

Licença

Projeto desenvolvido para fins de demonstração.
