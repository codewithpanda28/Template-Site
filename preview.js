// Initialize AOS
AOS.init();

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});

// Fetch and load template data
async function loadTemplateData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const templateId = new URLSearchParams(window.location.search).get('id');
        return data.templates.find(t => t.id.toString() === templateId) || data.templates[0];
    } catch (error) {
        console.error('Error loading template data:', error);
    }
}

// Update preview content
function updatePreview(template) {
    // Update title and description
    document.getElementById('preview-title').textContent = template.title;
    document.getElementById('preview-description').textContent = template.description;
    
    // Update tags
    const tagsContainer = document.getElementById('preview-tags');
    tagsContainer.innerHTML = template.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Update main image
    document.getElementById('preview-main-image').src = template.images[0];
    
    // Update thumbnails
    const thumbnailsContainer = document.querySelector('.preview-thumbnails');
    thumbnailsContainer.innerHTML = template.images
        .map((image, index) => `
            <img class="preview-thumb ${index === 0 ? 'active' : ''}" 
                 src="${image}" 
                 alt="Preview ${index + 1}"
                 onclick="updateMainImage('${image}', this)">
        `).join('');
    
    // Update download button
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.onclick = () => window.location.href = template.downloadLink;
}

// Function to update main image when clicking thumbnails
function updateMainImage(src, thumbElement) {
    document.getElementById('preview-main-image').src = src;
    // Update active state of thumbnails
    document.querySelectorAll('.preview-thumb').forEach(thumb => thumb.classList.remove('active'));
    thumbElement.classList.add('active');
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const templateData = await loadTemplateData();
    if (templateData) {
        updatePreview(templateData);
    }
});

// Open preview link when preview button is clicked
document.querySelector('.preview-btn').addEventListener('click', async function() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const templateId = new URLSearchParams(window.location.search).get('id');
        const template = data.templates.find(t => t.id.toString() === templateId);
        if (template && template.previewLink) {
            window.open(template.previewLink, '_blank');
        }
    } catch (error) {
        console.error('Error opening preview link:', error);
    }
});

  // Add event listener to menu toggle
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');

    // Change icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});