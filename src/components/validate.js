import { disableButton } from "./utils";

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
    
    formPopupElement.addEventListener('reset', () => {
      disableButton(buttonPopupElement, config)
    });
   

    inputPopupList.forEach((inputPopupElement) => {
      inputPopupElement.addEventListener("input", function () {
        checkInputValidity(formPopupElement, inputPopupElement, config);
        toggleButtonState(inputPopupList, buttonPopupElement, config);
      });
    });
  };
  
  export function  enableValidation (config) {
    const formPopupList = Array.from(document.querySelectorAll(config.formSelector));
  
    formPopupList.forEach((formPopupElement) => {
      formPopupElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      
      setEventListeners(formPopupElement, config);
    });
  }
  
  
  function hasInvalidInput (inputPopupList) { 
    return inputPopupList.some((inputPopupElement) => {
      return !inputPopupElement.validity.valid;
    });
  };
  
  
  export function toggleButtonState (inputPopupList, buttonPopupElement, config) {
    if(hasInvalidInput(inputPopupList)) {
      buttonPopupElement.classList.add(config.inactiveButtonClass);
      buttonPopupElement.disabled = true;
    } else {
      buttonPopupElement.classList.remove(config.inactiveButtonClass);
      buttonPopupElement.disabled = false;
    }
  };