import { refs } from './refs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let mode = localStorage.getItem('mode')

const setThemeClass = (add, remove) => {
    document.body.classList.add(add)
    document.body.classList.remove(remove)
}

//  1. добавить класс dark-theme/light-theme на body
//  2. обновить значение темы в localStorage
//  3. сдвинуть/вернуть в начальное положение ползунка
const setDarkTheme = () => {
    setThemeClass(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('mode', 'dark')
    refs.tumbler.checked = true
}

const setLightTheme = () => {
    setThemeClass(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('mode', 'light')
    refs.tumbler.checked
}

// если пользователь уже заходил и включил dark mode
if (mode === 'dark') {
    setDarkTheme()
}

// осуществляем переключение темы по нажатию на тумблер 
export const onChangeThemeClick = () => {
    mode = localStorage.getItem('mode')

    mode !== 'dark' ?
        setDarkTheme() :
        setLightTheme()
}