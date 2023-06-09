(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{y:()=>U,V:()=>$});var t=document.querySelector(".profile__edit-button"),n=document.querySelectorAll(".popup__close-icon"),r=document.querySelector(".popup"),o=document.querySelector(".popup__button-save"),c=document.querySelector(".profile__name"),a=document.querySelector(".profile__about"),u=document.querySelector(".profile__avatar"),i=document.querySelector(".popup__item_heading"),l=document.querySelector(".popup__item_subheading"),d=document.querySelector(".profile__add-button"),s=document.querySelector(".popup_add_card"),p=document.querySelector(".popup__button-save_card"),f=document.querySelector(".elements__list"),m=document.querySelector(".popup__zoom-pic"),_=document.querySelector(".popup__pic-description"),v=(document.querySelector(".popup_close-icon_zoom"),document.querySelector(".popup_zoom_pic")),y=document.querySelector(".popup_type_profile"),h=document.forms.profileForm,S=h.elements.popupHeading,q=h.elements.popupSubHeading,b=document.forms.cardForm,L=b.elements.popupHeadingCard,E=b.elements.popupSubHeadingCard,C=document.querySelector(".popup_avatar"),k=document.querySelector(".profile__avatar-button"),g=document.forms.profileFormAvatar,A=g.elements.popupAvatarHeading,x=g.elements.popupButtonAvatarSave,O=document.querySelector(".popup_delete"),j=document.querySelector(".popup__button-delete");function w(e,t){e.classList.add("popup_opened"),document.addEventListener("keydown",T),document.addEventListener("click",H),t&&(j.dataset.id=t)}function P(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",T),document.removeEventListener("click",H),document.querySelectorAll(".card").forEach((function(e){var t=e.querySelector(".card__delete");t&&t.classList.contains("delete_active")&&t.classList.remove("delete_active")}))}function T(e){"Escape"===e.key&&P(document.querySelector(".popup_opened"))}function H(e){e.target.classList.contains("popup_opened")&&P(e.target)}document.querySelector(".card__delete");var B=document.querySelector("#card-template").content;function D(e,t,n,r,o,c){var a=B.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__image");u.src=t,u.alt=e,a.querySelector(".card__like-quantity").textContent=n.length;var i=a.querySelector(".card__like");return n.find((function(e){return e._id===c}))&&i.classList.add("card__like_active"),o!==c?a.querySelector(".card__delete").remove():a.querySelector(".card__delete").addEventListener("click",(function(){w(O,r),this.classList.add("delete_active")})),a.querySelector(".card__title").textContent=e,a.querySelector(".card__like").addEventListener("click",(function(){$(r,this)})),u.addEventListener("click",(function(){return function(e,t){w(v),m.src=t,_.textContent=e,m.alt=e}(e,t)})),a}j.addEventListener("click",(function(){var e=document.querySelector(".delete_active");U(this.dataset.id,e),P(O)}));function N(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}var z,I={url:"https://nomoreparties.co/v1/plus-cohort-25",headers:{authorization:"294fa835-21a0-447a-ba41-ef90dc4b17f8","Content-Type":"application/json"}};function F(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function J(e){e.classList.add("popup_button-save_inactive"),e.disabled=!0}function M(e,t){e.textContent=t?"Сохранить...":"Сохранить"}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){(function(e){return fetch("".concat(I.url,"/cards/").concat(e),{method:"DELETE",headers:I.headers}).then(F)})(e).then((function(){t.closest(".card").remove()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}function $(e,t){var n=t.parentNode,r=parseInt(n.querySelector(".card__like-quantity").textContent);t.classList.contains("card__like_active")?function(e){return fetch("".concat(I.url,"/cards/likes/").concat(e),{method:"DELETE",headers:I.headers}).then(F)}(e).then((function(){n.querySelector(".card__like-quantity").textContent=r-1,t.classList.remove("card__like_active")})).catch((function(e){return console.log("Ошибка: ".concat(e))})):function(e){return fetch("".concat(I.url,"/cards/likes/").concat(e),{method:"PUT",headers:I.headers}).then(F)}(e).then((function(){n.querySelector(".card__like-quantity").textContent=r+1,t.classList.add("card__like_active")})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}z={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup_button-save_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__item-error_active"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);N(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.error):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)})(e,o,t),N(n,r,t)}))}))}(e,z)})),n.forEach((function(e){e.addEventListener("click",(function(){return P(e.closest(".popup"))}))})),Promise.all([fetch("".concat(I.url,"/users/me"),{headers:I.headers}).then(F),fetch("".concat(I.url,"/cards"),{headers:I.headers}).then(F)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];c.textContent=o.name,a.textContent=o.about,u.src=o.avatar,i.forEach((function(e){var t=D(e.name,e.link,e.likes,e._id,e.owner._id,o._id);f.append(t)}))})),h.addEventListener("submit",(function(e){var t;e.preventDefault(),M(o,!0),(t={name:S.value,about:q.value},fetch("".concat(I.url,"/users/me"),{method:"PATCH",headers:I.headers,body:JSON.stringify(t)}).then(F)).then((function(e){c.textContent=e.name,a.textContent=e.about,P(r)})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return M(o,!1)}))})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),M(x,!0),(t={avatar:A.value},fetch("".concat(I.url,"/users/me/avatar"),{method:"PATCH",headers:I.headers,body:JSON.stringify(t)}).then(F)).then((function(e){u.src=e.avatar,J(x),g.reset(),P(C)})).catch((function(e){return console.log(e)})).finally((function(){return M(x,!1)}))})),t.addEventListener("click",(function(){w(y),i.value=c.textContent,l.value=a.textContent})),d.addEventListener("click",(function(){w(s)})),k.addEventListener("click",(function(){w(C)})),b.addEventListener("submit",(function(e){var t;e.preventDefault(),M(p,!0),(t={name:L.value,link:E.value},fetch("".concat(I.url,"/cards"),{method:"POST",headers:I.headers,body:JSON.stringify(t)}).then(F)).then((function(e){var t=D(e.name,e.link,e.likes,e._id);f.prepend(t),J(p),P(s),b.reset()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return M(p,!1)}))}))})();