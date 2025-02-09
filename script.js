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
                        <i class="fas fa-eye"></i> Preview
                    </a>
                    <a href="download.html?id=${template.id}" class="download-button">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter templates
function filterTemplates() {
    const filterSelect = document.getElementById('template-filter');
    const searchInput = document.querySelector('.input-wrapper input');
    
    filterSelect.addEventListener('change', updateFilter);
    searchInput.addEventListener('input', updateFilter);
    
    function updateFilter() {
        const category = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.template-card');
        
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            
            const matchesCategory = category === 'all' || cardCategory === category;
            const matchesSearch = cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);
            
            card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
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
    
    // Toggle navigation links on mobile and tablet devices
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});
