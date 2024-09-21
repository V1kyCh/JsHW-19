// 1
const body = document.querySelector('body')
const openModalBtnEl = document.querySelector('[data-action="open-modal"]')
const backdropEl = document.querySelector('.js-backdrop')
const modalEl = document.querySelector('modal')
const closeModalBtmEl = document.querySelector('[data-action="close-modal"]')

openModalBtnEl.addEventListener('click', () => document.body.classList.add('show-modal'))
closeModalBtmEl.addEventListener('click', () => document.body.classList.remove('show-modal'))
backdropEl.addEventListener('click', () => document.body.classList.remove('show-modal'))

// 2
const colorRed = document.querySelector('[value="red"]')
const colorWhite = document.querySelector('[value="white"]')
const colorGreen = document.querySelector('[value="green"]')

colorRed.addEventListener('click', () => body.style.backgroundColor = colorRed.value)
colorWhite.addEventListener('click', () => body.style.backgroundColor = colorWhite.value)
colorGreen.addEventListener('click', () => body.style.backgroundColor = colorGreen.value)

// 3
const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener('input', () => {
    spanEl.textContent = inputEl.value
})

// 4
const validInput = document.querySelector('#validation-input')
validInput.addEventListener('input', () => {
    if (validInput.value.length == 6) {
        validInput.classList.add('valid')
        validInput.classList.remove('invalid')
    } else {
        validInput.classList.add('invalid')
    }
})

// 5

const sizeControl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')
sizeControl.addEventListener('input', () => {
    textEl.style.fontSize = sizeControl.value + 'px'
    console.log(sizeControl.value)
})
