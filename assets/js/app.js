/*
 * ARQUIVO PRINCIPAL DA APLICAÇÃO (SPA)
 * Organizado por funcionalidade:
 * 1. Importações
 * 2. Templates JavaScript (Conteúdo das páginas)
 * 3. Lógica de Roteamento (SPA)
 * 4. Lógica de Validação de Formulário
 * 5. Inicialização
*/

// --- 1. IMPORTAÇÕES ---
// Importa a função que aplica máscaras do nosso outro arquivo.
import { applyMasks } from './masks.js';

// --- 2. TEMPLATES JAVASCRIPT ---
// (Requisito: "Criar sistema de templates JavaScript")

// Template para a Página Inicial (o conteúdo que já estava no index.html)
const homeTemplate = `
<div class="container">
    <section id="hero">
        <h2>Amor que Acolhe, Cuidado que Salva</h2>
        <p>Nossa missão é resgatar, alimentar e oferecer cuidados veterinários para cães e gatos em situação de rua.</p>
        <a href="projetos.html" class="btn btn-primary">Conheça nossas campanhas</a>
        <picture>
            <source srcset="assets/images/sagrado-pet-hero.webp" type="image/webp">
            <source srcset="assets/images/sagrado-pet-hero.jpg" type="image/jpeg">
            <img src="assets/images/sagrado-pet-hero.jpg" alt="Um cachorro e um gato brincando na grama.">
        </picture>
    </section>

    <section id="sobre-nos">
        <h2>Nossa História</h2>
        <article>
            <h3>Quem Somos</h3>
            <p>A Sagrado Pet nasceu do esforço de um pequeno grupo de amigos apaixonados por animais...</p>
            <h3>Nosso Foco</h3>
            <ul>
                <li>Arrecadação de ração para garantir a alimentação.</li>
                <li>Custear tratamentos veterinários, vacinas e castração.</li>
                <li>Promover feiras de adoção responsável.</li>
            </ul>
        </article>
    </section>

    <section id="contato">
        <h2>Fale Conosco</h2>
        <p>Entre em contato para saber mais sobre nosso trabalho ou para tirar dúvidas.</p>
        <address>
            Rua dos Anjos de Patas, 456 - Bairro Animal<br>
            Cidade Feliz, Estado Brasil<br>
            CEP: 12345-678<br>
            Telefone: <a href="tel:+5511987654321">(11) 98765-4321</a><br>
            Email: <a href="mailto:contato@sagradopet.org">contato@sagradopet.org</a>
        </address>
    </section>
</div>
`;

// Dados dos projetos para o template
const projectsData = [
    {
        title: "Campanha 'Ração para Todos'",
        imgWebp: "assets/images/campanha-racao.webp",
        imgJpg: "assets/images/campanha-racao.jpg",
        alt: "Sacos de ração para cães e gatos empilhados.",
        description: "Nosso maior custo e desafio diário é garantir que nenhum dos nossos resgatados passe fome. Com esta campanha, arrecadamos fundos para a compra de ração de qualidade para cães e gatos de todas as idades."
    },
    {
        title: "Campanha 'Cuidado e Castração'",
        imgWebp: "assets/images/campanha-veterinario.webp",
        imgJpg: "assets/images/campanha-veterinario.jpg",
        alt: "Um gato branco sendo examinado gentilmente por um veterinário.",
        description: "Cuidar da saúde é fundamental. Arrecadamos valores para cobrir custos de consultas, vacinas, medicamentos, cirurgias e, principalmente, a castração, que é a forma mais eficaz de controlar a população de animais de rua."
    }
];

// Função de Template (gera o HTML dos projetos a partir dos dados)
function generateProjectsTemplate() {
    let projectsHTML = '';
    
    // Itera sobre os dados e cria um card para cada projeto
    for (const project of projectsData) {
        projectsHTML += `
        <article class="col-6 card">
            <h3>${project.title}</h3>
            <picture>
                <source srcset="${project.imgWebp}" type="image/webp">
                <source srcset="${project.imgJpg}" type="image/jpeg">
                <img src="${project.imgJpg}" alt="${project.alt}">
            </picture>
            <div class="card-content">
                <p>${project.description}</p>
            </div>
        </article>
        `;
    }

    // Retorna o HTML completo da página
    return `
    <div class="container">
        <section id="nossas-campanhas">
            <h2>Nossas Campanhas Ativas</h2>
            <p>Cada doação faz a diferença na vida de um animal. Veja como seu apoio se transforma em cuidado:</p>
            <div class="grid-12">
                ${projectsHTML}
            </div>
        </section>

        <section id="como-ajudar">
            <h2>Como Você Pode Ajudar</h2>
            <div id="voluntariado">
                <h3>Seja um Voluntário</h3>
                <p>Precisamos de ajuda com transporte de animais, organização de feiras de adoção e lares temporários...</p>
                <a href="cadastro.html" class="btn btn-primary">Quero ser voluntário!</a>
            </div>
            <div id="doacao">
                <h3>Faça uma Doação</h3>
                <p>Sua contribuição financeira é vital para mantermos as campanhas ativas...</p>
                <p>Doe via PIX para nossa chave: <strong>ajuda@sagradopet.org</strong></p>
            </div> 
        </section>
    </div>
    `;
}

// Template para a Página de Cadastro
// ATUALIZAÇÃO: Adicionamos spans vazios <span class="error-message"></span>
// para exibir os erros de validação do JavaScript.
const cadastroTemplate = `
<div class="container">
    <h2>Faça Parte da Mudança</h2>
    <p>Preencha seus dados para se tornar um voluntário, doador ou simplesmente para receber notícias sobre nosso trabalho.</p>

    <form action="#" method="post" id="registration-form" novalidate>
        <fieldset>
            <legend>Dados Pessoais</legend>

            <div class="form-group">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required minlength="3">
                <span class="error-message" data-for="nome"></span>
            </div>
            
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required placeholder="seuemail@dominio.com">
                <span class="error-message" data-for="email"></span>
            </div>

            <div class="form-group">
                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                <span class="error-message" data-for="cpf"></span>
            </div>

            <div class="form-group">
                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
                <span class="error-message" data-for="telefone"></span>
            </div>

            <div class="form-group">
                <label for="data_nascimento">Data de Nascimento:</label>
                <input type="date" id="data_nascimento" name="data_nascimento" required>
                <span class="error-message" data-for="data_nascimento"></span>
            </div>
        </fieldset>
        
        <fieldset>
            <legend>Endereço</legend>
            
            <div class="form-group">
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required placeholder="00000-000">
                <span class="error-message" data-for="cep"></span>
            </div>

            <div class="form-group">
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>
                <span class="error-message" data-for="endereco"></span>
            </div>

            <div class="form-group">
                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>
                <span class="error-message" data-for="cidade"></span>
            </div>

            <div class="form-group">
                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required>
                <span class="error-message" data-for="estado"></span>
            </div>
        </fieldset>

        <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
    
    </form>
</div>
`;


// --- 3. LÓGICA DE ROTEAMENTO (SPA) ---
// (Requisito: "Implementar sistema de Single Page Application (SPA) básico")

// Seleciona a área de conteúdo principal
const mainContent = document.getElementById('main-content');

// Mapeia os caminhos (href) para os templates
const routes = {
    'index.html': homeTemplate,
    'projetos.html': generateProjectsTemplate(), // Executa a função para obter o HTML
    'cadastro.html': cadastroTemplate,
};

// Função para carregar o conteúdo da página
function loadContent(path) {
    // Remove o ".html" ou a barra inicial para encontrar a rota
    const routeKey = path.replace('.html', '').replace('/', '');
    // Se a rota for vazia (ex: "dominio.com/"), usa 'index'
    const key = routeKey === 'index' || routeKey === '' ? 'index.html' : `${routeKey}.html`;

    // Carrega o HTML do template correspondente
    mainContent.innerHTML = routes[key] || homeTemplate; // Se não achar, vai para home
    window.scrollTo(0, 0); // Rola para o topo

    // --- PÓS-CARREGAMENTO ---
    // Se a página de cadastro foi carregada, aplica as máscaras
    if (key === 'cadastro.html') {
        applyMasks();
        // Adiciona o listener de validação ao formulário
        initFormValidation(); 
    }
}

// Função de navegação
function navigateTo(e) {
    // Previne o recarregamento da página
    e.preventDefault(); 
    
    // Obtém o caminho do link (ex: "projetos.html")
    const path = e.currentTarget.getAttribute('href');
    
    // Atualiza a URL na barra do navegador
    history.pushState({}, '', path);
    
    // Carrega o novo conteúdo
    loadContent(path);

    // Fecha o menu hambúrguer se estiver aberto
    document.getElementById('menu-toggle').checked = false;
}

// Adiciona o listener de 'popstate' (para o botão "Voltar" do navegador)
window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
});


// --- 4. LÓGICA DE VALIDAÇÃO DE FORMULÁRIO ---
// (Requisito: "Sistema de verificação de consistência de dados em formulários")

// Função para mostrar erro
function showError(fieldId, message) {
    const errorSpan = document.querySelector(`.error-message[data-for="${fieldId}"]`);
    const field = document.getElementById(fieldId);
    if (errorSpan) errorSpan.textContent = message;
    if (field) field.style.borderColor = 'var(--color-feedback-error)';
}

// Função para limpar erro
function clearError(fieldId) {
    const errorSpan = document.querySelector(`.error-message[data-for="${fieldId}"]`);
    const field = document.getElementById(fieldId);
    if (errorSpan) errorSpan.textContent = '';
    if (field) field.style.borderColor = ''; // Volta ao padrão
}

// Função principal de validação
function validateForm() {
    let isValid = true;
    
    // 1. Nome Completo
    const nome = document.getElementById('nome');
    if (nome.value.trim().length < 3) {
        showError('nome', 'Nome deve ter pelo menos 3 caracteres.');
        isValid = false;
    } else {
        clearError('nome');
    }

    // 2. Email
    const email = document.getElementById('email');
    // Regex simples para formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError('email', 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else {
        clearError('email');
    }

    // 3. CPF (Verificação de consistência - formato)
    const cpf = document.getElementById('cpf');
    if (cpf.value.length !== 14) { // 000.000.000-00
        showError('cpf', 'CPF deve estar no formato 000.000.000-00.');
        isValid = false;
    } else {
        clearError('cpf');
    }
    
    // 4. Telefone
    const telefone = document.getElementById('telefone');
    if (telefone.value.length !== 15) { // (00) 00000-0000
        showError('telefone', 'Telefone deve estar no formato (00) 00000-0000.');
        isValid = false;
    } else {
        clearError('telefone');
    }

    // 5. Data de Nascimento
    const data = document.getElementById('data_nascimento');
    if (data.value === '') {
        showError('data_nascimento', 'Data de nascimento é obrigatória.');
        isValid = false;
    } else {
        clearError('data_nascimento');
    }

    // (Adicione validações para CEP, Endereço, Cidade, Estado...)

    return isValid;
}

// Função para inicializar os listeners do formulário
function initFormValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    // Desativa a validação nativa do HTML5 (novalidate)
    // para usarmos a nossa validação JS.

    form.addEventListener('submit', (e) => {
        // Previne o envio do formulário
        e.preventDefault(); 
        
        // Roda nossa validação
        const isFormValid = validateForm();

        if (isFormValid) {
            // Se for válido, mostra sucesso e limpa o form
            alert('Cadastro realizado com sucesso!');
            form.reset();
        } else {
            // Se for inválido, o usuário verá as mensagens de erro
            alert('Por favor, corrija os erros no formulário.');
        }
    });
}


// --- 5. INICIALIZAÇÃO ---

// Quando o DOM estiver pronto, configura os listeners de navegação.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona TODOS os links de navegação (desktop e mobile)
    const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a, .btn[href]');
    
    navLinks.forEach(link => {
        // Verifica se é um link interno (não começa com http)
        if (!link.getAttribute('href').startsWith('http')) {
            link.addEventListener('click', navigateTo);
        }
    });

    // Carrega o conteúdo da página atual (caso o usuário chegue por /projetos.html)
    loadContent(window.location.pathname);
});