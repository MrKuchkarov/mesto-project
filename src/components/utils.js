export function disableButton(buttonElement) {
    buttonElement.classList.add("popup_button-save_inactive");
    buttonElement.disabled = true;
}

export function buttonLoading(button, theLoading) {
    if(theLoading) {
        button.textContent = "Сохранить...";
    } else {
        button.textContent = "Сохранить";
    }
}