// Initialize AOS
AOS.init();

// Fetch and load template data
async function loadTemplateData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data.templates[0]; // Get the first template for now
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

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
