// const body = document.querySelector('body');

// const body = document.body
// console.log(body)

/* 
const heading = document.getElementById("heading")
console.log(heading)

const eventElement = document.querySelector('.events');
eventElement.innerHTML = "Soccer training Wednesday";
eventElement.style.backgroundColor = 'blue';
console.log(eventElement);

const div = document.createElement('div');
div.innerHTML = "new div";

const body = document.querySelector('body');
body.appendChild(div)
*/

/* 
const variants = ['Pizza', 'Falafel', 'Dal']

const body = document.querySelector('body');

const ul = document.createElement('ul')

for (const dish of variants) {
    const li = document.createElement('li')
    li.innerHTML = dish
    ul.appendChild(li)
}

body.appendChild(ul)
*/

/* 
const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

function attachimageToElement(imageUrl, element) {
    const img = document.createElement('img')
    img.src = imageUrl
    element.appendChild(img)
}

const ul = document.createElement('ul')

for (const podcast of podcasts) {
    const li = document.createElement('li')

    const h1 = document.createElement('h1')
    h1.innerText = podcast.name

    li.appendChild(h1)

    if (podcast.imageUrl) {
        attachimageToElement(podcast.imageUrl, li)
    }

    ul.appendChild(li)
}

body.appendChild(ul)
*/

// const button = document.getElementById('button')

/* 
function sayHello(event) {
    console.log('Hello');
    event.target.style.background = 'violet';
}

button.addEventListener('click', sayHello);
*/

/* 
function darkLight(event) {
    const h1 = document.getElementById('heading');
    body.style.background = 'violet';
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    h1.style.color = 'white';
}

button.addEventListener('click', darkLight);
*/
