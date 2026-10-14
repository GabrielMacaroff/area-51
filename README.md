# Adega Area 51

Loja responsiva em português, com preto, dourado e amarelo. Funciona no navegador de computadores, Android e iPhone/iPad.

## Recursos

- Vitrine com busca, categorias e ordenação por preço.
- Carrinho salvo neste dispositivo, quantidades e finalização.
- Clique e Retire ou entrega com taxa configurável.
- Pedidos persistidos no servidor e pagamento na retirada/entrega.
- Painel visível a qualquer visitante em modo de consulta. Apenas o dono pode criar/editar/ocultar produtos, enviar fotos, alterar configurações e acompanhar os últimos 100 pedidos. Dados de clientes e produtos ocultos nunca são enviados a visitantes.
- Preços calculados no servidor, autenticação do dono e proteção de origem nas escritas.

## Primeiro uso

Entre em **Painel do dono** com a conta ChatGPT do e-mail autorizado em `ADMIN_EMAIL`. Revise os seis produtos de exemplo: nomes, valores e ilustrações são iniciais e precisam refletir seu estoque real. Cadastre suas fotos pelo painel. Em **Configurações**, informe o endereço de retirada, taxa de entrega e ative **Abrir recebimento de pedidos**. O catálogo fica disponível antes da abertura; pedidos ficam bloqueados até a configuração.

O pedido aparece no painel com os dados do cliente. Atualize seu status e combine o recebimento com o cliente. O site não processa Pix/cartão online nem envia mensagens automáticas.

## Tecnologias

React + TypeScript, Vinext/Vite, Cloudflare Workers, banco D1 com Drizzle e imagens R2. Sites administra hospedagem e login ChatGPT. O repositório GitHub contém o código, não os dados dos clientes ou fotos enviadas.

## Desenvolvimento

Node.js 22.13 ou superior:

```sh
npm run install:ci
npm run db:generate
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_unique_magus.sql
npm run dev
```

O login local do starter usa `seedy@sites.test`. Para testar o painel local, crie `.dev.vars` (ignorado pelo Git) com `ADMIN_EMAIL=seedy@sites.test`. A produção usa a variável protegida em Sites. Nunca coloque tokens ou segredos em código.

```sh
npx tsc --noEmit
node scripts/smoke-test.mjs
```

O smoke test usa somente localhost e registra pedidos de teste no banco local; requer servidor dev e administrador local configurados. Migrações são aplicadas pelo Sites na publicação. `.openai/hosting.json` preserva a identidade do site e os bindings `DB` e `BUCKET`.

## Limites atuais

Taxa de entrega única; não há cálculo por CEP, gateway de pagamento, controle automático de estoque ou avisos por WhatsApp. Fotos de câmera iOS devem ser enviadas em JPG, PNG ou WebP; HEIC não é aceito. O layout foi verificado em viewport desktop e mobile, mas não em um aparelho físico com Safari.
