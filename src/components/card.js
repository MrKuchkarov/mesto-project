// //Создания и добавление карточки
// const cardTemplate = document.querySelector("#card-template").content;
// const cards = document.querySelector(".card");

// function createNewCard(cardName, imageLink) {
//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   cardImage.setAttribute("src", imageLink);
//   cardImage.setAttribute("alt", cardName);
  
//   cardElement.querySelector(".card__title").textContent = cardName;
//   cardElement.querySelector(".card__delete").addEventListener("click", removeCard);
//   cardElement.querySelector(".card__like").addEventListener("click", likeCard);

//   cardElement.querySelector(".card__image").addEventListener("click", () => zoomImageCard(cardName, imageLink));
  
//   return cardElement;
    
//  }; 
 
//  //Рендринг карточки
//  function renderCard (cardName, imageLink, container) {
//   const card = createNewCard(cardName, imageLink);
//   container.prepend(card);
//  }