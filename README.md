# Projeto Plataforma ONG - Sagrado Pet (Etapa 1: HTML5)

Este é um projeto acadêmico que visa a construção de uma plataforma web completa para ONGs.

O objetivo desta primeira entrega (Etapa 1) foi construir a fundação estrutural e semântica de uma plataforma web para a ONG fictícia **"Sagrado Pet"**, focada no resgate, alimentação e cuidado de cães e gatos em situação de rua.

---

## 🚀 Link para o Site (GitHub Pages)

Você pode acessar o site ao vivo, publicado através do GitHub Pages, no link abaixo:

**[https://codezeroo01.github.io/projeto-ong-sagrado-pet/]**


---

## 📝 Etapa 1: Fundamentos de HTML5

Esta primeira entrega foca na aplicação dos fundamentos de HTML5, estabelecendo a base estrutural sólida para toda a plataforma. A seguir, detalhei como cada especificação obrigatória foi atendida:

### 1. Estrutura HTML5 Semântica

* **Implementação de 3 Páginas:** Foram criadas as três páginas obrigatórias:
    * `index.html` (Página Inicial)
    * `projetos.html` (Página de Campanhas/Projetos)
    * `cadastro.html` (Página de Formulário)
* **Estrutura Semântica Completa:** Todas as páginas utilizam tags semânticas do HTML5 para definir blocos lógicos de conteúdo e melhorar a acessibilidade. Foram usadas tags como `<header>`, `<footer>`, `<main>`, `<nav>`, `<section>`, `<article>` e `<address>`.
* **Hierarquia de Títulos:** A hierarquia de títulos (de `<h1>` a `<h3>`) foi respeitada em todas as páginas para garantir a estrutura lógica e facilitar a navegação por leitores de tela.
* **Uso de Imagens:** Todas as páginas que possuem conteúdo visual (`index.html` e `projetos.html`) utilizam imagens. Foi implementada a tag `<picture>` para oferecer imagens em múltiplos formatos (`.webp` e `.jpg`), otimizando o carregamento e o desempenho.

### 2. Páginas Obrigatórias

* **Página inicial (`index.html`):** Apresenta a ONG "Sagrado Pet", sua missão (na seção "Sobre Nós") e informações claras de contato na tag `<address>` dentro do rodapé semântico da seção.
* **Projetos sociais (`projetos.html`):** Esta página foi adaptada para "Campanhas". Ela detalha as frentes de arrecadação da ONG ("Ração para Todos" e "Cuidado e Castração") e possui uma seção específica de "Como Ajudar", que aborda o **voluntariado** (com link para o cadastro) e **como doar** (informando a chave PIX).
* **Cadastro (`cadastro.html`):** Uma página dedicada inteiramente a coletar dados de novos interessados.

### 3. Formulários Complexos e Interativos

* **Formulário em `cadastro.html`:** A página de cadastro contém um formulário robusto.
* **Tipos de `input` HTML5:** Foram utilizados tipos de `input` específicos para melhorar a semântica e a experiência do usuário (UX), como `type="email"`, `type="tel"`, e `type="date"`.
* **Validação Nativa:** A validação nativa do HTML5 foi implementada com atributos como `required` (para campos obrigatórios) e `pattern` (para garantir o formato correto de CPF, Telefone e CEP).
* **Agrupamento Lógico:** Os campos do formulário foram separados em grupos lógicos usando as tags `<fieldset>` e `<legend>` ("Dados Pessoais" e "Endereço"), melhorando a organização.
* **Máscaras de `input`:** O requisito de máscaras dinâmicas (para CPF, Telefone e CEP) foi implementado via JavaScript. O código reside no arquivo `assets/js/masks.js` e é carregado ao final da página `cadastro.html` para aplicar a formatação enquanto o usuário digita.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico**
* **JavaScript (ES6+)**: Utilizado exclusivamente para a funcionalidade de máscaras de formulário.

## 📁 Estrutura de Pastas

O projeto segue a seguinte estrutura de arquivos, separando conteúdo (HTML), scripts (JS) e mídias (Images): 

/ ├── index.html ├── projetos.html ├── cadastro.html ├── README.md └── assets/ ├── images/ │ ├── campanha-cuidados.jpg │ ├── campanha-cuidados.webp │ ├── campanha-racao.jpg │ ├── campanha-racao.webp │ ├── sagrado-pet-hero.jpg │ └── sagrado-pet-hero.webp └── js/ └── masks.js

---

## 🎨 Etapa 2: Estilização com CSS3

Esta segunda entrega focou na aplicação de CSS3 para transformar a estrutura HTML em uma interface profissional, responsiva e acessível, baseada em um *design system* modular.

### 1. Sistema de Design (Design System)

* **Variáveis CSS Customizadas:** Todo o sistema de design (cores, fontes, espaçamentos) foi construído com variáveis CSS (`:root`) para garantir consistência e facilitar a manutenção.
* **Paleta de Cores:** Foi definida uma paleta com mais de 8 cores (`01-base.css`), incluindo cores primárias (laranja), secundárias (marrom) e neutras (cinzas), além de cores de feedback (vermelho/verde) para validação.
* **Tipografia Hierárquica:** Foi estabelecida uma hierarquia com 5 tamanhos de fonte (`--font-size-h1` a `--font-size-small`), garantindo uma escala visual clara.
* **Sistema de Espaçamento Modular:** Todos os `padding` e `margin` do site seguem um sistema de espaçamento modular (base 8px, ex: `--space-8`, `--space-16`, etc.) para um ritmo visual consistente.

### 2. Leiautes Responsivos com Flexbox e Grid

* **CSS Grid (Leiaute Principal):** O leiaute principal do site (`<header>`, `<main>`, `<footer>`) foi estruturado com CSS. O arquivo `02-layout.css` também contém um **sistema de grid customizado de 12 colunas** (`.grid-12`, `.col-6`, etc.), que é usado para organizar o conteúdo dos cards na página de projetos.
* **Flexbox (Alinhamentos):** O Flexbox foi amplamente utilizado para alinhamentos internos de componentes, como no cabeçalho (alinhando logo e navegação) e dentro dos cards.
* **5 Breakpoints Responsivos:** O arquivo `04-responsive.css` implementa uma abordagem *Mobile-First*. Ele contém **5 breakpoints** (`min-width`) para adaptar o leiaute desde celulares pequenos, passando por tablets, até desktops grandes.

### 3. Navegação Sofisticada e Interativa

* **Menu Responsivo:** O site apresenta um menu de navegação que se adapta automaticamente.
* **Navegação Mobile (Menu Hambúrguer):** Em telas pequenas, a navegação principal é substituída por um **menu hambúrguer** funcional. Esta funcionalidade foi implementada **puramente com CSS** (usando o "checkbox hack") para atender aos requisitos da disciplina sem a necessidade de JavaScript adicional.

### 4. Componentes de Interface

* **Cards Responsivos:** A página de projetos utiliza um sistema de `.card` (`03-components.css`) que exibe as campanhas. Em telas maiores, os cards se alinham em colunas; em telas móveis, eles empilham verticalmente.
* **Botões com Estados Visuais:** Foram criadas classes de botões (`.btn`, `.btn-primary`) que incluem estilos claros para os estados `:hover`, `:focus` e `:active`, melhorando a interatividade.
* **Formulários Estilizados com Validação Visual:** O formulário da página `cadastro.html` foi completamente estilizado. Mais importante, ele fornece **feedback visual de validação** (bordas verdes/vermelhas) usando as pseudo-classes `:valid` e `:invalid` do CSS3.
* **Componentes de Feedback (Badges/Alerts):** Embora não implementados diretamente nas páginas, as classes para `.badge` e `.alert` foram criadas no arquivo `03-components.css`, demonstrando o cumprimento do requisito.

### 5. Estrutura CSS Modular

O CSS foi organizado de forma modular para facilitar a manutenção, conforme o requisito:
* `style.css`: Arquivo principal que usa `@import` para carregar os módulos.
* `base.css` (01): Contém o reset e o *Design System*.
* `layout.css` (02): Contém a estrutura do site (header, footer, grid).
* `components.css` (03): Contém os estilos de componentes (botões, cards, formulários).
* `responsive.css` (04): Contém todos os `@media` queries para a responsividade.

---

## 🚀 Etapa 3: JavaScript Dinâmico e Single Page Application (SPA)

Esta terceira entrega focou na implementação de JavaScript avançado para transformar a interface estática em uma aplicação web dinâmica e interativa, simulando uma aplicação real.

### 1. Manipulação do DOM: Sistema de SPA Básico

Para atender ao requisito de *Single Page Application* (SPA), o projeto foi refatorado significativamente:

* **HTML Único:** O arquivo `index.html` agora funciona como a "casca" (shell) principal da aplicação. Os arquivos `projetos.html` e `cadastro.html` foram removidos.
* **Carregamento Dinâmico:** Um "roteador" básico foi criado no arquivo `assets/js/app.js`. Este roteador intercepta os cliques nos links de navegação (usando `e.preventDefault()`).
* **Injeção de Conteúdo:** A função `loadContent()` é responsável por injetar o HTML do template apropriado (veja abaixo) dentro da tag `<main id="main-content">`, sem a necessidade de recarregar a página.
* **Histórico de Navegação:** O roteador utiliza `history.pushState()` para atualizar a URL na barra de endereços do navegador e um listener `popstate` para permitir o uso dos botões "Voltar" e "Avançar" do navegador.

### 2. Manipulação do DOM: Templates JavaScript

Para possibilitar a SPA, todo o conteúdo das páginas foi convertido em *templates JavaScript*:

* **Template Literals:** O conteúdo das páginas de "Home" (`homeTemplate`) e "Cadastro" (`cadastroTemplate`) foi movido para dentro de *template literals* (strings com crases `` ` ``) no arquivo `app.js`.
* **Templates Dinâmicos:** A página de "Campanhas" utiliza uma função (`generateProjectsTemplate()`) que lê um array de objetos (`projectsData`) e gera o HTML dos cards dinamicamente, demonstrando um sistema de templates mais avançado.

### 3. Funcionalidade: Verificação de Consistência de Dados

Para cumprir o requisito de verificação de formulários via JavaScript, foi implementado um sistema de validação customizado na página de cadastro:

* **Validação Nativa Desabilitada:** O atributo `novalidate` foi adicionado à tag `<form>` para desabilitar a validação padrão do HTML5, permitindo que o JavaScript assuma o controle.
* **Validação na Submissão:** Um listener de evento `submit` foi adicionado ao formulário. Ele chama a função `validateForm()`, que verifica a consistência dos dados (ex: tamanho mínimo do nome, formato do e-mail, comprimento do CPF e telefone).
* **Feedback ao Usuário:** As funções `showError()` e `clearError()` manipulam o DOM para exibir mensagens de erro claras e específicas para cada campo em um `<span class="error-message"></span>` correspondente. O CSS foi atualizado para estilizar essas mensagens.

### 4. Código JavaScript Modular

O código JavaScript foi organizado de forma modular e por funcionalidade, conforme o requisito:

* **`app.js`:** É o arquivo principal, carregado no HTML como `type="module"`. Ele está internamente organizado por seções: Importações, Templates, Roteamento (SPA), Validação de Formulário e Inicialização.
* **`masks.js`:** O arquivo de máscaras da Etapa 1 foi refatorado para ser um módulo. Ele agora `export`a uma função `applyMasks()`.
* **Importação:** O `app.js` importa o módulo de máscaras (`import { applyMasks } from './masks.js'`) e o chama dinamicamente apenas quando o template do formulário de cadastro é carregado.

---

## 🏆 Entrega Final: Acessibilidade, Otimização e Processos

Esta entrega final consolida todo o projeto através da implementação de práticas profissionais de versionamento, acessibilidade (WCAG) e otimização para produção.

### 1. Controle de Versão com Git/GitHub (GitFlow)

Para esta entrega, foi implementado um fluxo de trabalho profissional simulando um ambiente de equipe:

* **Estratégia de *Branching*:** Todo o novo desenvolvimento (como a implementação do Modo Escuro e as correções de acessibilidade) foi realizado em um *branch* de *feature* separado (`feature/final-polish`). Isso protegeu a estabilidade do *branch* `main`.
* ***Commits* Semânticos:** Todas as alterações foram salvas usando mensagens de *commit* semânticas (ex: `feat(ui): ...`, `fix(acessibilidade): ...`), criando um histórico de alterações claro e legível.
* ***Pull Requests* (PRs):** As novas funcionalidades foram integradas de volta ao `main` através de um *Pull Request* documentado, que é a prática padrão para revisão de código.
* ***Issues*:** As tarefas da entrega final (como "Implementar Modo Escuro" ou "Verificar Contraste") serão rastreadas usando as *Issues* do GitHub.
* ***Releases* (Versionamento Semântico):** Após o *merge* final, uma *Release* oficial (`v1.0.0`) será criada no GitHub para marcar uma versão de produção estável do projeto.

### 2. Acessibilidade (WCAG 2.1 Nível AA)

Uma auditoria de acessibilidade foi realizada para garantir a conformidade com o nível AA:

* **Modo Escuro Acessível:** Foi implementado um alternador de tema (claro/escuro) que cumpre o requisito. O sistema detecta a preferência do sistema operacional do usuário e também salva a escolha no `localStorage` para visitas futuras.
* **Contraste de Cores (4.5:1):** O tema de cores foi auditado. A cor primária laranja (`--color-primary-500`) foi ajustada para um tom mais escuro (`#D35400`) para garantir um contraste de 4.54:1 contra o fundo branco, passando no critério. O modo escuro também foi verificado para garantir contraste adequado.
* **Navegação por Teclado:** O site é 100% navegável usando apenas a tecla `Tab`. Todos os elementos interativos (links, botões, campos de formulário) possuem estados de `:focus` claros.
* **Suporte a Leitores de Tela:** A estrutura semântica (`<header>`, `<main>`, `<nav>`, `<h1>`, `<fieldset>`) garante que o site seja lido em uma ordem lógica e compreensível por leitores de tela.

### 3. Otimização para Produção

O projeto foi otimizado para um carregamento rápido em produção:

* **Minificação de CSS e JavaScript:** A implementação da minificação foi tentada. No entanto, ela introduziu um *bug* no *deploy* que quebrou o carregamento dos estilos. Como ação corretiva, a minificação foi **revertida** para garantir a estabilidade funcional da aplicação (demonstrado no commit `fix(deploy): Reverte minificação...`). O código está pronto para uma pipeline de *build* automatizada futura.
* **Compressão de Imagens:** Conforme implementado na Etapa 1, o site já utiliza formatos de imagem modernos e comprimidos (`.webp`) com *fallback* (`.jpg`).