console.log("\n\nhyfBay - get the okay'est products here\n\n")

const products = window.getAvailableProducts()

function renderProducts(products) {
    const courses = document.querySelector('.courses')
    const ul = document.createElement('ul')
        
    for (let index = 0; index < products.length; index++) {
        const product = products[index]
        const li = document.createElement('li')

        for (const course in product) {
            const p = document.createElement('p')
            p.innerText = 
                `${course}: ${product[course]}`.replace('title: ', '')
            li.appendChild(p)
        }

        ul.appendChild(li)
    }
    courses.appendChild(ul)
}

renderProducts(products);
