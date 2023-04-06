const getTheOkayestProducts = () => {
    // filters the courses
    options.addEventListener('click', filterFunction)
    // sorts the courses
    clickEvents(products)
    // renders the courses
    renderProducts(products)
}

const clickEvents = (courses) => {
    title.addEventListener('click', () => { sortByTitle(courses) })
    price.addEventListener('click', () => { sortByPrice(courses) })
    rating.addEventListener('click', () => { sortByRating(courses) })
}

const filterFunction = () => {
    const userOption = document.querySelector('input[name=option]:checked').value;
    
    switch(userOption) {
        case 'minPrice':
            user.addEventListener('input', () => filterByOption(userOption));
            break;

        case 'name':
            user.addEventListener('input', () => filterByOption(userOption));
            break;

        case 'maxPrice':
            user.addEventListener('input', () => filterByOption(userOption));
            break;
    }
}

const filterByOption = (option) => {
    const userInput = document.querySelector('.user').value;
    let filteredProducts = products

    if (userInput !== '') {
        if (option === 'minPrice') {
            filteredProducts =  products.filter(product => parseInt(product.price) >= parseInt(userInput))
        }
        if (option === 'name') {
            filteredProducts =  products.filter(product => product.title.toLowerCase().includes(userInput.toLowerCase()))
        }
        if (option === 'maxPrice') {
            filteredProducts =  products.filter(product => parseInt(product.price) <= parseInt(userInput))
        }
    }

    clickEvents(filteredProducts)
    renderProducts(filteredProducts)
}

const sortByTitle = (courses) => {
    courses.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
    })
    renderProducts(courses)
}

const sortByPrice = (courses) => {
    courses.sort((a, b) => a.price - b.price)
    renderProducts(courses)
}

const sortByRating = (courses) => {
    courses.sort((a, b) => a.rating - b.rating)
    renderProducts(courses)
}

const renderProducts = (products) => {
    const courses = document.querySelector('.courses')
    const productsList = document.querySelector('.products')
    if (productsList) productsList.remove();
    const ul = document.createElement('ul')
    ul.classList.add('products')
    
    products.forEach(product => {
        const li = document.createElement('li')
        const productKeys = Object.keys(product)
        productKeys.forEach(key => {
            const p = document.createElement('p')
            p.innerText = 
                `${key}: ${product[key]}`.replace('title: ', '')
            li.appendChild(p)
        })
        ul.appendChild(li)
    })
    courses.appendChild(ul)
}

const products = window.getAvailableProducts()
const options = document.getElementById('options');
const title = document.querySelector('.title');
const price = document.querySelector('.price');
const rating = document.querySelector('.rating');
const user = document.querySelector('.user');

getTheOkayestProducts();
