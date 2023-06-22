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
  popupDeleteCard  } from "./constants.js";
import { openPopup, closePopup, openPopupCard, openPopupAvatar } from './modal.js';
import { createNewCard } from './card.js';
import { enableValidation } from './validate.js'; 
import { Api } from  "./api.js";
import { disableButton, setLoading, handleSubmit } from './utils.js';

export const urlConfig = {
  url: "https://nomoreparties.co/v1/plus-cohort-25",
  headers: {
    authorization: "294fa835-21a0-447a-ba41-ef90dc4b17f8",
    "Content-Type": "application/json",
  }
}

const api  = new Api(urlConfig);
 

enableValidation(validationConfig);

//Закрытия попапов 
popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closePopup(button.closest(".popup")));
});


//Запрос о пользователе и перебирание массива из сервера
Promise.all([api.getUser(), api.getCards()])
.then(([user, initialCards]) => {
  profileUserName.textContent = user.name;
  profileUserAbout.textContent = user.about;
  profileAvatar.src = user.avatar;
 
  initialCards.forEach((arrayElem) => {
    const card = createNewCard(arrayElem.name, arrayElem.link, arrayElem.likes, arrayElem._id, arrayElem.owner._id, user._id);
    cardContainer.append(card);
    console.log()
  })
})
.catch((error) => console.log(`Ошибка: ${error}`))

//Связка попап с профилем
function editProfileSubmit (evt) {
  evt.preventDefault();

  function makeRequest () {
    return  api.editProfile({ name: popupName.value, about: popupDescriptionProf.value })
    .then((data) => {
      profileUserName.textContent = data.name;
      profileUserAbout.textContent = data.about;
      closePopup(popupProfile);
    })
  }
  handleSubmit(makeRequest, evt);
}
popupFormProfile.addEventListener("submit", editProfileSubmit); 


//Изменение аватара
function editAvatarSubmit (evt) {
  evt.preventDefault();

  function makeRequest () {
    return api.editAvatar({ avatar: avatarInput.value})
    .then((editData) => {
      profileAvatar.src = editData.avatar;
      closePopup(popupAvatar);
    })
  }
  handleSubmit(makeRequest, evt);
}
avatarForm.addEventListener("submit", editAvatarSubmit);

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
  cardContainer.append(createNewCard(cardName, imageLink, likes, cardId));
 }


//Добавление форм, названия, ссылки и отправка формы
 function addCard (evt) {
  evt.preventDefault();
  
  function makeRequest() {
     const formData = {
      name: nameInputPopup.value,
      link: nameInputLink.value,
    }
    return api.addCards(formData)
    .then((response) => { 
      const card = createNewCard(response.name, response.link, response.likes, response._id);
      cardContainer.prepend(card)
      closePopup(popupElementCard);
   })
  }
  handleSubmit(makeRequest, evt)
}

popupCardForm.addEventListener("submit", addCard);


//Функция для удаление карточки 
export function removeCard(cardId, element) {
  api.deleteCards(cardId)
  .then (() => {
    element.closest(".card").remove();
  })
  .catch((error) => console.log(`Ошибка: ${error}`))
  };
  
  
  //Функция для лайки
export function toggleButtonLike(cardId, element) {
    
    const parentCard = element.closest(".card");
    const cardLikeQuantity = parentCard.querySelector(".card__like-quantity");
   

    if (element.classList.contains("card__like_active")) {
      api.removeLikes(cardId)
      .then((response) => {
        element.classList.remove("card__like_active")
        cardLikeQuantity.textContent = response.likes.length;
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
    } else {
      api.addLikes(cardId)
      .then((response) => {
        element.classList.add("card__like_active"); 
        cardLikeQuantity.textContent = response.likes.length;
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
    }

  };
