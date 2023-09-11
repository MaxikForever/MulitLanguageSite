
const userLanguage = navigator.language || navigator.userLanguage;

const defaultLanguage = 'ro';

let selectedLanguage = userLanguage.split('-')[0] || defaultLanguage;
const supportedLanguages = ['ro', 'ru'];


if (!supportedLanguages.includes(selectedLanguage)) {
    selectedLanguage = defaultLanguage; // Use the default language if the selected one is not supported
}

window.location.href = `index_${selectedLanguage}.html`;

function switchToRomanian() {
    window.location.href = 'index_ro.html';
    alert("switch");
}

function switchToRussian() {
    window.location.href = 'index_ru.html';
    alert("switch")
}

