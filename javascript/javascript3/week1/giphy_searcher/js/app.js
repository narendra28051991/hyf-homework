const text = document.getElementById('text')
const number = document.getElementById('number')
const button = document.querySelector('button')
const ulTag = document.querySelector('ul')

const updateUI = async (text, value) => {

    const response = await getGiphies(text, value)
    const hrefData = response.data

    ulTag.innerHTML = ''

    hrefData.forEach(each => {
        const liTag = document.createElement('li')
        const image = document.createElement('img')
        image.setAttribute('src', each.images.original.url)
        liTag.append(image)
        ulTag.appendChild(liTag)
    })

}

button.addEventListener('click', async (e) => {
    e.preventDefault();

    if (text.value) {
        updateUI(text.value, 5)
        number.value = ''
        number.addEventListener('input', () => updateUI(text.value, number.value))
    }
})