import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { buttonOpenPopupProfile, popupCloseButtons, popupElement, 
  profileUserName, 
  profileUserAbout, 
  inputUserName, 
  inputAboutMySelf, 
  buttonOpenPopupCard, 
  popupElementCard, 
  buttonAddCard, 
  cardContainer, 
  popupProfile, 
  popupFormProfile, 
  validationConfig, 
  initialCards, 
  popupCardForm, 
  nameInputPopup, 
  nameInputLink } from "./constants";
import { openPopup, closePopup, openPopupCard } from './modal';
import { createNewCard } from './card';
import { enableValidation } from './validate'; 



enableValidation(validationConfig);

//Закрытия попапов 
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closePopup(button.closest(".popup")));
});


//Открытия попап профилья  
function openPopupProfile () {
  openPopup(popupProfile);
  inputUserName.value = profileUserName.textContent;
  inputAboutMySelf.value = profileUserAbout.textContent;
}
buttonOpenPopupProfile.addEventListener("click", openPopupProfile);


//Открытия попап для добавления карточки
buttonOpenPopupCard.addEventListener("click", openPopupCard);


//Связка попап с профилем
function editProfile(event) {
  event.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileUserAbout.textContent = inputAboutMySelf.value;

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
 function addCard (event) {
  event.preventDefault();
 
  renderCard(nameInputPopup.value, nameInputLink.value, cardContainer)

  popupCardForm.reset();

  closePopup(popupElementCard)
};

popupCardForm.addEventListener("submit", addCard);

//Установка состояние кнопки добавление карточки
function setStatusAddButton (isFormValidation) {
  if (isFormValidation) {
    buttonAddCard.removeAttribute("disabled");
    buttonAddCard.classList.remove("popup_button-save_inactive"); 
  } else {
    buttonAddCard.setAttribute("disabled", true);
    buttonAddCard.classList.add("popup_button-save_inactive"); 
  }
};

popupCardForm.addEventListener("submit", function (event) {
  event.preventDefault();

  setStatusAddButton(false);
});
