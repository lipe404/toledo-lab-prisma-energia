# Prisma Energia

Landing page conceitual de portfólio para o segmento de **Energia solar**. Marca, serviços e dados são fictícios.

**Demonstração:** Simulador conceitual. Não há envio de dados pessoais, sistema de cadastro ou pagamento.

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000 para ver a landing page.

## Publicar

O projeto usa Next.js App Router, TypeScript e exportação estática. `npm run build` gera `out/`.
Para GitHub Pages, em **Settings → Pages**, selecione **GitHub Actions**, então execute o fluxo “Publicar demonstração no GitHub Pages”. O fluxo configura o caminho público do repositório automaticamente.
Para Vercel, importe o repositório como projeto Next.js sem definir `PAGES_BASE_PATH`.

## Funil conceitual e hipótese

A headline orienta quem tem uma conta de energia para o teste de exposição do telhado. O modelo explica suas limitações antes de transformar o resultado num arquivo local que pode ser levado a uma visita técnica. Não há cadastro, medição nem contato.

Experimento proposto para sessões consentidas: comparar o CTA “Testar meu cenário” com “Simular com minha conta”. Observar a porcentagem que termina o cenário e consegue explicar para que serve o arquivo. Não há instrumentação nesta demo.
