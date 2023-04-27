const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const popupEl = document.querySelector(".popup");
const saveButton = document.querySelector(".popup__button-save");
const profileInfo = document.querySelector(".profile__info");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const userName = document.querySelector(".popup__item_heading");
const aboutMySelf = document.querySelector(".popup__item_subheading");
const openPopupButtonCard = document.querySelector(".profile__add-button");
const closePopupButtonCard = document.querySelector(".popup__close-icon_card");
const popupCard = document.querySelector(".popup_add_card");
const addButton = document.querySelector(".popup__button-add_card");
const cardContainer = document.querySelector(".elements__list");
const nameCardPopup = document.querySelector(".popup__item_heading_card");
const linkCardPopup = document.querySelector(".popup__item_subheading_card");



// Открытье попап и редактирование профиля 
function openPopup(popupEl) {
  popupEl.classList.add("popup_opened");
}

openPopupButton.addEventListener("click", () => openPopup(popupEl));

closePopupButton.addEventListener("click", () => {
  popupEl.classList.remove("popup_opened");
});

function addProfile() {
  profileName.textContent = userName.value;
  profileAbout.textContent = aboutMySelf.value;
  
  userName.value = "";
  aboutMySelf.value = "";

  popupEl.classList.remove("popup_opened");
}

saveButton.addEventListener('click', addProfile)



// Открытье попап и добавить карточки
function openPopupCard(popupCard) {
  popupCard.classList.add("popup_opened");
}

openPopupButtonCard.addEventListener("click", () => openPopupCard(popupCard));


closePopupButtonCard.addEventListener("click", () => {
  popupCard.classList.remove("popup_opened");
});

function addcard() {
  cardName.textContent = nameCardPopup.value;
  imageLink.textContent = linkCardPopup.value;

  popupCar.classList.remove("popup_opened");
}

addButton.addEventListener("click", addcard);

// Добавление карточки
function createCard(cardName, imageLink) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElem = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElem.querySelector(".card__image");
  
  cardElem.querySelector(".card__title").textContent = cardName;
  cardImg.src = imageLink;
  cardImg.alt = cardName;
  cardElem.querySelector(".card__like").addEventListener('click', function (evt) {
    evt.target.classList.toggle("card__like_active");
 }); 

  cardContainer.append(cardElem, cardImg);
}





