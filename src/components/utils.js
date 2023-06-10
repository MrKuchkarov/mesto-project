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


export function handleSubmit(request, evt, loadingText = "Сохранение...") {
 
     evt.preventDefault();

     const submitButton = evt.submitter;

     const initialText = submitButton.textContent;

     setLoading(true, submitButton, initialText, loadingText);
     request()
       .then(() => {

         evt.target.reset();
       })
       .catch((error) => {

         console.error(`Ошибка: ${error}`);
       })

       .finally(() => {
        setLoading(false, submitButton, initialText);
       });
   }