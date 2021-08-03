var flashlightSwitchInputList = document.querySelectorAll('.flashlight-switch-input');

flashlightSwitchInputList.forEach(function (flashlightSwitchInput) {
    let button = flashlightSwitchInput.querySelector('.flashlight-switch-input__button');
    let input = flashlightSwitchInput.querySelector('.flashlight-switch-input__input');
    button.onclick = function () {
        flashlightSwitchInput.classList.toggle('--is-active');
        let inputType = (flashlightSwitchInput.classList.contains('--is-active')) ? 'text' : 'password';
        input.setAttribute('type', inputType);
    }
})