import { openPopup } from "./modal";
import { popupZoom, popupImage, popupDescription, popupDeleteCard, popupDeleteButton, cardDeleteButton } from "./constants"
import { addLikes, removeLikes, deleteCards } from "./api"
import { toggleLike, removeCard } from "./index"
// import { toggleButtonState } from ("./validate");


console.log()
//Открытия попап, добавление картинки и описание картинки в попап
function zoomImageCard(cardName, imageLink) {
    openPopup(popupZoom);
    popupImage.src = imageLink;
    popupDescription.textContent = cardName;
    popupImage.alt = cardName;
  };
console.log(cardDeleteButton)
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
  // const likeCards = likes.find(item => item._id === user);
  // if(likeCards) {
  //   cardElement.querySelector(".card__like").classList.add("card__like_active");
  // }
  
  //удаление карточек
  if (userId !== user) {
    cardElement.querySelector(".card__delete").remove();
    
  } else {
    cardElement.querySelector(".card__delete").addEventListener("click", function() {
      // openPopup(popupDeleteCard)
      removeCard(cardId, this)
    });
  } 

  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(".card__like").addEventListener("click", function() {
    toggleLike(cardId, this)
  });
  cardImage.addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
  return cardElement;
  
 }; 
 
