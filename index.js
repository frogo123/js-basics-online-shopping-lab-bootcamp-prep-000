var cart = [];

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
  var keys = Object.keys(cart);
  console.log(keys);

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
