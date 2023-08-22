# AI Horizon
![Cap](https://raw.githubusercontent.com/PedroLMaia/Portfolio/main/public/ai-horizon.png)

### Descrição
A Plataforma de IA Horizon AI é um serviço baseado em SaaS, que aproveita as APIs da OpenAI e da Replicate, além de integrar diversos outros recursos como Stripe, Clerk e Crisp-chat com webhooks. Foi desenvolvida utilizando Next 13, Tailwind CSS, Prisma e MySQL com a plataforma de banco de dados PlanetScale. Também inclui integração com Stripe para pagamentos, Clerk para autenticação e Crisp-chat para criar um chat de suporte.

### Instalar pacotes

```shell
npm install
```

### Configurar variáveis ​​de ambiente

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= //Sua propria key na plataforma CLERK.
CLERK_SECRET_KEY=//Sua propria secret key na plataforma CLERK.

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/registre-se
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY= //Sua propria API_KEY da OpenAI.
REPLICATE_API_TOKEN= //Sua propria API_TOKEN na Replicate.

DATABASE_URL=//Url de conexão direto da PlanetScale(mySQL).

STRIPE_API_KEY= //Sua propria API_KEY da plataforma Stripe.

NEXT_PUBLIC_APP_URL= //Localmente usar o localhost:3000, no deploy usar a url de domínio.

STRIPE_WEBHOOK_SECRET= //Localmente usar o http://localhost:3000/api/webhook, no deploy usar a url de domínio, exemplo: https://url/api/webhook.
```
### Configurar Prisma

Primeiro crie um banco de dados mySQL na PlanetScale e configure o .env

```shell
npx prisma db push
```
Se precisar apagar seu banco de dados
```shell
npx prisma migrate reset
```
### Iniciar a aplicação
```shell
npm run dev
```
### Iniciar o Prisma
```shell
npx prisma studio
```

### Iniciar o WebHook - Stripe localmente
Precisa fazer o donwload do CLI do Stripe e adicioná-lo ao seu path environment.
```shell
stripe listen --forward-to localhost:3000/api/webhook
```
### Iniciar o WebHook - Stripe remoto
Quando fiz o deploy pode usar o Endpoints hospedados no mesmo padrão.
```shell
Exemplo: https://URL/api/webhook
WebHooks usados: invoice.payment_succeeded, checkout.session.completed
```