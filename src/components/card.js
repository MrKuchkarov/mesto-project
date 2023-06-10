import { closePopup, openPopup } from "./modal";
import { popupZoom, popupImage, popupDescription, popupDeleteCard, popupDeleteButton, cardDeleteButton } from "./constants"
import { toggleButtonLike, removeCard } from "./index"

//Открытия попап, добавление картинки и описание картинки в попап
function zoomImageCard(cardName, imageLink) {
    openPopup(popupZoom);
    popupImage.src = imageLink;
    popupDescription.textContent = cardName;
    popupImage.alt = cardName;
  };

//Создания и добавление карточки 
export const cardTemplate = document.querySelector("#card-template").content;

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
  const deleteButton = cardElement.querySelector(".card__delete")
  if (userId !== user) {
    deleteButton.remove();
    
  } else {
    deleteButton.addEventListener("click", () => removeCard(cardId, deleteButton));
  } 

  cardElement.querySelector(".card__title").textContent = cardName;
  likeCards.addEventListener("click", () => toggleButtonLike(cardId, likeCards));
  cardImage.addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
  return cardElement;
  
 }; 