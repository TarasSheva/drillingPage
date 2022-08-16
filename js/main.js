const token = '5495977901:AAFUOe2FHEplCg5YPMvDyu2BwsV5eUqEGhw'
const chatId = '-1001656053766'
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const confirmBtn = document.getElementById('confirm-btn')

const closeModal = (e) => {
    e.preventDefault()
    modal.style.display = 'none'
}

closeBtn.addEventListener('click', closeModal)
confirmBtn.addEventListener('click', closeModal)


const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    let massage = `<b>Нова заявка!</b>\n`
    massage += `<b>Name: </b> ${this.name.value}\n`
    massage += `<b>Tell: </b> ${this.phone.value}`

    axios.post(urlApi, {
        chat_id: chatId,
        parse_mode: 'html',
        text: massage,
    })
        .then(() => {
            this.name.value = ''
            this.phone.value = ''

            modal.style.display = 'flex'
        })
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}