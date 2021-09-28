import { refs } from './js/refs'
import { cardListMarkup } from './js/card-list'
import { onChangeThemeClick } from './js/theme-switcher'
import './css/styles.css'


// СОЗДАЕМ КАРТОЧКИ МЕНЮ НА СТРАНИЦЕ
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup)


// ПЕРЕКЛЮЧАЕМ ТЕМУ СТРАНИЦЫ
refs.themeSwitcher.addEventListener('change', onChangeThemeClick)