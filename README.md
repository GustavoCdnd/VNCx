# VNCx — Next.js / Vercel

Esta versão adapta o site React/Tailwind à publicação na Vercel usando Next.js. Mantém a apresentação, serviços interativos, página Sobre com formulário ao final, briefing de WhatsApp e cartão digital.

## Publicar no repositório existente

Descompacte o ZIP e copie TODOS os arquivos e pastas para a raiz do repositório VNCx, substituindo os arquivos correspondentes. package.json, package-lock.json, tsconfig.json, next.config.ts e vercel.json ficam diretamente na raiz.

As pastas antigas build, scripts, db, drizzle e examples e o antigo vite.config.ts não são usados nesta versão. tsconfig.json exclui esses arquivos da verificação do Next.js, permitindo atualizar o repositório sem removê-los imediatamente.

## Vercel

No projeto, em Settings > Build and Deployment:

- Framework Preset: Next.js
- Root Directory: raiz do repositório (campo vazio ou ./); nunca app, src ou public.
- Build Command: npm run build
- Install Command: npm ci
- Output Directory: padrão do Next.js (.next); remover qualquer override antigo para dist ou public.
- Node.js: versão 22.x ou compatível com as dependências.

Após o commit, faça Redeploy da branch main. Aguarde status Ready. Confira se o domínio vn-cx.vercel.app está associado a esse projeto na área Domains. Se o erro continuar, envie os logs de build e a tela de configuração do projeto.

## Executar localmente

```sh
npm ci
npm run dev
```

Abra http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

## Estrutura

- app/: rotas e estilos globais.
- components/vncx-site.tsx: layout, conteúdo e formulário.
- components/service-demos.tsx: exemplos interativos.
- public/logo-vncx.png: logo transparente.
- lib/utils.ts e components/ui/: componentes de interface.
- vendor/: estilos de componentes.

## Contatos

WhatsApp: 5592992894900
Instagram: @vncxtech
SAC: vncxcompany@gmail.com

O formulário prepara os dados em uma mensagem do WhatsApp; o cliente revisa e confirma o envio. Não há pagamento ou armazenamento de dados no site. As demonstrações são visuais e o gráfico de tráfego usa números hipotéticos.
