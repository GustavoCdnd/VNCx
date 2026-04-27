# VNCx — Agência de Marketing e Tecnologia 🚀

![VNCx Logo](https://img.shields.io/badge/Status-Em%20Desenvolvimento-gold)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

**VNCx** é um ecossistema digital de alta performance focado em autoridade visual e resultados estratégicos. O projeto une design de elite (Adobe/Corel) com engenharia de software moderna para atender nichos de alto valor, como marketing político e tráfego pago.

## 🖥️ O Ecossistema

O projeto é composto por 4 pilares principais, cada um com uma identidade visual e tecnológica única:

1.  **Home (`index.html`):** Impacto visual com Snap Scroll, carrossel infinito de parceiros e apresentação do fundador.
2.  **Marketing Eleitoral (`politico.html`):** Focado em conversão de votos, branding de autoridade e blindagem de reputação (Dourado & Black).
3.  **Tráfego Pago (`trafego.html`):** Dashboard analítico com contadores dinâmicos de métricas e animações scanline (Azul Neon & Tech).
4.  **Publicidade Orientada (`publicidade.html`):** Experiência suave voltada ao público feminino com animações 3D Flip Cards e transições flutuantes (Crimson & Minimal).

## 🚀 Tecnologias Utilizadas

* **HTML5 & CSS3** (Semântica e estruturação avançada)
* **Tailwind CSS:** Estilização utilitária e responsividade mobile-first.
* **JavaScript (Vanilla):**
    * Lógica de Menu Mobile responsivo.
    * Intersection Observer para animações de "Count-up" (contadores numéricos).
    * Efeitos de Scroll Reveal e transições de opacidade.
* **Animações CSS 3D:** Transformações `preserve-3d` e `rotateY` para os cards interativos.

## 🛠️ Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/vncx-portfolio.git](https://github.com/seu-usuario/vncx-portfolio.git)
    ```

2.  **Instale as dependências (Tailwind):**
    ```bash
    npm install
    ```

3.  **Inicie o compilador do Tailwind:**
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

4.  **Abra o arquivo `index.html` no seu navegador.**

## 📐 Estrutura de Pastas

```text
/
├── dist/               # Arquivos otimizados para produção (CSS compilado)
├── src/                # Arquivos de entrada do Tailwind (input.css)
├── assets/             # Imagens, vídeos e logos (Logo VNCx, Fotos do Fundador)
├── index.html          # Página Principal
├── politico.html       # Vertical de Marketing Político
├── trafego.html        # Vertical de Tráfego Pago
└── publicidade.html    # Vertical de Design & Branding
