import { addToCart, cart } from "./cart.js";
const dummyData = [
    {
        "id": 1,
        "name": "Stylish Jacket",
        "price": 49.99,
        "img": "img/product1.jpg"
    },
    {
        "id": 2,
        "name": "Elegant Dress",
        "price": 79.99,
        "img": "img/product2.jpg"
    },
    {
        "id": 3,
        "name": "Casual Sneakers",
        "price": 59.99,
        "img": "img/product3.jpg"
    }
];

const content = document.querySelector('.shop-items');
dummyData.forEach(element => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 col-sm-6 mb-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card product-card';

    const img = document.createElement('img');
    img.src = `img/product${element.id}.jpg`;
    img.className = 'card-img-top';
    img.alt = element.name;

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body text-center';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = element.name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `$${element.price}`;

    const addToCartBtn = document.createElement('a');
    addToCartBtn.href = '#cart';
    addToCartBtn.className = 'btn btn-success';
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.setAttribute('data-product-id', element.id);
    addToCartBtn.setAttribute('data-product-name', element.name);
    addToCartBtn.setAttribute('data-product-price', element.price);
    addToCartBtn.setAttribute('data-product-img', element.img);

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(addToCartBtn);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    content.appendChild(colDiv);
});

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = button.getAttribute('data-product-price');
        const productImg = button.getAttribute('data-product-img');
        addToCart(productId, productName, productPrice, productImg);
        // console.log(cart);
    });
});