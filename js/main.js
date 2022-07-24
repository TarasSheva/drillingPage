const token = '5593072673:AAEaxtBKIGYlhW96AYpeeklSJ-tttKHFgWs'
const chatId = '-1001668145007'
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