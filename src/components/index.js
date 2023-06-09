import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { buttonOpenPopupProfile, popupCloseButtons, popupElement, 
  profileUserName, profileUserAbout, profileAvatar,
  inputUserName, 
  inputAboutMySelf, 
  buttonOpenPopupCard, buttonSavePopupForm,
  popupElementCard, 
  buttonAddCard, 
  cardContainer, 
  popupProfile, 
  popupFormProfile, 
  validationConfig, 
  popupCardForm, 
  nameInputPopup, 
  nameInputLink, 
  buttonAvatar, avatarForm, avatarInput,
  popupName, popupDescriptionProf, popupAvatar, popupSaveAvatar,
  popupDeleteCard  } from "./constants";
import { openPopup, closePopup, openPopupCard, openPopupAvatar } from './modal';
import { createNewCard } from './card';
import { enableValidation } from './validate'; 
import { getCards, getUser, editProfile, editAvatar, addCards, deleteCards, addLikes, removeLikes } from  "./api";
import { disableButton, buttonLoading } from './utils';



enableValidation(validationConfig);

//Закрытия попапов 
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closePopup(button.closest(".popup")));
});


//Запрос о пользователе и перебирание массива из сервера
Promise.all([getUser(), getCards()])
.then(([user, initialCards]) => {
  profileUserName.textContent = user.name;
  profileUserAbout.textContent = user.about;
  profileAvatar.src = user.avatar;
 
  
  initialCards.forEach((arrayElem) => {
    const card = createNewCard(arrayElem.name, arrayElem.link, arrayElem.likes, arrayElem._id, arrayElem.owner._id, user._id);
    cardContainer.append(card); 
  });

})


//Связка попап с профилем
function editProfileSubmit (evt) {
  evt.preventDefault();
  buttonLoading(buttonSavePopupForm, true);
  editProfile({ name: popupName.value, about: popupDescriptionProf.value })
    .then((data) => {
      profileUserName.textContent = data.name;
      profileUserAbout.textContent = data.about;
      closePopup(popupElement);
    })
    .catch((err) => console.log(err))
    .finally(() => buttonLoading(buttonSavePopupForm, false));
}
popupFormProfile.addEventListener("submit", editProfileSubmit); 


//Изменение аватара
function changeAvatarSubmit (evt) {
  evt.preventDefault();
  buttonLoading(popupSaveAvatar, true);
  editAvatar({ avatar: avatarInput.value})
  .then((editData) => {
    profileAvatar.src = editData.avatar;
    disableButton(popupSaveAvatar)
    avatarForm.reset();
    closePopup(popupAvatar);
  })
  .catch((err) => console.log(err))
  .finally(() => buttonLoading(popupSaveAvatar, false));
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
 function renderCard (cardName, imageLink, likes, cardId) {
  // const card = createNewCard(cardName, imageLink, likes, cardId);
  cardContainer.append(createNewCard(cardName, imageLink, likes, cardId));
  
 }


//Добавление форм, названия, ссылки и отправка формы
 function addCard (event) {
  event.preventDefault();
  buttonLoading(buttonAddCard, true);
  const formData = {
    name: nameInputPopup.value,
    link: nameInputLink.value,
  }
  addCards(formData)
  .then((res) => { 

    const card = createNewCard(res.name, res.link, res.likes, res._id);
    cardContainer.prepend(card)
   
    disableButton(buttonAddCard);
    closePopup(popupElementCard);
    popupCardForm.reset();
 })
  .catch((err) => console.log(`Ошибка: ${err}`))
  .finally(() => buttonLoading(buttonAddCard, false));
}

popupCardForm.addEventListener("submit", addCard);


//Функция для удаление карточки 
export function removeCard(cardId, element) {
  deleteCards(cardId)
  .then (() => {
    element.closest(".card").remove();
    
  })
  .catch((err) => console.log(`Ошибка: ${err}`))
  };
  
  
  //Функция для лайки
export function toggleLike(cardId, element) {
  
    const parent = element.parentNode;
    const counters = parseInt(parent.querySelector(".card__like-quantity").textContent);

    if (element.classList.contains("card__like_active")) {
      removeLikes(cardId)
      .then(() => {
        parent.querySelector(".card__like-quantity").textContent = counters-1;
        element.classList.remove("card__like_active")
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
    } else {
      addLikes(cardId)
      .then(() => {
        parent.querySelector(".card__like-quantity").textContent = counters+1;
        element.classList.add("card__like_active"); 
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
    }

  };
