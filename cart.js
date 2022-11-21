let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data"))||[];
let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

  };

  calculation();

  let generateCartItems = () => {
if(basket.length !==0){
return (shoppingCart.innerHTML = basket.map((x)=>{

    let {id,item} = x;
    let search = shopItemsData.find((y)=>y.id === id) || [];
    return `
    <div class="cart-item">
<img width="100" height="140"src="${search.imgSrc}" alt=""/><button onclick="removeItem(${id})" class="red">&times;</button>
<div class="details">

<div class="title-price-x">
<h4>${search.author}</h4>
<p>${search.title}</p><p id="price">$ ${search.price}</p></div></div>
<div class="buttons1">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">${item}
        </div><i onclick="increment(${id})" class="bi bi-plus-lg"></i>
</div>
<div class="total">
<p>$</p> <p>${item * search.price}</p>
</div>
    </div>`;
}).join(""));
}
else{
    shoppingCart.innerHTML = ``
    label.innerHTML = `<h2>Cart is empty</h2>
    <a href="index.html">
    <button class="my_button">Back to home</button></a>`;
}
  };
  generateCartItems();
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
    generateCartItems();
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
   generateCartItems();
      localStorage.setItem("data", JSON.stringify(basket));}
     ;

    let update = (id)=>{
     let search = basket.find((x)=>x.id===id);
     // console.log(search.item)
     document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();};

    let removeItem = (id)=>{
    let selectedItem = id;
    // console.log(selectedItem.id)
    basket = basket.filter((x)=>x.id !== selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = () => {
    if (basket.length !== 0){
        let amount = basket.map((x)=>
        {
            let{item, id} = x;
            let search = shopItemsData.find((y)=>y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=>x+y,0);
        label.innerHTML =`
        <p class="bill">Total Bill : $ ${amount}</p>
        <div class="finish">
        <button class="checkout">Checkout</button>
        <button class="removeAll">Clear cart</button><div>`
    }
    else return
}
totalAmount();