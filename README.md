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