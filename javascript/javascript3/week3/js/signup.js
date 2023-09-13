const signupForm = document.querySelector('form')
const usernameTag = document.querySelector('input[type=text]')
const passwordTag = document.querySelector('input[type=password]')
const errorTag = document.querySelector('form p')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = usernameTag.value.trim()
    const password = passwordTag.value

    if (username === localStorage.getItem('username')) {
        errorTag.innerHTML = `${username} has already been signed up. Please login`
    }
    
    else {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        localStorage.setItem('login', false)
        location.href = 'login.html'
    }
})