document.addEventListener('DOMContentLoaded', () => {

    const themeButton = document.getElementById('themeButton');
    const themeModal = document.getElementById('themeModal');
    const themeOptions = document.querySelectorAll('.theme-option');
    const body = document.body;


    // Abre/Fecha o modal ao clicar no botão principal
    themeButton.addEventListener('click', (event) => {
        themeModal.classList.toggle('hidden');
        event.stopPropagation(); // Impede que o clique feche o modal imediatamente
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (event) => {
        // Verifica se o clique NÃO foi no modal e NÃO foi no botão
        if (!themeModal.contains(event.target) && event.target !== themeButton && !themeButton.contains(event.target)) {
            themeModal.classList.add('hidden');
        }
    });

    const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    let currentTheme = localStorage.getItem('theme') || 'system'; // Default é 'system'

    // Função para aplicar o tema (dark/light)
    const applyTheme = (theme) => {
        body.classList.remove('dark-mode'); // Limpa a classe antes

        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else if (theme === 'light') {
            // Nenhuma classe necessária para light (é o padrão)
        } else { // theme === 'system'
            if (systemThemeMedia.matches) {
                body.classList.add('dark-mode');
            }
        }
    };

    // Função para definir o tema (chama applyTheme e atualiza UI)
    const setTheme = (themeChoice) => {
        currentTheme = themeChoice;
        localStorage.setItem('theme', themeChoice); // Salva a escolha

        // Aplica o tema visual
        applyTheme(themeChoice);

        // Atualiza a classe 'active' nos botões do modal
        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.theme === themeChoice) {
                option.classList.add('active');
            }
        });

        // Esconde o modal após escolher
        themeModal.classList.add('hidden');
    };

    // Adiciona evento de clique para cada opção no modal
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedTheme = option.dataset.theme;
            setTheme(selectedTheme);
        });
    });

    // Ouve por mudanças no tema do sistema *se* 'system' estiver selecionado
    systemThemeMedia.addEventListener('change', (event) => {
        if (currentTheme === 'system') {
            applyTheme('system'); // Re-aplica baseado na nova preferência do sistema
        }
    });

    // Aplica o tema salvo (ou 'system') ao carregar a página
    setTheme(currentTheme);
});