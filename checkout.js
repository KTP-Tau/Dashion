// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.querySelector('.list-group.mb-3');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between lh-sm';

        const itemDetails = document.createElement('div');
        const itemName = document.createElement('h6');
        itemName.className = 'my-0';
        itemName.textContent = item.name;

        const itemDescription = document.createElement('small');
        itemDescription.className = 'text-body-secondary';
        itemDescription.textContent = 'Brief description';

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);

        const itemActions = document.createElement('div');
        itemActions.className = 'd-flex align-items-center';

        const itemPrice = document.createElement('span');
        itemPrice.className = 'text-body-secondary mr-3';
        itemPrice.textContent = `$${Number.parseFloat(item.price).toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm';
        removeButton.textContent = '🗑️';
        removeButton.addEventListener('click', () => {
            removeFromCart(index);
        });

        itemActions.appendChild(itemPrice);
        itemActions.appendChild(removeButton);

        listItem.appendChild(itemDetails);
        listItem.appendChild(itemActions);

        cartItemsContainer.appendChild(listItem);

        total += Number.parseFloat(item.price);
    });

    // Add total price element
    const totalItem = document.createElement('li');
    totalItem.className = 'list-group-item d-flex justify-content-between';
    totalItem.innerHTML = `
        <span>Total (USD)</span>
        <strong>$${total.toFixed(2)}</strong>
    `;
    cartItemsContainer.appendChild(totalItem);
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cart.length;
}

// Call the function to render cart items on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartCount();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
