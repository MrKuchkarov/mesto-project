//opening adn closing popup.
const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const popupMesto = document.querySelector(".popup");
const saveButton = document.querySelector(".popup__button-save");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

function openPopup() {
  popupMesto.classList.add("popup_opened");
}

  openPopupButton.addEventListener("click", openPopup);

  closePopupButton.addEventListener("click", () => {
    popupMesto.classList.remove("popup_opened");
});


function addProfile() {
  const userName = document.querySelector(".popup__item_heading");
  const aboutMySelf = document.querySelector(".popup__item_subheading");
  
  profileName.textContent = userName.value;
  profileAbout.textContent = aboutMySelf.value;
  
  userName.value = "";
  aboutMySelf.value = "";

  popupMesto.classList.remove("popup_opened");
}

saveButton.addEventListener('click', addProfile)


const openPopupButtonCard = document.querySelector(".profile__add-button");
const closePopupIconButton = document.querySelector(".popup__close-icon_card");
const popupCard = document.querySelector(".popup_card");
const addButton = document.querySelector(".popup__button-add_card");

function openPopupCard() {
  popupCard.classList.add("popup_opened");
}

openPopupButtonCard.addEventListener("click", openPopupCard);

closePopupIconButton.addEventListener("click", () => {
  popupCard.classList.remove("popup_opened");
});

// const  = document.querySelector(".");
// const  = document.querySelector(".");

// function addCard() {
//   let cardName = document.querySelector(".popup__item_heading_card");
//   let imagesLink = document.querySelector(".popup__item_subheading_card");
  
//   .textContent = cardName.value;
//   .textContent = imagesLink.value;
  
//   cardName.value = "";
//   imagesLink.value = "";

//   popupCard.classList.remove("popup_opened");
// }

// addButton.addEventListener('click', addCard)

