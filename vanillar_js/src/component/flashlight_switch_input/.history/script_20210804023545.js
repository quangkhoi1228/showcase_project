var flashlightSwitchInputList = document.querySelectorAll('.flashlight-switch-input');

flashlightSwitchInputList.forEach(function (flashlightSwitchInput) {
    let button = flashlightSwitchInput.querySelector('.flashlight-switch-input__button');
    button.onclick = function () {
        flashlightSwitchInput.classList.toggle('--is-active');
    }
})