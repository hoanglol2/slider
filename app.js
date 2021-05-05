const prev =  document.querySelector('.prev');
const next = document.querySelector('.next');
const sliders = document.querySelectorAll('.slide');

function _onClickNextSlider () {

    if (currentIndex === sliders.length - 1) {
        currentIndex = 0;
        document.querySelector('.active').classList.remove('active');
        sliders[currentIndex].classList.add('active');
        return false;
    }

    if (currentIndex < sliders.length) {
        document.querySelector('.active').classList.remove('active');
        currentIndex++;
        sliders[currentIndex].classList.add('active');
    }
}

function _onClickPrevSlider() {
    if (currentIndex === 0) {
        currentIndex = sliders.length - 1;
        document.querySelector('.active').classList.remove('active');
        sliders[currentIndex].classList.add('active');
        return false;
    }

    if (currentIndex < sliders.length) {
        document.querySelector('.active').classList.remove('active');
        currentIndex--;
        sliders[currentIndex].classList.add('active');
    }
}

next.addEventListener('click', _onClickNextSlider);
prev.addEventListener('click', _onClickPrevSlider);
