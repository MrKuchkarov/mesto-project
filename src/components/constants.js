export const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
export const popupCloseButtons = document.querySelectorAll(".popup__close-icon"); 
export const popupElement = document.querySelector(".popup");
export const buttonSavePopupForm = document.querySelector(".popup__button-save"); 
export const profileUserName = document.querySelector(".profile__name");
export const profileUserAbout = document.querySelector(".profile__about");
export const profileAvatar = document.querySelector(".profile__avatar");
export const inputUserName = document.querySelector(".popup__item_heading");
export const inputAboutMySelf = document.querySelector(".popup__item_subheading");
export const buttonOpenPopupCard = document.querySelector(".profile__add-button"); 
export const popupElementCard = document.querySelector(".popup_add_card");
export const buttonAddCard = document.querySelector(".popup__button-save_card"); 
export const cardContainer = document.querySelector(".elements__list"); 
export const popupImage = document.querySelector(".popup__zoom-pic");
export const popupDescription = document.querySelector(".popup__pic-description");
export const buttonClosePopupZoom = document.querySelector(".popup_close-icon_zoom");
export const popupZoom = document.querySelector(".popup_zoom_pic");
export const popupProfile = document.querySelector(".popup_type_profile");
export const popupFormProfile = document.forms.profileForm;
export const popupName = popupFormProfile.elements.popupHeading;
export const popupDescriptionProf = popupFormProfile.elements.popupSubHeading;
export const popupCardForm = document.forms.cardForm;
export const nameInputPopup = popupCardForm.elements.popupHeadingCard;
export const nameInputLink = popupCardForm.elements.popupSubHeadingCard;
export const popupAvatar = document.querySelector(".popup_avatar");
export const buttonAvatar = document.querySelector(".profile__avatar-button")
export const avatarForm = document.forms.profileFormAvatar;
export const avatarInput = avatarForm.elements.popupAvatarHeading;
export const popupSaveAvatar = avatarForm.elements.popupButtonAvatarSave;

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup_button-save_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__item-error_active',
  };

//   //Массив(контейнер)для хранение данных
// export const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
//   ];