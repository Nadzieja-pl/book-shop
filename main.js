let shop = document.getElementById('book');



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
    <button data-modal-target="#modal" class="my_button1" >
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
  let search = basket.find((x)=>x.id===selectedItem.id);
  if(search === undefined) return;
 else if(search.item === 0) return;
  else{
   search.item -= 1;
  //  console.log(basket);
  }
update(selectedItem.id);
  basket = basket.filter((x)=>x.item !== 0);

   localStorage.setItem("data", JSON.stringify(basket));}
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



let openModalButtons = document.querySelectorAll('[data-modal-target]')
let closeModalButtons = document.querySelectorAll('[data-close-button]')
openModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        let modal = button.closest('.modal')
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