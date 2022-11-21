"use strict";
let shop = document.getElementById('book');

let shopItemsData = [{
    id: "1b",
    author: "Douglas Crockford",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    description: "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
    imgSrc: "1.jpg",
  },
    {
        id: "2b",
      author: "David Herman",
      title: "Effective JavaScript: 68 Specific Ways <br>to Harness the Power of JavaScript",
      price: 22,
      description: "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency.",
      imgSrc: "2.jpg",
    },
    {
        id: "3b",
      author: "David Flanagan",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      description: "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript.",
      imgSrc: "3.jpg",
    },
    {
        id: "4b",
      author: " Eric Elliott",
      title: "Programming JavaScript Applications",
      price: 19,
      description: "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
    imgSrc: "4.jpg",
    },
    {
        id: "5b",
      author: "Addy Osmani",
      title: "Learning JavaScript Design Patterns",
      price: 32,
      description: "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      imgSrc: "5.jpg",
    },
    {
        id: "6b",
      author: "Boris Cherny",
      title: "Programming TypeScript",
      price: 28,
      description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
      imgSrc: "6.jpg",
    },
    {
        id: "7b",
      author: "Alex Banks, Eve Porcello",
      title: "Learning React, 2nd Edition",
      price: 25,
      description: "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
      imgSrc: "7.jpg",
    },
    {
        id: "8b",
      author: "Bradley Meck Alex Young<br> and Mike Cantelon",
      title: "Node.js in Action",
      price: 38,
      description: "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
      imgSrc: "8.jpg",
    },
    {
        id: "9b",
      author: "Kyle Simpson",
      title: "You Don't Know JS Yet: Get Started",
      price: 26,
      description: "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
      imgSrc: "9.jpg",
    },
    {
        id: "10b",
      author: "John Resig and Bear Bibeault",
      title: "Secrets of the JavaScript Ninja",
      price: 33,
      description: "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
      imgSrc: "10.jpg",
    },];

 let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, imgSrc,description,author,title,price,} = x
        return `<div class="book1" id=product-id-${id}><img src=${imgSrc} alt="image of the book">
    <div class="buttons">
        <i class="bi bi-dash-lg"></i>
        <div class="quantity">
0
        </div><i class="bi bi-plus-lg"></i>
</div>
<div>
    <button data-modal-target="#modal" class="my_button1">
        <i class="fa-solid fa-circle-info"></i>
        <span>
            Show more
        </span>
    </button>
    <div class="modal" id="modal">
        <div class="more-text"><button data-close-button class="close-button">&times;</button>
        ${description}
        </div>
    </div>
</div>
        <h3>
            ${author}
        </h3>
        <p class="text">
            ${title}
        </p>
        <p class="price">
           $ ${price}
        </p>
    </div></div>`;}));
 }
 generateShop()


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
openModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
}

function closeModal(modal){
    if(modal ==null) return
    modal.classList.remove('active')
}