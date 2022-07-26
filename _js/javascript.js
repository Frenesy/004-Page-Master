let darkModeBtn = document.querySelector('.dm-button');
let AllPage = document.querySelector('.page-mode');
        
// MENU E MENU MOBILE
function onMenuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
// DARK MODE
function DarkMode(){
    if (darkModeBtn.classList.contains('active')) {
        darkModeBtn.classList.remove('active');
        AllPage.classList.remove('dark-mode');

        localStorage.setItem('DarkMode', 0); /* 01 */
        if (document.title == 'Layout 04') {
            document.querySelector('header').classList.remove('active');
        }
    } else {
        darkModeBtn.classList.add('active');
        AllPage.classList.add('dark-mode');

        localStorage.setItem('DarkMode', 1); /* 01 */
        if (document.title == 'Layout 04') {
            document.querySelector('header').classList.add('active');
        }
    }
}
// VERIFICAR SE A PÁGINA ESTÁ EM DARK MODE
function onDarkModeChecked(){
    if (localStorage.getItem('DarkMode') == 1) {
        darkModeBtn.classList.add('active');
        AllPage.classList.add('dark-mode');
        
        if (document.title == 'Layout 04') {
            document.querySelector('header').classList.add('active');
        }
    }
}

/* 

(01)    =   A sessionStorage e localStorage são recursos do HTML5 que permite que você salve na sessão do navegador, de forma fixa (localStorage) ou temporária (sessionStorage) algumas informações, e com isso você pode acessar na outra página.

    localStorage.setItem('DarkMode', 0);    -   Adiciona uma Storage
    localStorage.getItem('DarkMode');       -   Recupera a Storage

*/