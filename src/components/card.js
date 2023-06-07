import { openPopup } from "./modal";
import { popupZoom, popupImage, popupDescription } from "./constants"
import { addLikes, removeLikes, deleteCards } from "./api"
// import { toggleButtonState } from ("./validate");

//Функция для удаление карточки 
function removeCard(cardId, element) {
    element.closest(".card").remove();
    deleteCards(cardId);
  };
  
  
  //Функция для лайки
function toggleLike(cardId, element) {
    const parent = element.parentNode;
    const counters = parseInt(parent.querySelector(".card__like-quantity").textContent);
  
    if (element.classList.contains("card__like_active")) {
      parent.querySelector(".card__like-quantity").textContent = counters-1;
      element.classList.remove("card__like_active")
      removeLikes(cardId);
    } else {
      parent.querySelector(".card__like-quantity").textContent = counters+1;
      element.classList.add("card__like_active");
      addLikes(cardId)
    }

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

export function createNewCard(cardName, imageLink, likes, cardId, userId, user) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = imageLink;
  cardImage.alt = cardName;
  
  //лайки карточек
  const likesQuantity = cardElement.querySelector(".card__like-quantity");
  likesQuantity.textContent = likes.length;
  // const likeCards = cardElement.querySelector(".card__like")
  // if(likes.find((item) => {
  //     return userId === item._id;
  //   })) {
  //     likeCards.classList.add("card__like_acrive");
  //   } 
  const likeCards = likes.find(item => item._id === userId);
  if(likeCards) {
    cardElement.querySelector(".card__like").classList.add("card__like_active");
  }
  
  //удаление карточек
  if(userId != user) {
    cardElement.querySelector(".card__delete").remove();
  } else {
    cardElement.querySelector(".card__delete").addEventListener("click", function() {
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
 
