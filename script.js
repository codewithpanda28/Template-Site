// Initialize AOS
AOS.init();

// Load and display templates
async function loadTemplates() {
    try {
        console.log('Fetching templates...');
        const response = await fetch('data.json');
        console.log('Response:', response);
        const data = await response.json();
        console.log('Data loaded:', data);
        if (data && data.templates) {
            displayTemplates(data.templates);
            // Initialize filters after templates are loaded
            filterTemplates();
        } else {
            console.error('No templates found in data');
        }
    } catch (error) {
        console.error('Detailed error:', error);
        console.error('Error loading templates:', error);
        document.getElementById('cards-container').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Error loading templates. Please try again later.</p>
            </div>
        `;
    }
}

// Display templates using map function
function displayTemplates(templates) {
    const container = document.getElementById('cards-container');
    if (!container) return;

    container.innerHTML = templates.map((template, index) => {
        const type = template.type || 'free';
        const price = template.price || 'Free';
        const mainImage = template.images?.[0] || template.image;
        
        if (type === 'paid') {
            return `
                <div class="template-card paid" data-aos="fade-up" data-category="${template.category}" data-type="${type}">
                    <div class="template-number">${index + 1}</div>
                    <div class="template-image">
                        <img src="${mainImage}" alt="${template.title}" onerror="this.src='images/placeholder.jpg'">
                        <div class="premium-badge">
                            <i class="fas fa-crown"></i> Premium
                        </div>
                    </div>
                    <div class="template-info">
                        <h3>${template.title}</h3>
                        <p>${template.description}</p>
                        <div class="template-meta">
                            <span class="price-tag"><i class="fas fa-tag"></i> ₹${price}</span>
                            <div class="card-buttons">
                                <a href="preview.html?id=${template.id}" class="preview-button">
                                    <i class="fas fa-eye"></i>
                                    <span>Preview</span>
                                </a>
                                <button class="buy-btn" onclick="showPurchasePopup('${template.title}', '${price}', '${mainImage}', '${index + 1}')">
                                    <i class="fas fa-shopping-cart"></i>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="template-card" data-aos="fade-up" data-category="${template.category}" data-type="${type}">
                    <div class="template-number">${index + 1}</div>
                    <div class="template-image">
                        <img src="${mainImage}" alt="${template.title}" onerror="this.src='images/placeholder.jpg'">
                    </div>
                    <div class="template-info">
                        <h3>${template.title}</h3>
                        <p>${template.description}</p>
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
            `;
        }
    }).join('');

    // Add animation delay to template numbers
    document.querySelectorAll('.template-number').forEach((num, i) => {
        num.style.animationDelay = `${i * 0.1}s`;
    });
}

// Filter templates
function filterTemplates() {
    const categoryFilter = document.getElementById('template-filter');
    const typeFilter = document.getElementById('type-filter');
    const searchInput = document.getElementById('template-search');
    
    function updateFilter() {
        const category = categoryFilter.value;
        const type = typeFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.template-card');
        let hasResults = false;
        
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardType = card.dataset.type || 'free';
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            
            const matchesCategory = category === 'all' || cardCategory === category;
            const matchesType = type === 'all' || cardType === type;
            const matchesSearch = searchTerm === '' || 
                cardTitle.includes(searchTerm) || 
                cardDesc.includes(searchTerm);
            
            if (matchesCategory && matchesType && matchesSearch) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results message
        const cardsContainer = document.getElementById('cards-container');
        const noResults = cardsContainer.querySelector('.no-results');
        
        if (!hasResults) {
            if (!noResults) {
                const message = document.createElement('div');
                message.className = 'no-results';
                message.innerHTML = `
                    <div class="no-results-content">
                        <i class="fas fa-search"></i>
                        <h3>No templates found</h3>
                        <p>Try different filters or search terms</p>
                    </div>
                `;
                cardsContainer.appendChild(message);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    categoryFilter.addEventListener('change', updateFilter);
    typeFilter.addEventListener('change', updateFilter);
    searchInput.addEventListener('input', updateFilter);
}

// Purchase popup functionality
function showPurchasePopup(templateName, price, imageUrl, templateNumber) {
    const popup = document.getElementById('purchasePopup');
    document.getElementById('popupTemplateName').textContent = `Template #${templateNumber} - ${templateName}`;
    document.getElementById('popupTemplatePrice').textContent = price;
    document.getElementById('popupTemplateImage').src = imageUrl;
    
    // Update WhatsApp link with template info
    const whatsappBtn = popup.querySelector('.whatsapp');
    const message = encodeURIComponent(`Hi, I want to purchase Template #${templateNumber} - ${templateName} (₹${price})`);
    whatsappBtn.href = `https://wa.me/918252472186?text=${message}`;
    
    popup.style.display = 'flex';
}

function closePurchasePopup() {
    const popup = document.getElementById('purchasePopup');
    popup.style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.getElementById('purchasePopup');
    if (event.target === popup) {
        closePurchasePopup();
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
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

async function loadTemplatePreview() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const templateId = urlParams.get('id');
        
        const response = await fetch('data.json');
        const data = await response.json();
        const template = data.templates.find(t => t.id.toString() === templateId);

        if (template) {
            document.title = `${template.title} - Preview`;
            
            const previewContent = document.getElementById('previewContent');
            const isPremium = template.type === 'paid';
            
            previewContent.innerHTML = `
                <div class="preview-header" data-aos="fade-up">
                    <h1>${template.title}</h1>
                    <p>${template.description}</p>
                    <div class="preview-actions">
                        <a href="${template.previewLink}" target="_blank" class="action-btn live-btn">
                            <i class="fas fa-eye"></i> Live Demo
                        </a>
                        ${isPremium ? `
                            <button onclick="showPurchasePopup('${template.title}', '${template.price}', '${template.images[0]}', '${template.id}')" class="action-btn buy-btn">
                                <i class="fas fa-shopping-cart"></i> Buy Now - ₹${template.price}
                            </button>
                        ` : `
                            <a href="${template.downloadLink}" class="action-btn download-btn">
                                <i class="fas fa-download"></i> Download Now
                            </a>
                        `}
                    </div>
                </div>
                <!-- Rest of the preview content remains same -->
            `;
        }
    } catch (error) {
        console.error('Error loading template:', error);
    }
}


// Projects Popup Functions
function showProjectsPopup() {
    document.getElementById('projectsPopup').style.display = 'flex';
}

function closeProjectsPopup() {
    document.getElementById('projectsPopup').style.display = 'none';
}

// Add event listener for projects link
document.getElementById('projectsLink').addEventListener('click', function(e) {
    e.preventDefault();
    showProjectsPopup();
});

// Close popup when clicking outside
window.addEventListener('click', function(e) {
    const popup = document.getElementById('projectsPopup');
    if (e.target === popup) {
        closeProjectsPopup();
    }
});