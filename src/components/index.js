import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { buttonOpenPopupProfile, buttonClosePopupProfile, popupElement, buttonSavePopupForm, profileUserName, profileUserAbout, inputUserName, inputAboutMySelf, buttonOpenPopupCard, buttonClosePopupCard, popupElementCard, buttonAddCard, cardContainer, popupImage, popupDescription, buttonClosePopupZoom, popupZoom, popupProfile, popupFormProfile, popupFormInput } from "./constants";



//Функция для открытия Попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener("keydown", handleEscapeKeyPopup);
  document.addEventListener("click", handleOverlayPopup);
};

//Функция для закрытия Попап
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener("keydown", handleEscapeKeyPopup);
  document.removeEventListener("click", handleOverlayPopup);
}

//Функция для закрытия попап по эскейп
function handleEscapeKeyPopup(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}
//Функция для закрытия попап по оверлей
function handleOverlayPopup(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

//Открытия попап профилья  
function openPopupProfile () {
  openPopup(popupProfile);
  inputUserName.value = profileUserName.textContent;
  inputAboutMySelf.value = profileUserAbout.textContent;
}
buttonOpenPopupProfile.addEventListener("click", openPopupProfile);

//Закрытия попап профилья
function closePopupProfile () {
  closePopup(popupElement);
}
buttonClosePopupProfile.addEventListener("click", closePopupProfile);

//Открытия попап для добавления карточки
function openPopupCard() {
  openPopup(popupElementCard);
}
buttonOpenPopupCard.addEventListener("click", openPopupCard);

//Закрытия попап для добавления карточки
function closePopupCards () {
  closePopup(popupElementCard);
}
buttonClosePopupCard.addEventListener("click", closePopupCards);

//Закрытия попап для зум картинки
function closePopupImage () {
  closePopup(popupZoom);
}
buttonClosePopupZoom.addEventListener("click", closePopupImage);

//Связка попап с профилем
function emptyForm(event) {
  event.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileUserAbout.textContent = inputAboutMySelf.value;
  
  inputUserName.value = "";
  inputAboutMySelf.value = "";

  closePopup(popupElement);
}

  popupFormProfile.addEventListener("submit", emptyForm);  
  
//Открытия попап, добавление картинки и описание картинки в попап
function zoomImageCard(cardName, imageLink) {
  openPopup(popupZoom);
  popupImage.src = imageLink;
  popupDescription.textContent = cardName;
  popupImage.alt = cardName;
};






//Функция для удаление карточки 
function removeCard(event) {
  event.target.closest(".card").remove();
};


//Функция для лайки
function likeCard(evt) {
  evt.target.classList.toggle("card__like_active");
};


//Создания и добавление карточки
const cardTemplate = document.querySelector("#card-template").content;
const cards = document.querySelector(".card");

function createNewCard(cardName, imageLink) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.setAttribute("src", imageLink);
  cardImage.setAttribute("alt", cardName);
  
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(".card__delete").addEventListener("click", removeCard);
  cardElement.querySelector(".card__like").addEventListener("click", likeCard);

  cardElement.querySelector(".card__image").addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
  return cardElement;
    
 }; 
 
 //Рендринг карточки
 function renderCard (cardName, imageLink, container) {
  const card = createNewCard(cardName, imageLink);
  container.prepend(card);
 }



//Массив(контейнер)для хранение данных
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Перебирание массива
initialCards.forEach((arrayElem) => {
  renderCard(arrayElem.name, arrayElem.link, cardContainer);

});

//Добавление форм, названия, ссылки
const parentWrapper = document.querySelector("#addCardPopUpForm");
const nameInputPopup = parentWrapper.querySelector("#popupNameTitle");
const nameInputLink = parentWrapper.querySelector("#popupLink");

buttonAddCard.addEventListener("click", function (element) {
  element.preventDefault();
 
  renderCard(nameInputPopup.value, nameInputLink.value, cardContainer)

  nameInputPopup.value = "";
  nameInputLink.value = "";

  closePopup(popupElementCard)
});


// const inputErrorClass = document.querySelector(".popup__item_type_error")
// const errorClass = document.querySelector(".popup__item-error_active")





// Функция, которая добавляет класс с ошибкой
const showInputError = (formPopupElement, inputPopupElement, errorMessage, config) => {
  const errorPopupElement = formPopupElement.querySelector(`#${inputPopupElement.id}-error`)
  inputPopupElement.classList.add(config.inputErrorClass);
  errorPopupElement.classList.add(config.errorClass);
  errorPopupElement.textContent = errorMessage;
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formPopupElement, inputPopupElement, config) => {
  const errorPopupElement = formPopupElement.querySelector(`#${inputPopupElement.id}-error`)
  inputPopupElement.classList.remove(config.inputErrorClass);
  errorPopupElement.classList.remove(config.errorClass);
  errorPopupElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formPopupElement, inputPopupElement, config) => {
  if(inputPopupElement.validity.patternMismatch) {
    //встроенный метод setCustomValidity принимает на вход строку
    //и заменяет ею стандартное сообщение об ошибке
    inputPopupElement.setCustomValidity(inputPopupElement.dataset.error);
  } else {
    //если передать пустую строку, то будет доступны
    //стандарные браузерные сообщения
    inputPopupElement.setCustomValidity("");
  }

  if (!inputPopupElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formPopupElement, inputPopupElement, inputPopupElement.validationMessage, config);
  } else {
    // Если проходит, скроем
    hideInputError(formPopupElement, inputPopupElement, config);
  }
};


function setEventListeners (formPopupElement, config) {
  const inputPopupList = Array.from(formPopupElement.querySelectorAll(config.inputSelector));
  const buttonPopupElement = formPopupElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputPopupList, buttonPopupElement, config);
  
  inputPopupList.forEach((inputPopupElement) => {
    inputPopupElement.addEventListener('input', function () {
      checkInputValidity(formPopupElement, inputPopupElement, config);
      toggleButtonState(inputPopupList, buttonPopupElement, config);
    });
  });
};

function  enableValidation (config) {
  const formPopupList = Array.from(document.querySelectorAll(config.formSelector));

  formPopupList.forEach((formPopupElement) => {
    formPopupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formPopupElement, config);
  });
}
enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup_button-save_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active',
});



function hasInvalidInput (inputPopupList) { 
  return inputPopupList.some((inputPopupElement) => {
    return !inputPopupElement.validity.valid;
  });
};


function toggleButtonState (inputPopupList, buttonPopupElement, config) {
  if(hasInvalidInput(inputPopupList)) {
    buttonPopupElement.classList.add(config.inactiveButtonClass);
    buttonPopupElement.disabled = true;
  } else {
    buttonPopupElement.classList.remove(config.inactiveButtonClass);
    buttonPopupElement.disabled = false;
  }
};






