/*
  Este script aplica máscaras dinâmicas aos campos do formulário
  quando o usuário digita.
*/
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Função genérica para aplicar uma máscara a um elemento de input.
     * @param {HTMLInputElement} element - O campo de input (ex: cpfInput).
     * @param {Function} maskFunction - A função que formata o valor (ex: cpfMask).
     */
    const applyMask = (element, maskFunction) => {
        // O evento 'input' é acionado a cada tecla digitada
        element.addEventListener('input', (e) => {
            e.target.value = maskFunction(e.target.value);
        });
    };

    /**
     * Formata um valor para o padrão de CPF (000.000.000-00).
     * @param {string} value - O valor atual do campo.
     * @returns {string} - O valor formatado.
     */
    const cpfMask = (value) => {
        return value
            .replace(/\D/g, '') // Remove tudo o que não é dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Bloco 1: 000.
            .replace(/(\d{3})(\d)/, '$1.$2') // Bloco 2: 000.000.
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Bloco 3: 000.000.000-00
            .substring(0, 14); // Limita o tamanho máximo
    };

    /**
     * Formata um valor para o padrão de Telefone Celular ((00) 00000-0000).
     * @param {string} value - O valor atual do campo.
     * @returns {string} - O valor formatado.
     */
    const phoneMask = (value) => {
        return value
            .replace(/\D/g, '') // Remove tudo o que não é dígito
            .replace(/(\d{2})(\d)/, '($1) $2') // Bloco 1: (00)
            .replace(/(\d{5})(\d)/, '$1-$2') // Bloco 2: (00) 00000-
            .substring(0, 15); // Limita o tamanho máximo
    };

    /**
     * Formata um valor para o padrão de CEP (00000-000).
     * @param {string} value - O valor atual do campo.
     * @returns {string} - O valor formatado.
     */
    const cepMask = (value) => {
        return value
            .replace(/\D/g, '') // Remove tudo o que não é dígito
            .replace(/(\d{5})(\d)/, '$1-$2') // Bloco 1: 00000-
            .substring(0, 9); // Limita o tamanho máximo
    };

    // --- Seleciona os elementos (campos) do formulário ---
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // --- Aplica as máscaras ---
    // Verifica se o elemento existe na página antes de aplicar a máscara
    
    if (cpfInput) {
        applyMask(cpfInput, cpfMask);
    }
    
    if (phoneInput) {
        applyMask(phoneInput, phoneMask);
    }

    if (cepInput) {
        applyMask(cepInput, cepMask);
    }

});