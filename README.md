# VNCx — Site completo

## Começar

1. Descompacte este ZIP.
2. Abra a pasta VNCx no VS Code ou copie seu conteúdo para a raiz do seu repositório.
3. No terminal, execute:

```sh
npm ci
npm run dev
```

Acesse http://localhost:5173.

Requisito: Node.js 22.13 ou mais recente compatível com o projeto.

## Verificar e compilar

```sh
npx tsc --noEmit
npm run build
```

## Páginas

- / — início, seção de serviços interativos e clientes.
- /#servicos — acesso direto aos serviços da página inicial.
- /sobre — página sobre a VNCx, com formulário no final.
- /fale-conosco — formulário com revisão e abertura do WhatsApp.
- /cartao-digital — botões para o site, WhatsApp, Instagram e SAC.
- /servicos — página alternativa de apresentação dos serviços.

## Editar

- components/vncx-site.tsx: páginas, navegação, rodapé, contatos e formulário.
- components/service-demos.tsx: exemplos de CRM, SaaS, tráfego, identidade e arquitetura.
- components/dashboard-preview.tsx: painel visual do banner.
- app/globals.css: cores, espaçamento, responsividade e animações.
- public/logo-vncx.png: logo preta com transparência.

## GitHub

O ZIP contém o código e as imagens. Não inclui node_modules, builds ou histórico .git.
Se o repositório já existe, copie o conteúdo da pasta VNCx para a pasta dele e use seu fluxo habitual de commit e push.

## Observações

React + Tailwind CSS + TypeScript/TSX, usando Vinext/Vite como base de execução. Os exemplos são demonstrações visuais e os dados de tráfego são hipotéticos. O formulário não armazena nem envia informações automaticamente: prepara a mensagem e abre o WhatsApp para a pessoa revisar e confirmar. A apresentação de identidade usa animação web, não arquivo de vídeo. O link GitHub aponta para o perfil GustavoCdnd.

Os clientes e as notas de aprovação são informados pela VNCx. Nenhum comentário foi inventado. A área técnica usa referências oficiais de ISO/IEC 27001 e LGPD, sem declarar certificação.
