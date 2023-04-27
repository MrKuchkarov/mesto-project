const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const popupElement = document.querySelector(".popup");
const saveButton = document.querySelector(".popup__button-save");
const profileInfo = document.querySelector(".profile__info");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const userName = document.querySelector(".popup__item_heading");
const aboutMySelf = document.querySelector(".popup__item_subheading");
const openPopupButtonCard = document.querySelector(".profile__add-button");
const closePopupButtonCard = document.querySelector(".popup__close-icon_card");
const popupCard = document.querySelector(".popup_add_card");
const addСardButton = document.querySelector(".popup__button-add_card");
const cardContainer = document.querySelector(".elements__list");
const nameCardPopup = document.querySelector(".popup__item_heading_card");
const linkCardPopup = document.querySelector(".popup__item_subheading_card");



// Открытье попап и редактирование профиля 
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

openPopupButton.addEventListener("click", () => openPopup(popupElement));

closePopupButton.addEventListener("click", () => {
  popupElement.classList.remove("popup_opened");
});

function emptyForm() {
  profileName.textContent = userName.value;
  profileAbout.textContent = aboutMySelf.value;
  
  userName.value = "";
  aboutMySelf.value = "";

  popupElement.classList.remove("popup_opened");
}

saveButton.addEventListener('click', emptyForm)



// Открытье попап и добавить карточки
function openPopupCard(popupCard) {
  popupCard.classList.add("popup_opened");
}

openPopupButtonCard.addEventListener("click", () => openPopupCard(popupCard));


closePopupButtonCard.addEventListener("click", () => {
  popupCard.classList.remove("popup_opened");
});


//Создания и добавление карточки
const cardTemplate = document.querySelector("#card-template").content;

function createNewCard(cardName, imageLink) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.setAttribute("src", imageLink);
  cardImage.setAttribute("alt", cardName);
  

  cardElement.querySelector(".card__title").textContent = cardName;

  cardContainer.prepend(cardElement);

  //Кнопка лайки
  cardElement.querySelector(".card__like").addEventListener('click', function (evt) {
    evt.target.classList.toggle("card__like_active");
 }); 

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

initialCards.forEach((arrayElem) => {
  createNewCard(arrayElem.name, arrayElem.link);
});


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


  popupCard.classList.remove("popup_opened");
});












