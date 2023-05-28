import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { buttonOpenPopupProfile, 
  buttonClosePopupProfile, 
  popupElement, 
  buttonSavePopupForm, 
  profileUserName, 
  profileUserAbout, 
  inputUserName, 
  inputAboutMySelf, 
  buttonOpenPopupCard, 
  buttonClosePopupCard, 
  popupElementCard, 
  buttonAddCard, 
  cardContainer, 
  popupImage, 
  popupDescription, 
  buttonClosePopupZoom, 
  popupZoom, 
  popupProfile, 
  popupFormProfile, 
  popupFormInput, 
  validationConfig, 
  initialCards, 
  parentWrapper, 
  nameInputPopup, 
  nameInputLink } from "./constants";
import { openPopup, closePopup, closePopupProfile, openPopupCard, closePopupCards, closePopupImage } from './modal';
import { createNewCard } from './card';
import { enableValidation } from './validate'; 



enableValidation(validationConfig);

//Открытия попап профилья  
function openPopupProfile () {
  openPopup(popupProfile);
  inputUserName.value = profileUserName.textContent;
  inputAboutMySelf.value = profileUserAbout.textContent;
}
buttonOpenPopupProfile.addEventListener("click", openPopupProfile);

 //Закрытия попап профилья
buttonClosePopupProfile.addEventListener("click", closePopupProfile);

//Открытия попап для добавления карточки
buttonOpenPopupCard.addEventListener("click", openPopupCard);

//Закрытия попап для добавления карточки
buttonClosePopupCard.addEventListener("click", closePopupCards);

//Закрытия попап для зум картинки
buttonClosePopupZoom.addEventListener("click", closePopupImage);


//Связка попап с профилем
function editProfile(event) {
  event.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileUserAbout.textContent = inputAboutMySelf.value;
  
  inputUserName.value = "";
  inputAboutMySelf.value = "";

  closePopup(popupElement);
}

  popupFormProfile.addEventListener("submit", editProfile);  
  
 
 //Рендринг карточки
 function renderCard (cardName, imageLink, container) {
  const card = createNewCard(cardName, imageLink);
  container.prepend(card);
 }



//Перебирание массива
initialCards.forEach((arrayElem) => {
  renderCard(arrayElem.name, arrayElem.link, cardContainer);

});

//Добавление форм, названия, ссылки
buttonAddCard.addEventListener("click", function (element) {
  element.preventDefault();
 
  renderCard(nameInputPopup.value, nameInputLink.value, cardContainer)

  nameInputPopup.value = "";
  nameInputLink.value = "";

  closePopup(popupElementCard)
});

