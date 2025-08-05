// Main JavaScript functionality for Urugano Realty

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeSearchForm();
    initializeForms();
    initializeListingCards();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#ff5a5f';
        }
    });
}

// Search form functionality
function initializeSearchForm() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        const searchButton = searchForm.querySelector('button');
        if (searchButton) {
            searchButton.addEventListener('click', handleSearch);
        }
    }
}

// Handle search functionality
function handleSearch(e) {
    e.preventDefault();
    const searchForm = e.target.closest('.search-form');
    const location = searchForm.querySelector('input[type="text"]').value;
    const checkin = searchForm.querySelector('input[type="date"]:nth-of-type(1)').value;
    const checkout = searchForm.querySelector('input[type="date"]:nth-of-type(2)').value;
    const guests = searchForm.querySelector('select').value;
    
    if (location.trim()) {
        // In a real application, this would make an API call
        console.log('Search parameters:', { location, checkin, checkout, guests });
        alert(`Searching for properties in ${location} for ${guests}`);
        // Redirect to listings page with search parameters
        window.location.href = `listings.html?location=${encodeURIComponent(location)}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
    } else {
        alert('Please enter a location to search.');
    }
}

// Form handling
function initializeForms() {
    // Login form
    const loginForm = document.querySelector('form');
    if (loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    if (loginForm && window.location.pathname.includes('signup.html')) {
        loginForm.addEventListener('submit', handleSignup);
    }
    
    // Application form
    if (loginForm && window.location.pathname.includes('roomate-apply.html')) {
        loginForm.addEventListener('submit', handleRoommateApplication);
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    if (email && password) {
        // In a real application, this would make an API call
        console.log('Login attempt:', { email });
        alert('Login successful! Redirecting to homepage...');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    if (name && email && password) {
        // In a real application, this would make an API call
        console.log('Signup attempt:', { name, email });
        alert('Account created successfully! Redirecting to login...');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
}

// Handle roommate application
function handleRoommateApplication(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    if (name && email && message) {
        // In a real application, this would make an API call
        console.log('Roommate application:', { name, email, message });
        alert('Application sent successfully!');
        window.location.href = 'roomates.html';
    } else {
        alert('Please fill in all fields.');
    }
}

// Listing card interactions
function initializeListingCards() {
    const listingCards = document.querySelectorAll('.listing-card');
    listingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });
}

// Property booking functionality
function bookProperty() {
    // In a real application, this would open a booking modal or redirect to booking page
    alert('Booking functionality would be implemented here. For now, please contact us directly.');
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-RW', {
        style: 'currency',
        currency: 'RWF'
    }).format(price);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Search functionality for listings page
function filterListings(searchTerm) {
    const listings = document.querySelectorAll('.listing-card');
    const searchLower = searchTerm.toLowerCase();
    
    listings.forEach(listing => {
        const title = listing.querySelector('h3').textContent.toLowerCase();
        const description = listing.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchLower) || description.includes(searchLower)) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });
}

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-menu-open');
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Image lazy loading (for better performance)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Export functions for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPrice,
        validateEmail,
        filterListings,
        bookProperty
    };
}

// JS interactivity goes here, like logout functionality
document.addEventListener('DOMContentLoaded', function() {
  // Interactive elements can be initialized here
  console.log("Welcome to Urugano Realty");
});
