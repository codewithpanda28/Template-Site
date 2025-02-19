// Initialize AOS
AOS.init();

// Load and display templates
async function loadTemplates() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayTemplates(data.templates);
    } catch (error) {
        console.error('Error loading templates:', error);
    }
}

// Display templates using map function
function displayTemplates(templates) {
    const container = document.getElementById('cards-container');
    container.innerHTML = templates.map(template => `
        <div class="template-card" data-aos="fade-up" data-category="${template.category}">
            <div class="card-image">
                <img src="${template.images[0]}" alt="${template.title}">
            </div>
            <div class="card-content">
                <h3>${template.title}</h3>
                <p>${template.description}</p>
                <div class="card-tags">
                    ${template.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-buttons">
                    <a href="preview.html?id=${template.id}" class="preview-button">
                        <i class="fas fa-eye"></i>
                        <span>Preview</span>
                    </a>
                    <a href="download.html?id=${template.id}" class="download-button">
                        <i class="fas fa-download"></i>
                        <span>Download</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter templates
function filterTemplates() {
    const filterSelect = document.getElementById('template-filter');
    const searchInput = document.getElementById('template-search');
    const searchBtn = document.querySelector('.search-btn');
    
    function updateFilter() {
        const category = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.template-card');
        let hasResults = false;
        
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            const cardTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const matchesCategory = category === 'all' || cardCategory === category;
            const matchesSearch = searchTerm === '' || 
                cardTitle.includes(searchTerm) || 
                cardDesc.includes(searchTerm) ||
                cardTags.some(tag => tag.includes(searchTerm));
            
            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results message
        const noResults = document.getElementById('no-results');
        if (!hasResults) {
            if (!noResults) {
                const message = document.createElement('div');
                message.id = 'no-results';
                message.className = 'no-results';
                message.innerHTML = `
                    <div class="no-results-content">
                        <i class="fas fa-search"></i>
                        <h3>No templates found</h3>
                        <p>Try different keywords or browse all templates</p>
                    </div>
                `;
                document.getElementById('cards-container').appendChild(message);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    filterSelect.addEventListener('change', updateFilter);
    searchInput.addEventListener('input', updateFilter);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateFilter();
        }
    });
    searchBtn.addEventListener('click', updateFilter);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        // Menu Toggle Functionality
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a, .nav-links button').forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    loadTemplates();
    filterTemplates();
    
    // Handle view more button
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const container = document.getElementById('cards-container');
            container.classList.toggle('show-all');
            viewMoreBtn.querySelector('span').textContent = 
                container.classList.contains('show-all') ? 'Show Less' : 'View More';
        });
    }

    const form = document.querySelector('.project-form');
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Handle WhatsApp button click
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value || '';
        const email = document.getElementById('email').value || '';
        const phone = document.getElementById('phone').value || '';
        const budget = document.getElementById('budget').value || '';
        const projectType = document.getElementById('project-type').value || '';
        const description = document.getElementById('description').value || '';

        // Create WhatsApp message
        const message = `*New Project Request*%0A
--------------------------------%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Budget:* ${budget}%0A
*Project Type:* ${projectType}%0A
*Description:* ${description}%0A
--------------------------------`;

        // Open WhatsApp with your number
        window.location.href = `https://wa.me/918252472186?text=${message}`;
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        // FormSubmit will handle the email sending
        // You can add additional validation here if needed
        console.log('Form submitted');
    });

    const searchInput = document.getElementById('template-search');
    const clearSearch = document.getElementById('clear-search');

    // Show/hide clear button
    searchInput.addEventListener('input', function() {
        if (this.value) {
            clearSearch.classList.add('visible');
        } else {
            clearSearch.classList.remove('visible');
        }
    });

    // Clear search
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        this.classList.remove('visible');
        // Trigger search update
        searchInput.dispatchEvent(new Event('input'));
    });
});
