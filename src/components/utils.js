export function disableButton(buttonElement) {
    buttonElement.classList.add("popup_button-save_inactive");
    buttonElement.disabled = true;
}

export function setLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
    if(isLoading) {
        button.textContent = loadingText
    } else {
        button.textContent = buttonText
    }
}

// можно сделать универсальную функцию, которая принимает функцию запроса, объект события и текст во время загрузки
export function handleSubmit(request, evt, loadingText = "Сохранение...") {
    // всегда нужно предотвращать перезагрузку формы при сабмите
     evt.preventDefault();
   
     // универсально получаем кнопку сабмита из `evt`
     const submitButton = evt.submitter;
     // записываем начальный текст кнопки до вызова запроса
     const initialText = submitButton.textContent;
     // изменяем текст кнопки до вызова запроса
     setLoading(true, submitButton, initialText, loadingText);
     request()
       .then(() => {
         // любую форму нужно очищать после успешного ответа от сервера
         // а также `reset` может запустить деактивацию кнопки сабмита (смотрите в `validate.js`)
         evt.target.reset();
       })
       .catch((error) => {
         // в каждом запросе нужно ловить ошибку
         console.error(`Ошибка: ${error}`);
       })
       // в каждом запросе в `finally` нужно возвращать обратно начальный текст кнопки
       .finally(() => {
        setLoading(false, submitButton, initialText);
       });
   }