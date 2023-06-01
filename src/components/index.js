import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { buttonOpenPopupProfile, popupCloseButtons, popupElement, 
  profileUserName, profileUserAbout, profileAvatar,
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
  nameInputLink, 
  buttonAvatar, avatarForm, avatarInput,
  popupName, popupDescriptionProf, popupAvatar, popupSaveAvatar } from "./constants";
import { openPopup, closePopup, openPopupCard, openPopupAvatar } from './modal';
import { createNewCard } from './card';
import { enableValidation, toggleButtonState } from './validate'; 
import { getCards, getUser, editProfile, editAvatar } from  "./api";
import { disableButton } from './utils';



enableValidation(validationConfig);

//Закрытия попапов 
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closePopup(button.closest(".popup")));
});


//Запрос о пользователе
getUser().then(user => {
  profileUserName.textContent = user.name;
  profileUserAbout.textContent = user.about;
  profileAvatar.src = user.avatar;
})


//Связка попап с профилем
function editProfileSubmit (evt) {
  evt.preventDefault();
  editProfile({ name: popupName.value, about: popupDescriptionProf.value })
    .then((data) => {
      profileUserName.textContent = data.name;
      profileUserAbout.textContent = data.about;
      closePopup(popupElement);
    })
    .catch((err) => console.log(err))
    // .finally(() => renderLoading(profileSubmitButton, false));
}
popupFormProfile.addEventListener("submit", editProfileSubmit); 


//Изменение аватара
function changeAvatarSubmit (evt) {
  evt.preventDefault();
  editAvatar({ avatar: avatarInput.value})
  .then((editData) => {
    profileAvatar.src = editData.avatar;
    disableButton(popupSaveAvatar)
    avatarForm.reset();
    closePopup(popupAvatar);
  })
  .catch((err) => console.log(err))
}
avatarForm.addEventListener("submit", changeAvatarSubmit);

//Открытия попап профилья  
function openPopupProfile () {
  openPopup(popupProfile);
  inputUserName.value = profileUserName.textContent;
  inputAboutMySelf.value = profileUserAbout.textContent;
}
buttonOpenPopupProfile.addEventListener("click", openPopupProfile);


//Открытия попап для добавления карточки
buttonOpenPopupCard.addEventListener("click", openPopupCard);

//открытия попап для изменение аватара
buttonAvatar.addEventListener("click", openPopupAvatar)

   
 //Рендринг карточки
 function renderCard (cardName, imageLink, container) {
  const card = createNewCard(cardName, imageLink);
  container.prepend(card);
 }


//Перебирание массива из сервера
getCards().then(cards => {
  cards.forEach((arrayElem) => {
    console.log()
    renderCard(arrayElem.name, arrayElem.link, cardContainer);
  });
})


//Добавление форм, названия, ссылки и отправка формы
 function addCard (event) {
  event.preventDefault();
 
  renderCard(nameInputPopup.value, nameInputLink.value, cardContainer)
  disableButton(buttonAddCard);
  popupCardForm.reset();

  closePopup(popupElementCard)
};

popupCardForm.addEventListener("submit", addCard);



