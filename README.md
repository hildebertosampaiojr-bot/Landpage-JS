<div align="center">

# JavaScript — Guia Interativo

**Uma landing page educacional para explorar os fundamentos do JavaScript.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-projeto%20educacional-C99765?style=for-the-badge)

[**Ver código**](./index.html) · [**Acessar site (após ativar o Pages)**](https://hildebertosampaiojr-bot.github.io/Landpage-JS/)

</div>

---

## Sobre o projeto

Este repositório reúne uma landing page didática sobre a linguagem JavaScript. A página apresenta conceitos básicos, contexto histórico, aplicações, vantagens, desvantagens, curiosidades e exemplos de código. Foi construída com tecnologias web nativas, sem framework ou etapa de compilação.

### Conteúdo da página

| Seção | O que apresenta |
| --- | --- |
| Início | Definição e apresentação do JavaScript |
| Introdução | Contexto e aplicações no front-end e back-end |
| História | Origem da linguagem e padronização ECMAScript |
| Importância | Uso do JavaScript no desenvolvimento moderno |
| Benefícios | Vantagens e limitações |
| Curiosidades | Informações históricas e técnicas |
| Exemplos | Alert, console.log, soma e estruturas condicionais |
| Conclusão | Resumo e referências para aprofundamento |

## Tecnologias e recursos

- **HTML5:** estrutura semântica das seções, conteúdo e exemplos.
- **CSS3:** tema escuro, cards, grids, media queries e transições.
- **JavaScript:** controle de abertura e fechamento dos menus.
- **Google Fonts (Inter):** tipografia carregada externamente.
- **Font Awesome:** ícones da interface.
- **Mídias locais:** imagens PNG e vídeo MP4 preservados da versão original.

## Funcionalidades

- Navegação por âncoras entre as seções.
- Menus suspensos com fechamento ao clicar fora, selecionar links ou pressionar **Escape**.
- Atributos de acessibilidade nos botões dos submenus, link para pular ao conteúdo e indicação de foco visível.
- Layout adaptativo para telas menores e respeito à preferência por movimento reduzido.
- Exemplos de código formatados visualmente.
- Imagens com carregamento adiado e vídeo com pré-carregamento de metadados.

> **Escopo:** é um projeto front-end estático. Não utiliza servidor de aplicação, banco de dados, login ou API própria.

## Estrutura do repositório

```text
Landpage-JS/
├── index.html                 # Entrada principal da página
├── css/
│   └── style.css              # Estilos e responsividade
├── js/
│   └── script.js              # Interações dos menus
├── Trabalho conslusão/
│   ├── landingPage.html       # Versão original preservada
│   ├── *.png                  # Imagens utilizadas pela página
│   └── *.mp4                  # Vídeo utilizado pela página
└── README.md                  # Documentação
```

A pasta `Trabalho conslusão` mantém a grafia original para não alterar os caminhos dos arquivos. O `index.html` da raiz é a versão reorganizada.

## Como executar localmente

**Pré-requisito:** navegador moderno. Não é necessário instalar Node.js, pacotes ou dependências.

1. Clone o repositório:

```bash
git clone https://github.com/hildebertosampaiojr-bot/Landpage-JS.git
```

2. Entre na pasta:

```bash
cd Landpage-JS
```

3. Abra `index.html` no navegador. Como alternativa, use o **Live Server** do VS Code.

Para servir localmente com Python, se estiver instalado:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/`.

## Publicação no GitHub Pages

O projeto possui `index.html` na raiz, compatível com hospedagem estática pelo GitHub Pages.

1. Abra [Settings → Pages](https://github.com/hildebertosampaiojr-bot/Landpage-JS/settings/pages).
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` (se for a branch padrão) e a pasta `/(root)`.
4. Clique em **Save** e acompanhe a implantação em **Actions** ou **Pages**.
5. Quando a implantação for concluída, acesse [o endereço do projeto](https://hildebertosampaiojr-bot.github.io/Landpage-JS/).

**Importante:** o link público só funcionará depois que o GitHub Pages estiver habilitado e a implantação terminar. O domínio raiz `hildebertosampaiojr-bot.github.io` não substitui o caminho `/Landpage-JS/`.

## Acessibilidade e compatibilidade

Foram implementados recursos básicos de navegação por teclado, atributos `aria-controls` e `aria-expanded`, estados de foco e estilos para telas menores. Isso **não equivale a uma auditoria WCAG**. É recomendável testar com teclado, leitor de tela e diferentes tamanhos de viewport.

## Verificações recomendadas

- [ ] Abrir a página em desktop e celular e verificar possíveis transbordamentos.
- [ ] Testar cada submenu com toque, clique e teclado.
- [ ] Conferir carregamento de todas as imagens e do vídeo.
- [ ] Confirmar a implantação do GitHub Pages.
- [ ] Executar auditorias Lighthouse de desempenho e acessibilidade.
- [ ] Revisar direitos de uso e atribuição das mídias.
- [ ] Revisar conteúdo e links das fontes citadas.

## Referências para estudo

- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MDN — Aprendendo desenvolvimento web](https://developer.mozilla.org/pt-BR/docs/Learn_web_development)
- [ECMA-262 — ECMAScript](https://tc39.es/ecma262/)
- [JavaScript.info](https://javascript.info/)

## Histórico e observações

A versão original do trabalho foi mantida em `Trabalho conslusão/landingPage.html`. A versão da raiz separa HTML, CSS e JavaScript para facilitar manutenção e evolução.

**Privacidade:** a versão nova não exibe o número de telefone presente no rodapé da versão original. Como o repositório é público, revise também o arquivo original e o histórico caso não queira que essa informação continue acessível.

## Autor

**Hildeberto Júnior**

[Perfil no GitHub](https://github.com/hildebertosampaiojr-bot)

---

<div align="center"><sub>Projeto educacional · HTML · CSS · JavaScript</sub></div>
