"use strict";
let shop = document.getElementById('book');

let shopItemsData = [{
    id: "a",
    author: "Douglas Crockford",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    description: "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
    imgSrc: "1.jpg",
  },
    {
        id: "b",
      author: "David Herman",
      title: "Effective JavaScript: 68 Specific Ways <br>to Harness the Power of JavaScript",
      price: 22,
      description: "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency.",
      imgSrc: "2.jpg",
    },
    {
        id: "c",
      author: "David Flanagan",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      description: "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript.",
      imgSrc: "3.jpg",
    },
    {
        id: "d",
      author: " Eric Elliott",
      title: "Programming JavaScript Applications",
      price: 19,
      description: "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
    imgSrc: "4.jpg",
    },
    {
        id: "e",
      author: "Addy Osmani",
      title: "Learning JavaScript Design Patterns",
      price: 32,
      description: "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      imgSrc: "5.jpg",
    },
    {
        id: "f",
      author: "Boris Cherny",
      title: "Programming TypeScript",
      price: 28,
      description: "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
      imgSrc: "6.jpg",
    },
    {
        id: "g",
      author: "Alex Banks, Eve Porcello",
      title: "Learning React, 2nd Edition",
      price: 25,
      description: "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
      imgSrc: "7.jpg",
    },
    {
        id: "h",
      author: "Bradley Meck Alex Young<br> and Mike Cantelon",
      title: "Node.js in Action",
      price: 38,
      description: "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
      imgSrc: "8.jpg",
    },
    {
        id: "i",
      author: "Kyle Simpson",
      title: "You Don't Know JS Yet: Get Started",
      price: 26,
      description: "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
      imgSrc: "9.jpg",
    },
    {
        id: "j",
      author: "John Resig and Bear Bibeault",
      title: "Secrets of the JavaScript Ninja",
      price: 33,
      description: "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
      imgSrc: "10.jpg",
    },];

let basket = JSON.parse(localStorage.getItem("data"))||[];
 let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, imgSrc,description,author,title,price,} = x;
        let search = basket.find((x)=>x.id===id)||[];
        return `<div class="book1" id=product-id-${id}><img src=${imgSrc} alt="image of the book">
    <div class="buttons">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">
${search.item===undefined?0: search.item}
        </div><i onclick="increment(${id})" class="bi bi-plus-lg"></i>
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
        <p>${description}</p>
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


 let increment = (id) => {

 let selectedItem = id;

 let search = basket.find((x)=>x.id===selectedItem.id)

 if(search === undefined){
  basket.push({
  id: selectedItem.id,
item: 1,});

 }
 else{
  search.item += 1;
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
 }
 update(selectedItem.id);
};

 let decrement = (id)=>{
  let selectedItem = id;

  let search = basket.find((x)=>x.id===selectedItem.id)
  if(search.item === 0) return;
  else{
   search.item -= 1;
  //  console.log(basket);
  }
  localStorage.setItem("data", JSON.stringify(basket));
   update(selectedItem.id);}
  ;

 let update = (id)=>{
  let search = basket.find((x)=>x.id===id);
  // console.log(search.item)
  document.getElementById(id).innerHTML = search.item;
 calculation()};


let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

};

calculation();



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