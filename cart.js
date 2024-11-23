// Array to store cart items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(productId, productName, productPrice, imgPath) {
    cart.push({ id: productId, name: productName, price: productPrice, img: imgPath });
    localStorage.setItem('cart', JSON.stringify(cart));
}

export { cart, addToCart };