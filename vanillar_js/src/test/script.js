var animatedSearchInputList = document.querySelectorAll('.animated-search-input');

animatedSearchInputList.forEach(function (animatedSearchInput) {
    animatedSearchInput.onclick = function () {
        if (!animatedSearchInput.classList.contains('--width-animation')) {
            animatedSearchInput.classList.add('--width-animation');
            setTimeout(function () {
                animatedSearchInput.classList.add('--control-animation');
                setTimeout(function () {
                    animatedSearchInput.classList.add('--second-line-animation');
                }, 1000);
            }, 1000);
        }
    }

    var listControl = animatedSearchInput.querySelectorAll('.animated-search-input__control,.animated-search-input__first-line,.animated-search-input__second-line');
    listControl.forEach(function (control) {
        control.onclick = function () {
            if (animatedSearchInput.classList.contains('--second-line-animation')) {
                animatedSearchInput.classList.remove('--second-line-animation');
                setTimeout(function () {
                    animatedSearchInput.classList.remove('--control-animation');
                    setTimeout(function () {
                        animatedSearchInput.classList.remove('--width-animation');
                    }, 1000);
                }, 200);
            }
        }
    })
})