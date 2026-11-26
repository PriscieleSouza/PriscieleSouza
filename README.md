# Prisciele Vitoria · Portfólio

**Site no ar: <https://priscielesouza.github.io/PriscieleSouza/>**

Portfólio pessoal de **Prisciele Vitoria**: residente em Inteligência Artificial e Análise de Dados, graduanda em Análise e Desenvolvimento de Sistemas e em formação em Segurança Ofensiva. O site é uma página única, estática e responsiva, publicada no GitHub Pages.

[GitHub](https://github.com/PriscieleSouza) · [LinkedIn](https://www.linkedin.com/in/prisciele-souza/)

---

## Estrutura do projeto

```
PriscieleSouza/
├── index.html                   Página única (conteúdo, SEO e dados estruturados)
├── css/
│   └── style.css                Estilos (BEM, mobile-first)
├── js/
│   └── script.js                Interações (menu, rolagem suave, revelar ao rolar)
├── assets/
│   ├── fonts/                   Gloock e Poppins em woff2 (+ licenças OFL)
│   └── img/
│       ├── hero-*.avif|webp     Retrato do hero (480, 800 e 1200 px)
│       ├── about-*.avif|webp    Retrato recortado da seção Sobre (480 e 800 px)
│       ├── og-image.jpg         Imagem de compartilhamento (1200×630)
│       └── projects/            Ilustrações dos cards de projetos (SVG)
├── favicon.svg                  Ícone da aba
├── apple-touch-icon.png         Ícone para iOS (180×180)
├── robots.txt                   Regras para buscadores
├── sitemap.xml                  Mapa do site
├── .nojekyll                    Faz o Pages servir os arquivos como estão
├── LICENSE
└── README.md
```

`index.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` e os ícones ficam na raiz de propósito: o GitHub Pages e os buscadores esperam encontrá-los ali.

### Seções da página

1. **Hero** (`#inicio`): título "PORTFÓLIO" em fonte display, retrato em duotom, links e botão de rolagem.
2. **Sobre** (`#sobre`): apresentação, retrato recortado e cartão de contato (`#contato`).
3. **Currículo** (`#curriculo`): formação, experiência, competências técnicas e projetos.
4. **Certificados** (`#certificados`): certificados, idiomas, passatempos e "Estudando agora".

---

## Como o site é construído

- **HTML semântico**: `header`, `main`, `section`, `footer`, `address`, um único `<h1>` (oculto, com nome e função) e hierarquia de títulos coerente.
- **CSS com BEM**: blocos como `hero`, `about`, `timeline`, `chips` e `project-card`, elementos `bloco__elemento` e modificadores `bloco--modificador`. Tokens de cor, fonte e escala ficam em `:root`.
- **Mobile-first**: a base é o celular e as consultas usam `min-width`.

  | Breakpoint | Largura mínima | O que muda |
  |---|---|---|
  | base | 0 | celular, coluna única |
  | md | 768 px | menu completo e hero em "palco" horizontal |
  | lg | 992 px | grades de duas colunas e card de Experiência sobreposto |

  Seguem a escala Bootstrap/Adobe Spectrum (576, 768, 992, 1200 e 1400 px), mas só 768 e 992 px foram necessários: o layout escala de forma fluida (unidades `cqw` e `clamp()`) e o conteúdo é limitado a 1400 px de largura.

- **JavaScript** (sem dependências): rolagem suave nos links internos, troca de tema do cabeçalho conforme a seção e animação de entrada com `IntersectionObserver`. Sem JS, todo o conteúdo continua visível.
- **Sem bibliotecas nem frameworks**: HTML, CSS e JS puros.

### Desempenho

- Imagens em **AVIF** e **WebP**, com `srcset`/`sizes`, dimensões declaradas e `loading="lazy"` fora da primeira dobra. O retrato do hero tem `fetchpriority="high"` e preload.
- **Fontes hospedadas no próprio site** (Gloock e Poppins, subconjunto Latin, `font-display: swap`): nenhuma requisição a servidores externos.
- Pouquíssimo JavaScript e um único arquivo de CSS.

### SEO e acessibilidade

- `title`, `description`, `canonical`, Open Graph, Twitter Card e dados estruturados `Person` (JSON-LD).
- `robots.txt` e `sitemap.xml`.
- *Skip link*, foco visível, textos alternativos, contraste mínimo de 4,5:1 nos textos pequenos e suporte a `prefers-reduced-motion`.

---

## Rodando localmente

Não há etapa de build. Basta servir a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Abrir o `index.html` direto no navegador também funciona, mas servir por HTTP reproduz melhor o comportamento das fontes e do preload.

## Publicação

O site é publicado pelo **GitHub Pages**, a partir da raiz da branch principal (*Settings → Pages → Deploy from a branch*). O endereço é <https://priscielesouza.github.io/PriscieleSouza/>. Os caminhos usados no HTML são relativos, então o site funciona dentro do subdiretório `/PriscieleSouza/`.

## Como atualizar o conteúdo

- **Textos e dados**: edite o `index.html`; cada seção é um bloco comentado.
- **Cores e escalas**: ajuste as variáveis no `:root` do `css/style.css`.
- **Novas imagens**: exporte em AVIF e WebP nas larguras usadas (480/800/1200 px), com fundo transparente quando for um recorte, e atualize o `srcset` correspondente no HTML.
- **Imagem de compartilhamento**: mantenha `assets/img/og-image.jpg` em 1200×630. Ao trocá-la, as redes sociais podem manter a prévia antiga em cache.
- **Novo projeto**: copie um `<li class="project-card">` na seção de projetos e ajuste imagem, título e texto.

## Créditos e licenças

- Código do site: ver [LICENSE](LICENSE).
- Fontes **Gloock** e **Poppins**: licença SIL Open Font License 1.1 (arquivos de licença em `assets/fonts/`).
- Fotografias: © Prisciele Vitoria.
- Layout inspirado em uma referência de portfólio com paleta verde, creme e amarelo, recriado do zero em HTML, CSS e JS.
