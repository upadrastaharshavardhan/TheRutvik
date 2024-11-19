// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    const menuIcon = menuToggle.querySelector('i');
    
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    });
}

// Auth functionality
function initializeUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
}

function registerUser(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phone: formData.get('phone'),
        city: formData.get('city')
    };

    // Check if email already exists
    if (users.some(user => user.email === userData.email)) {
        showToast('Email already registered', 'error');
        return;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    showToast('Registration successful!', 'success');
    window.location.href = 'login.html';
}

function loginUser(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showToast('Login successful!', 'success');
        window.location.href = 'dashboard.html';
    } else {
        showToast('Invalid credentials', 'error');
    }
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    const isAuthPage = window.location.pathname.includes('login.html') || 
                      window.location.pathname.includes('register.html');
    
    if (!currentUser && !isAuthPage) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Initialize users array in localStorage
initializeUsers();

// Check authentication on protected pages
checkAuth();