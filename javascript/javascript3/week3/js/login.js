const loginForm = document.querySelector('form')
const usernameTag = document.querySelector('input[type=text]')
const passwordTag = document.querySelector('input[type=password]')
const errorTag = document.querySelector('form p')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = usernameTag.value
    const password = passwordTag.value

    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        localStorage.setItem('login', true)
        location.href = '../index.html'
    }
    
    else if (username === localStorage.getItem('username') && password !== localStorage.getItem('password')) {
        errorTag.innerHTML = `Please enter the correct password`
    }

    else {
        errorTag.innerHTML = `You have not signed up. Please click signup`
    }
})