// Mobile Menu Toggle
function menutoggle() {
    const menuItems = document.getElementById('MenuItems');
    
    if (menuItems.style.maxHeight === "0px" || menuItems.style.maxHeight === "") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}

// Account Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal Elements
    const accountBtn = document.querySelector('.account-btn');
    const accountModal = document.getElementById('account-modal');
    const closeBtn = document.querySelector('.close-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // Show modal when account button is clicked
    accountBtn.addEventListener('click', function(e) {
        e.preventDefault();
        accountModal.style.display = 'block';
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        accountModal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal
    window.addEventListener('click', function(e) {
        if (e.target === accountModal) {
            accountModal.style.display = 'none';
        }
    });
    
    // Switch between login and register forms
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
    
    // Form submission handling
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Here you would typically send this data to your server
        console.log('Login attempt with:', { email, password });
        alert('Login functionality would connect to your backend in a real application');
        accountModal.style.display = 'none';
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Here you would typically send this data to your server
        console.log('Registration attempt with:', { name, email, password });
        alert('Registration successful! (In a real app, this would create an account)');
        accountModal.style.display = 'none';
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Animation for cart icon
            cartCount.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 300);
            
            // Here you would typically add the product to a cart array
            console.log('Product added to cart');
        });
    });

    // Add this at the top of your existing script.js
const API_URL = 'http://localhost:5000/api';

// Modified login form submission
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        
        // Store the token (in a real app, you might use HttpOnly cookies)
        localStorage.setItem('token', data.token);
        
        alert('Login successful!');
        accountModal.style.display = 'none';
        
        // Update UI to show logged in state
        updateAuthUI(true);
    } catch (error) {
        alert(error.message);
    }
});

// Modified registration form submission
registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }
        
        alert('Registration successful! You can now login.');
        registerBtn.click(); // Switch to login form
    } catch (error) {
        alert(error.message);
    }
});

// Function to update UI based on auth status
async function updateAuthUI(isLoggedIn) {
    const accountBtn = document.querySelector('.account-btn');
    
    if (isLoggedIn) {
        try {
            const response = await fetch(`${API_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            const user = await response.json();
            
            if (response.ok) {
                accountBtn.textContent = user.data.name;
                accountBtn.href = '#';
                accountBtn.classList.add('logged-in');
            }
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    } else {
        accountBtn.textContent = 'Account';
        accountBtn.href = '#account';
        accountBtn.classList.remove('logged-in');
    }
}

// Check auth status on page load
document.addEventListener('DOMContentLoaded', async function() {
    if (localStorage.getItem('token')) {
        updateAuthUI(true);
    }
    
    // Load products from backend
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        
        if (response.ok) {
            // Here you would update the DOM with the fetched products
            console.log('Products loaded:', products);
        }
    } catch (error) {
        console.error('Failed to load products:', error);
    }
    
    // Rest of your existing DOMContentLoaded code...
});
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const menuItems = document.getElementById('MenuItems');
                if (window.innerWidth <= 800 && menuItems.style.maxHeight === "200px") {
                    menuItems.style.maxHeight = "0px";
                }
            }
        });
    });
});