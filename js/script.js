var popupBtn = document.querySelector('.banner__button_js');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close')
var input = popup.querySelector('input');

popupBtn.addEventListener('click',function() {
    popup.classList.add('popup_open');
    input.focus();
})

popupClose.addEventListener('click',function() {
    popup.classList.remove('popup_open');
    popupBtn.focus();
})

window.addEventListener('keydown',function(event) {
    if (event.code === 'Escape') {
        if(popup.classList.contains('popup_open')) {
            popup.classList.remove('popup_open');
            popupBtn.focus();
        }
    }
})
