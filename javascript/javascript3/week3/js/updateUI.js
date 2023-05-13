import { readImage } from "./crud.js"
import { deleteImage } from "./crud.js"

const ulTag = document.querySelector('ul.screenshots')
const pTag = document.querySelector('.error')
const loginTag = document.querySelector('.login-tag')
const signupTag = document.querySelector('.signup-tag')
const displayName = document.querySelector('.username')
const logoutOption = document.querySelector('nav ul li:nth-child(5)')
const sidebar = document.querySelector('.sidebar')

export const updateAuth = async() => {

    const screenshots = await readImage()
    const filteredScreenshots = screenshots.filter(each => each.user === localStorage.getItem('username'))
    
    pTag.innerHTML = (screenshots.length === 0) ? 'No screenshots yet to display' : ''
    ulTag.innerHTML = ''

    filteredScreenshots.forEach(each => {
        const liTag = document.createElement('li')
        const anchorTag = document.createElement('a')
        const buttonTag = document.createElement('button')

        anchorTag.innerText = each.url
        anchorTag.classList.add('name')
        anchorTag.setAttribute('href', each.screenshot)
        buttonTag.innerText = 'x'
        
        liTag.appendChild(anchorTag)
        liTag.appendChild(buttonTag)
        ulTag.appendChild(liTag)

        buttonTag.addEventListener('click', async () => {
            await deleteImage(each._id)
            liTag.remove()
            return pTag.innerHTML = (await readImage().length === 0) ? 'No screenshots yet to display' : ''
        })
    })
}

export const resetAuth = () => {

    if (loginTag.classList.contains('none')) {
        loginTag.classList.remove('none')
    }
    if (signupTag.classList.contains('none')) {
        signupTag.classList.remove('none')
    }
    logoutOption.classList.add('none')
    displayName.classList.add('none')
    ulTag.classList.add('none')
    sidebar.classList.add('none')
    pTag.innerText = 'Please login or signup to continue'

}

export const updateNavbar = () => {

    loginTag.classList.add('none')
    signupTag.classList.add('none')
    if (logoutOption.classList.contains('none')) {
        logoutOption.classList.remove('none')
    }
    if (displayName.classList.contains('none')) {
        displayName.classList.remove('none')
    }
    if (ulTag.classList.contains('none')) {
        ulTag.classList.remove('none')
    }
    if (sidebar.classList.contains('none')) {
        sidebar.classList.remove('none')
    }
    displayName.innerText = `Hello, ${localStorage.getItem('username')}`

}