var cart = [];
var strArr = [];
var keys = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice(){
  var price = Math.random() * 10;
  if (price < 1){
    price = 1;
  }
  return price = Math.floor(price);
}

function addToCart(item) {
  var money = getPrice();
 cart.push({[item]: money});
 var consoleRet = `${item} has been added to your cart.`;
 console.log(consoleRet);
 return cart;
}

function viewCart() {

if (cart.length === 0){
  console.log("Your shopping cart is empty.");
}

else if (cart.length === 1){
  var name = Object.keys(cart[0]);
  console.log(`In your cart, you have ${name} at $${cart[0][name]}.`)
}

else if (cart.length > 1){
  keys = [];
  for (var j = 0; j<cart.length; j++){
 keys.push(Object.keys(cart[j]));
}
  for (var i = 0; i < keys.length; i++){
    strArr.push(`In your cart, you have ${keys[i]} at $${cart[i][keys[i]]} and`)
  }

console.log(strArr);
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
