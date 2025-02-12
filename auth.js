// Authentication Module for Blog Management

// Predefined admin credentials (replace with your preferred credentials)
const ADMIN_USERNAME = 'codewithpanda';
const ADMIN_PASSWORD = 'CWP2025!blog';

// Login function
function adminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Set admin session
        localStorage.setItem('adminLoggedIn', 'true');
        
        // Close login modal
        const loginModal = document.getElementById('adminLoginModal');
        if (loginModal) loginModal.style.display = 'none';
        
        // Show admin controls
        showAdminControls();
        
        return true;
    } else {
        alert('Invalid credentials. Access denied.');
        return false;
    }
}

// Logout function
function adminLogout() {
    localStorage.removeItem('adminLoggedIn');
    hideAdminControls();
}

// Check if admin is logged in
function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Show admin controls
function showAdminControls() {
    const adminButtons = document.querySelectorAll('.admin-control');
    adminButtons.forEach(button => {
        button.style.display = 'inline-block';
    });
}

// Hide admin controls
function hideAdminControls() {
    const adminButtons = document.querySelectorAll('.admin-control');
    adminButtons.forEach(button => {
        button.style.display = 'none';
    });
}

// Initialize admin controls on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isAdminLoggedIn()) {
        showAdminControls();
    } else {
        hideAdminControls();
    }
});

// Protect admin functions
function protectedEditBlog(index) {
    if (isAdminLoggedIn()) {
        editBlog(index);
    } else {
        openAdminLoginModal();
    }
}

function protectedDeleteBlog(index) {
    if (isAdminLoggedIn()) {
        deleteBlog(index);
    } else {
        openAdminLoginModal();
    }
}

// Open admin login modal
function openAdminLoginModal() {
    const loginModal = document.getElementById('adminLoginModal');
    if (loginModal) loginModal.style.display = 'block';
}

// Close admin login modal
function closeAdminLoginModal() {
    const loginModal = document.getElementById('adminLoginModal');
    if (loginModal) loginModal.style.display = 'none';
}
