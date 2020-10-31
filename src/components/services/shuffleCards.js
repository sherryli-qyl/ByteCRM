import { getDate, sortDate } from './DateManager';
import Cards from '../../js/Cards';

function shuffleCards(cardsList) {
  const newCardsArray = [];
  sortDate(cardsList);
  for (const i in cardsList) {
    const newDate = getDate(cardsList[i].date);
    const sameCards = [];
    const result = checkduplicate(newDate, cardsList[i], newCardsArray);
    if (!result) {
      sameCards.push(cardsList[i]);
      const cards = new Cards(newDate, sameCards);
      newCardsArray.push(cards);
    }
  }
  sortDate(newCardsArray);
  return newCardsArray;
}

function checkduplicate(date, card, cardsArray) {
  for (const i in cardsArray) {
    if (date === cardsArray[i].date) {
      cardsArray[i].content.push(card);
      return cardsArray;
    }
  }
  return false;
}

export default shuffleCards;
