/*
 * MÓDULO DE MÁSCARAS (Versão Etapa 3 - Modular)
 * Exporta uma função 'applyMasks' que pode ser chamada
 * para aplicar as máscaras nos campos corretos.
*/

// Funções privadas de máscara
const cpfMask = (value) => {
    return value
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .substring(0, 14);
};

const phoneMask = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substring(0, 15);
};

const cepMask = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substring(0, 9);
};

// Função privada para aplicar
const applyMask = (element, maskFunction) => {
    if (element) {
        element.addEventListener('input', (e) => {
            e.target.value = maskFunction(e.target.value);
        });
    }
};

// --- FUNÇÃO PÚBLICA QUE SERÁ EXPORTADA ---
// O 'export' na frente desta linha é o que estava faltando
// no seu arquivo antigo.
export function applyMasks() {
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    applyMask(cpfInput, cpfMask);
    applyMask(phoneInput, phoneMask);
    applyMask(cepInput, cepMask);
}