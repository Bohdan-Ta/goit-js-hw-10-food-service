import { refs } from './refs'

//====== created markup ========
import cards from './menu.json'
import menuTemplates from '../templates/cardsMenu.hbs'

const createMarkupMenu = (cards) => {
    return menuTemplates(cards)
}
const cardListMarkup = createMarkupMenu(cards)
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup)
//========
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let theme = localStorage.getItem('theme')

const setThemeClass = (add, remove) => {
    document.body.classList.add(add)
    document.body.classList.remove(remove)
}

const setDarkTheme = () => {
    setThemeClass(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('theme', 'dark')
    refs.changeColorTheme.checked = true
}

const setLightTheme = () => {
    setThemeClass(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('theme', 'light')
    refs.changeColorTheme.checked
}

// ======= verification conditions =======
if (theme === 'dark') {
    setDarkTheme()
}

const onThemeClick = () => {
    theme = localStorage.getItem('theme')

    theme !== 'dark' ?
        setDarkTheme() :
        setLightTheme()
}
refs.themeSwch.addEventListener('change', onThemeClick)