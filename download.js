// Initialize AOS
AOS.init();

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fetch and load template data
async function loadTemplateData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const templateId = parseInt(getUrlParameter('id'));
        return data.templates.find(template => template.id === templateId);
    } catch (error) {
        console.error('Error loading template data:', error);
    }
}

// Update download page content
function updateDownloadPage(template) {
    // Update title and description
    document.getElementById('template-title').textContent = template.title;
    document.getElementById('template-description').textContent = template.description;
    
    // Update preview image
    document.getElementById('template-image').src = template.images[0];
    
    // Update file details
    document.getElementById('file-size').textContent = template.fileSize;
    document.getElementById('last-updated').textContent = new Date(template.lastUpdated).toLocaleDateString();

    // Update technologies
    const techList = document.querySelector('.detail-item:nth-child(1) p');
    techList.textContent = template.technologies.join(', ');

    // Setup download button
    const downloadBtn = document.querySelector('.download-now-btn');
    downloadBtn.addEventListener('click', function() {
        if (this.classList.contains('downloading')) return;
        
        this.classList.add('downloading');
        const progressBar = this.querySelector('.download-progress');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    window.location.href = template.downloadLink;
                    this.classList.remove('downloading');
                    progressBar.style.width = '0%';
                }, 500);
            }
        }, 100);
    });
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const templateData = await loadTemplateData();
    if (templateData) {
        updateDownloadPage(templateData);
    }
    
    // Add event listener to menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});
