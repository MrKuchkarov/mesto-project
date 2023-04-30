const openEditProfile = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const popupElement = document.querySelector(".popup");
const savePopupButton = document.querySelector(".popup__button-save");
const profileUserName = document.querySelector(".profile__name");
const profileUserAbout = document.querySelector(".profile__about");
const inputUserName = document.querySelector(".popup__item_heading");
const inputAboutMySelf = document.querySelector(".popup__item_subheading");
const addCardButton = document.querySelector(".profile__add-button");
const closePopupCard = document.querySelector(".popup__close-icon_card");
const popupElementCard = document.querySelector(".popup_add_card");
const addСardButton = document.querySelector(".popup__button-add_card");
const cardContainer = document.querySelector(".elements__list");
const popupImage = document.querySelector(".popup__zoom-pic");
const popupDescription = document.querySelector(".popup__pic-description");
const closePopupZoom = document.querySelector(".popup_close-icon_zoom")
const popupZoom = document.querySelector(".popup_zoom_pic");
const popupProfile = document.querySelector(".popup_type_profile");


//Функция для открытия Попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  // document.addEventListener("click");
};

//Функция для закрытия Попап
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  // document.removeEventListener("click");
}

//Открытия попап профилья  
function openPopupProfile () {
  openPopup(popupProfile);
  inputUserName.value = profileUserName.textContent;
  inputAboutMySelf.value = profileUserAbout.textContent;
}
openEditProfile.addEventListener("click", openPopupProfile);

//Закрытия попап профилья
function closePopupProfile () {
  closePopup(popupElement);
}
closePopupButton.addEventListener("click", closePopupProfile);

//Открытия попап для добавления карточки
function openPopupCard() {
  openPopup(popupElementCard);
}
addCardButton.addEventListener("click", openPopupCard);

//Закрытия попап для добавления карточки
function closePopupCards () {
  closePopup(popupElementCard);
}
closePopupCard.addEventListener("click", closePopupCards);

//Закрытия попап для зум картинки
function closePopupImage () {
  closePopup(popupZoom);
}
closePopupZoom.addEventListener("click", closePopupImage);

//Редактирование профилья 
function emptyForm() {
  profileUserName.textContent = inputUserName.value;
  profileUserAbout.textContent = inputAboutMySelf.value;
  
  inputUserName.value = "";
  inputAboutMySelf.value = "";

  popupElement.classList.remove("popup_opened");

}

savePopupButton.addEventListener('click', emptyForm);

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
  
  cardContainer.prepend(cardElement);
  
 }; 


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
  createNewCard(arrayElem.name, arrayElem.link);
});

//Добавление форм, названия, ссылки
addСardButton.addEventListener("click", function (element) {
  element.preventDefault();
  const parentWrapper = document.querySelector("#addCardPopUpForm");
  const nameInputPopup = parentWrapper.querySelector("#popupNameTitle");
  const nameInputLink = parentWrapper.querySelector("#popupLink");
  const newObj = {name: nameInputPopup.value, link: nameInputLink.value}

  initialCards.push(newObj);

  createNewCard(nameInputPopup.value, nameInputLink.value)

  nameInputPopup.value = "";
  nameInputLink.value = "";


  popupElementCard.classList.remove("popup_opened");
});













