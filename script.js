// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', submitNewsletter);
});

function addToCart(event) {
    const button = event.target;
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;

    // Here you would normally update the cart in the backend
    // For now, we'll just show an alert
    alert(`Added to cart: ${productName} - ${productPrice}`);
}

function submitNewsletter(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Here you would normally send this to your backend
    // For now, we'll just show an alert
    alert(`Thank you for subscribing with email: ${email}`);
    emailInput.value = '';
}