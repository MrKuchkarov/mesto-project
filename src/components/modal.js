// //Функция для открытия Попап
// export function openPopup(popupElement) {
//     popupElement.classList.add('popup_opened');
//     document.addEventListener("keydown", handleEscapeKeyPopup);
//     document.addEventListener("click", handleOverlayPopup);
//   };
  
//   //Функция для закрытия Попап
//   export function closePopup(popupElement) {
//     popupElement.classList.remove('popup_opened');
//     document.removeEventListener("keydown", handleEscapeKeyPopup);
//     document.removeEventListener("click", handleOverlayPopup);
//   }
  
//   //Функция для закрытия попап по эскейп
//   export function handleEscapeKeyPopup(evt) {
//     if (evt.key === "Escape") {
//       const activePopup = document.querySelector(".popup_opened");
//       closePopup(activePopup);
//     }
//   }
//   //Функция для закрытия попап по оверлей
//   export function handleOverlayPopup(evt) {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(evt.target);
//     }
//   }