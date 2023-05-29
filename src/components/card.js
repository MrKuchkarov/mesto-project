import { openPopup } from "./modal";
import { popupZoom, popupImage, popupDescription } from "./constants"
// import { toggleButtonState } from ("./validate");

//Функция для удаление карточки 
function removeCard(event) {
    event.target.closest(".card").remove();
  };
  
  
  //Функция для лайки
function toggleLike(evt) {
    evt.target.classList.toggle("card__like_active");
  };


//Открытия попап, добавление картинки и описание картинки в попап
function zoomImageCard(cardName, imageLink) {
    openPopup(popupZoom);
    popupImage.src = imageLink;
    popupDescription.textContent = cardName;
    popupImage.alt = cardName;
  };

//Создания и добавление карточки
export const cardTemplate = document.querySelector("#card-template").content;
// const cards = document.querySelector(".card");

export function createNewCard(cardName, imageLink) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.setAttribute("src", imageLink);
  cardImage.setAttribute("alt", cardName);
  
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(".card__delete").addEventListener("click", removeCard);
  cardElement.querySelector(".card__like").addEventListener("click", toggleLike);

  cardImage.addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
  return cardElement;
  
 }; 
 
