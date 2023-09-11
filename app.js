const userLanguage = navigator.language || navigator.userLanguage;

const defaultLanguage = 'ro';

let selectedLanguage = userLanguage.toLowerCase().split('-')[0] || defaultLanguage; // Convert to lowercase and then split

const supportedLanguages = ['ro', 'ru'];

if (!supportedLanguages.includes(selectedLanguage)) {
    selectedLanguage = defaultLanguage; // Use the default language if the selected one is not supported
}


const codeExecuted = sessionStorage.getItem('codeExecuted');
console.log("a")
if (!codeExecuted) {
    // Code to execute only once when the page is initially loaded
    // ...

    window.location.href = `index_${selectedLanguage}.html`;

    // Set the flag to indicate that code execution has occurred
    sessionStorage.setItem('codeExecuted', 'true');
}



// Check if the current page matches the selected language before redirecting


function switchToRomanian() {

        window.location.href = 'index_ro.html';
    
    
}

function switchToRussian() {
    if (selectedLanguage !== 'ru') {
        window.location.href = 'index_ru.html';
  
    }
}
