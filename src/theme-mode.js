const display = document.querySelector('.display');
const wrapper = document.querySelector('.wrapper');
const themeSwitcher = document.querySelector('.theme-switcher');
const themeSwitcherBtn = document.querySelector('.theme-switcher button');

let mode = 'dark';

themeSwitcher.addEventListener('click', () => {
    if (mode !== 'dark') {
        wrapper.classList.remove('light');
        display.classList.remove('light');
        themeSwitcherBtn.textContent = '🌞';
        mode = 'dark';
    } else {
        wrapper.classList.add('light');
        display.classList.add('light');
        themeSwitcherBtn.textContent = '🌚';
        mode = 'light';
    }
})