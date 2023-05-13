import { getScreenshot } from "./screenshot.js"
import { createImage } from "./crud.js"
import { updateAuth } from "./updateUI.js"
import { resetAuth } from "./updateUI.js"
import { updateNavbar } from "./updateUI.js"

const formSubmit = document.querySelector('form')
const formInput = document.querySelector('input')
const logoutButton = document.querySelector('.logout-btn')

const loginCheck = localStorage.getItem('login')

if (loginCheck === 'true') {

    updateNavbar()
    updateAuth()

    formSubmit.addEventListener('submit', async (e) => {
        e.preventDefault()
        const data = await getScreenshot(formInput.value)
        if (data.screenshot) {
            await createImage(data)
            return await updateAuth()
        }
    })

    logoutButton.addEventListener('click', () => {
        localStorage.setItem('login', false)
        resetAuth()
    })
}

else {
    resetAuth()
}
