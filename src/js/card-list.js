import cards from './menu.json'
import cardsTpl from '../templates/cards.hbs'

const createCardListMarkup = (cards) => {
    return cardsTpl(cards)
}

export const cardListMarkup = createCardListMarkup(cards)