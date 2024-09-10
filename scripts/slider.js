
// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider_img'),
    sliderLine = document.querySelector('.slider_line'),
    sliderDots = document.querySelectorAll('.slider_dot'),
    sliderBtnNext = document.querySelector('.slider_btn-next'),
    sliderBtnPrev = document.querySelector('.slider_btn-prev');
        
// Переменные    
let sliderCount = 0,
    sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);


// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = 235;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = item.style.width );
    rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})