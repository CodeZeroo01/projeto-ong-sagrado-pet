/*
 * ARQUIVO PRINCIPAL DA APLICAÇÃO (SPA) - v2
 * Organizado por funcionalidade:
 * 1. Importações
 * 2. Templates JavaScript
 * 3. Lógica de Roteamento (SPA)
 * 4. Lógica de Validação de Formulário
 * 5. Inicialização
*/

// --- 1. IMPORTAÇÕES ---
import { applyMasks } from './masks.js';

// --- 2. TEMPLATES JAVASCRIPT ---

// Template para a Página Inicial
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

const mainContent = document.getElementById('main-content');
const routes = {
    'index.html': homeTemplate,
    'projetos.html': generateProjectsTemplate(),
    'cadastro.html': cadastroTemplate,
};

// *** CORREÇÃO: Nova função para vincular (bind) TODOS os links ***
function bindAllNavLinks() {
    // Seleciona todos os links que devem acionar o roteador
    const allLinks = document.querySelectorAll(
        '.main-nav a, .mobile-nav a, .btn[href], a[href="cadastro.html"]'
    );

    allLinks.forEach(link => {
        // Verifica se é um link interno
        if (!link.getAttribute('href').startsWith('http')) {
            // Remove o listener antigo (se houver) para evitar duplicatas
            link.removeEventListener('click', navigateTo);
            // Adiciona o listener
            link.addEventListener('click', navigateTo);
        }
    });
}

// Função para carregar o conteúdo
function loadContent(path) {
    const routeKey = path.replace('.html', '').replace('/', '');
    const key = routeKey === 'index' || routeKey === '' ? 'index.html' : `${routeKey}.html`;

    mainContent.innerHTML = routes[key] || homeTemplate;
    window.scrollTo(0, 0);

    // Se a página de cadastro foi carregada, aplica as máscaras e validação
    if (key === 'cadastro.html') {
        applyMasks();
        initFormValidation(); 
    }

    // *** CORREÇÃO: Chama a função de bind DEPOIS que o novo conteúdo foi carregado ***
    bindAllNavLinks();
}

// Função de navegação
function navigateTo(e) {
    e.preventDefault(); 
    const path = e.currentTarget.getAttribute('href');
    
    // Evita recarregar a mesma página
    if (window.location.pathname.endsWith(path)) return; 

    history.pushState({}, '', path);
    loadContent(path);

    document.getElementById('menu-toggle').checked = false;
}

window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
});


// --- 4. LÓGICA DE VALIDAÇÃO DE FORMULÁRIO ---

// (Esta seção permanece inalterada)
function showError(fieldId, message) {
    const errorSpan = document.querySelector(`.error-message[data-for="${fieldId}"]`);
    const field = document.getElementById(fieldId);
    if (errorSpan) errorSpan.textContent = message;
    if (field) field.style.borderColor = 'var(--color-feedback-error)';
}
function clearError(fieldId) {
    const errorSpan = document.querySelector(`.error-message[data-for="${fieldId}"]`);
    const field = document.getElementById(fieldId);
    if (errorSpan) errorSpan.textContent = '';
    if (field) field.style.borderColor = '';
}
function validateForm() {
    let isValid = true;
    
    const nome = document.getElementById('nome');
    if (nome.value.trim().length < 3) {
        showError('nome', 'Nome deve ter pelo menos 3 caracteres.');
        isValid = false;
    } else { clearError('nome'); }

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError('email', 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else { clearError('email'); }

    const cpf = document.getElementById('cpf');
    if (cpf.value.length !== 14) {
        showError('cpf', 'CPF deve estar no formato 000.000.000-00.');
        isValid = false;
    } else { clearError('cpf'); }
    
    const telefone = document.getElementById('telefone');
    if (telefone.value.length !== 15) {
        showError('telefone', 'Telefone deve estar no formato (00) 00000-0000.');
        isValid = false;
    } else { clearError('telefone'); }

    const data = document.getElementById('data_nascimento');
    if (data.value === '') {
        showError('data_nascimento', 'Data de nascimento é obrigatória.');
        isValid = false;
    } else { clearError('data_nascimento'); }

    // (Validações de endereço omitidas por brevidade, mas devem ser adicionadas aqui)
    const cep = document.getElementById('cep');
    if (cep.value === '') {
        showError('cep', 'CEP é obrigatório.');
        isValid = false;
    } else { clearError('cep'); }

    const endereco = document.getElementById('endereco');
    if (endereco.value === '') {
        showError('endereco', 'Endereço é obrigatório.');
        isValid = false;
    } else { clearError('endereco'); }

    const cidade = document.getElementById('cidade');
    if (cidade.value === '') {
        showError('cidade', 'Cidade é obrigatória.');
        isValid = false;
    } else { clearError('cidade'); }

    const estado = document.getElementById('estado');
    if (estado.value === '') {
        showError('estado', 'Estado é obrigatório.');
        isValid = false;
    } else { clearError('estado'); }

    return isValid;
}
function initFormValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const isFormValid = validateForm();

        if (isFormValid) {
            alert('Cadastro realizado com sucesso!');
            form.reset();
        } else {
            alert('Por favor, corrija os erros no formulário.');
        }
    });
}



// --- 5. LÓGICA DE MODO ESCURO (DARK MODE) ---

function initThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (!themeToggleButton) return; // Se o botão não existir, para aqui

    const body = document.body;
    const luaIcon = '🌙';
    const solIcon = '☀️';

    // 1. Função para aplicar o tema (seja do localStorage ou o padrão)
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = solIcon;
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggleButton.textContent = luaIcon;
            localStorage.setItem('theme', 'light');
        }
    }

    // 2. Listener de clique para o botão
    themeToggleButton.addEventListener('click', () => {
        // Verifica se o corpo JÁ TEM a classe 'dark-mode'
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Se tiver, o novo tema será 'light'. Se não tiver, será 'dark'.
        applyTheme(isDarkMode ? 'light' : 'dark');
    });

    // 3. Verifica no carregamento inicial qual tema usar
    // (Pega do localStorage OU detecta a preferência do sistema operacional)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme); // Aplica o tema salvo
    } else if (prefersDark) {
        applyTheme('dark'); // Aplica o tema do SO
    } else {
        applyTheme('light'); // Padrão
    }
}


// --- 6. INICIALIZAÇÃO ---
// (Esta seção substitui a sua antiga "Seção 5")

// Quando o DOM estiver pronto...
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Carrega o conteúdo da rota atual (lógica da SPA)
    loadContent(window.location.pathname); 
    
    // 2. Inicializa o botão de tema (Modo Escuro)
    // (Como o header está sempre presente, podemos chamar isso na carga inicial)
    initThemeToggle();
});