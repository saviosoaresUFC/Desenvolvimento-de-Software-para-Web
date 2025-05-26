document.addEventListener('DOMContentLoaded', () => {

    const themeButton = document.getElementById('themeButton');
    const themeModal = document.getElementById('themeModal');
    const themeOptions = document.querySelectorAll('.theme-option');
    const body = document.body;

    themeButton.addEventListener('click', (event) => {
        themeModal.classList.toggle('hidden');
        event.stopPropagation();
    });

    window.addEventListener('click', (event) => {
        if (!themeModal.contains(event.target) && event.target !== themeButton && !themeButton.contains(event.target)) {
            themeModal.classList.add('hidden');
        }
    });

    const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    let currentTheme = localStorage.getItem('theme') || 'system';

    const applyTheme = (theme) => {
        body.classList.remove('dark-mode');

        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else if (theme === 'light') {
        } else { // 'system'
            if (systemThemeMedia.matches) {
                body.classList.add('dark-mode');
            }
        }
    };

    const setTheme = (themeChoice) => {
        currentTheme = themeChoice;
        localStorage.setItem('theme', themeChoice);

        applyTheme(themeChoice);

        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.theme === themeChoice) {
                option.classList.add('active');
            }
        });

        themeModal.classList.add('hidden');
    };

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            setTheme(option.dataset.theme);
        });
    });

    systemThemeMedia.addEventListener('change', () => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });

    setTheme(currentTheme);
});