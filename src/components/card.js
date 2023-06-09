import { closePopup, openPopup } from "./modal";
import { popupZoom, popupImage, popupDescription, popupDeleteCard, popupDeleteButton, cardDeleteButton } from "./constants"
import { toggleLike, removeCard } from "./index"
// import { toggleButtonState } from ("./validate");



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

export function createNewCard(cardName, imageLink, likes, cardId, userId, user) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = imageLink;
  cardImage.alt = cardName;
  
  //лайки карточек
  const likesQuantity = cardElement.querySelector(".card__like-quantity");
  likesQuantity.textContent = likes.length;
  const likeCards = cardElement.querySelector(".card__like")

  if (likes.find((item) => {
      return item._id === user;
    })) {
      likeCards.classList.add("card__like_active");
    } 

  //удаление карточек
  if (userId !== user) {
    cardElement.querySelector(".card__delete").remove();
    
  } else {
    cardElement.querySelector(".card__delete").addEventListener("click", function() {
      openPopup(popupDeleteCard, cardId)
      this.classList.add("delete_active")
      
    });
  } 

  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(".card__like").addEventListener("click", function() {
    toggleLike(cardId, this)
  });
  cardImage.addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
  return cardElement;
  
  
 }; 
 
 //Удаление карточек через модальное окно
 popupDeleteButton.addEventListener("click", function() {
  const cardBlock = document.querySelector(".delete_active");
  const cardId = this.dataset.id;
  removeCard(cardId, cardBlock)
  closePopup(popupDeleteCard)
 })