// Blog functionality
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let currentBlogPage = 1;
const blogsPerPage = 6;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing blogs...');
    
    // Initialize blogs if empty
    if (!localStorage.getItem('blogs')) {
        createInitialBlogPosts();
    }
    
    console.log('Current blogs:', blogs.length);
    
    // Display blogs
    const blogContainer = document.getElementById('blogContainer');
    console.log('Blog container:', blogContainer);
    
    if (blogContainer) {
        displayBlogs();
    } else {
        console.error('Blog container not found!');
    }
});

// Blog Navigation Variables
let showAllPosts = false;
let postsPerPage = 6; // Set to show 6 blogs
let currentPage = 1;

// Open blog editor modal
function openBlogEditor() {
    const modal = document.getElementById('blogEditorModal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
    resetImagePreview();
}

// Reset image preview
function resetImagePreview() {
    const preview = document.getElementById('imagePreview');
    if (preview) {
        preview.innerHTML = '<div class="preview-text">No image selected</div>';
    }
    selectedImage = null;
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Function to navigate blog posts
function navigateBlogPosts(direction) {
    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    // Update current page
    currentBlogPage += direction;

    // Ensure page stays within bounds
    currentBlogPage = Math.max(1, Math.min(currentBlogPage, totalPages));

    // Disable view all posts mode
    showAllPosts = false;

    // Trigger blog display
    displayBlogs();
}

// Update navigation button states
function updateBlogNavigationButtons() {
    const prevBtn = document.getElementById('prevBlogBtn');
    const nextBtn = document.getElementById('nextBlogBtn');
    
    if (!prevBtn || !nextBtn) return;

    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    // Disable previous button on first page
    prevBtn.disabled = currentBlogPage === 1;
    prevBtn.style.opacity = currentBlogPage === 1 ? '0.5' : '1';

    // Disable next button on last page
    nextBtn.disabled = currentBlogPage === totalPages;
    nextBtn.style.opacity = currentBlogPage === totalPages ? '0.5' : '1';
}

// Display all blogs on the all-blogs page
function displayAllBlogs() {
    const blogContainer = document.getElementById('allBlogsContainer');
    
    if (!blogContainer) return;

    blogContainer.innerHTML = ''; // Clear existing content

    if (blogs.length === 0) {
        // Show no blogs message
        const noBlogsMessage = document.createElement('div');
        noBlogsMessage.className = 'no-blogs-message';
        noBlogsMessage.innerHTML = `
            <div class="message-content">
                <i class="fas fa-pencil-alt"></i>
                <h3>No Blogs Yet</h3>
                <p>Be the first to create an amazing blog!</p>
                <button onclick="openBlogEditor()" class="create-blog-btn">Create Blog</button>
            </div>
        `;
        blogContainer.appendChild(noBlogsMessage);
        return;
    }

    // Display all blogs
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${blog.thumbnail}" alt="${blog.title}">
            </div>
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p class="blog-date">${blog.date}</p>
                <a href="blog-details.html?id=${blog.id}" class="read-more">Read More</a>
            </div>
        `;
        blogContainer.appendChild(blogCard);
    });
}

// Display blogs (for index page)
function displayBlogs(page) {
    const blogContainer = document.getElementById('blogContainer');
    
    if (!blogContainer) return;

    // Clear existing content
    blogContainer.innerHTML = '';

    // Create blog grid
    const blogGrid = document.createElement('div');
    blogGrid.className = 'blog-grid';

    // Calculate pagination
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const blogsToShow = blogs.slice(start, end);

    if (blogsToShow.length === 0) {
        blogContainer.innerHTML = '<p class="no-blogs">No blog posts available.</p>';
        return;
    }

    blogsToShow.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.setAttribute('data-aos', 'fade-up');
        
        // Create the blog card HTML
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${blog.thumbnail}" alt="${blog.title}">
                <span class="blog-date">
                    <i class="far fa-calendar-alt"></i>
                    ${blog.date}
                </span>
            </div>
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.content.substring(0, 150)}...</p>
                <div class="blog-footer">
                    <a href="blog-details.html?id=${blog.id}" class="read-more" onclick="event.preventDefault(); window.location.href='blog-details.html?id=${blog.id}';">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        
        // Add click event to the entire card
        blogCard.addEventListener('click', () => {
            window.location.href = `blog-details.html?id=${blog.id}`;
        });
        
        blogGrid.appendChild(blogCard);
    });

    blogContainer.appendChild(blogGrid);
    updatePaginationButtons(page);
}

// Navigate blog posts
function navigateBlogPosts(direction) {
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    
    if (direction === 'prev' && currentBlogPage > 1) {
        currentBlogPage--;
    } else if (direction === 'next' && currentBlogPage < totalPages) {
        currentBlogPage++;
    }
    
    displayBlogs(currentBlogPage);
}

// Update pagination buttons
function updatePaginationButtons(page) {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    if (prevButton) {
        prevButton.style.display = page > 1 ? 'block' : 'none';
    }
    if (nextButton) {
        nextButton.style.display = page < totalPages ? 'block' : 'none';
    }
}

// Function to view blog details
function viewBlogDetails(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) return;

    const modal = document.createElement('div');
    modal.className = 'modal blog-details-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <article class="blog-details">
                <img src="${blog.thumbnail}" alt="${blog.title}" class="blog-header-image">
                <h2>${blog.title}</h2>
                <div class="blog-meta">
                    <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
                </div>
                <div class="blog-full-content">
                    ${blog.content}
                </div>
            </article>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// Function to view more blogs
function viewMoreBlogs() {
    showAllPosts = true;
    displayBlogs();
}

// Initialization function
function initializeBlogDisplay() {
    showAllPosts = false; // Set to false to show only 6 blogs
    displayBlogs(1);
}

// Close modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

// Initialize blog functionality
function initializeBlogFunctionality() {
    // Close blog editor modal
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Handle file upload
    const fileInput = document.getElementById('imageFile');
    if (fileInput) {
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const base64Image = await fileToBase64(file);
                    selectedImage = base64Image;
                    const preview = document.getElementById('imagePreview');
                    preview.innerHTML = `<img src="${base64Image}" alt="Preview">`;
                    
                    // Update selected file name
                    const fileNameSpan = document.querySelector('.selected-file-name');
                    if (fileNameSpan) {
                        fileNameSpan.textContent = file.name;
                    }
                } catch (error) {
                    console.error('Error processing image:', error);
                    alert('Error processing image. Please try again.');
                }
            }
        });
    }

    // Handle blog form submission
    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const title = document.getElementById('blogTitle').value;
            const content = document.getElementById('blogContent').value;
            
            const newBlog = {
                id: Date.now(),
                title,
                thumbnail: selectedImage || 'https://via.placeholder.com/300x200',
                content,
                date: new Date().toLocaleDateString(),
            };
            
            blogs.unshift(newBlog);
            localStorage.setItem('blogs', JSON.stringify(blogs));
            
            // Reset form and close modal
            e.target.reset();
            resetImagePreview();
            const modal = document.getElementById('blogEditorModal');
            closeModal(modal.id);
            
            // Refresh blog display
            displayBlogs(1);
        });
    }

    // Display initial blogs
    displayBlogs(1);
}

// Load blog details page
function loadBlogDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'));
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blog = blogs.find(b => b.id === blogId);
    
    if (!blog) {
        window.location.href = 'index.html';
        return;
    }
    
    const container = document.getElementById('blogDetailsContainer');
    if (!container) return;
    
    // Set page title
    document.title = `${blog.title} - Blog Details`;
    
    // Create the blog content with animation indices
    const content = blog.content;
    const processedContent = content
        .replace(/<h2>/g, (match, index) => `<h2 style="--heading-index: ${index}">`)
        .replace(/<h3>/g, (match, index) => `<h3 style="--heading-index: ${index}">`)
        .replace(/<p>/g, (match, index) => `<p style="--paragraph-index: ${index}">`)
        .replace(/<ul>/g, (match, index) => `<ul style="--list-index: ${index}">`);
    
    container.innerHTML = `
        <article class="blog-details">
            <img src="${blog.thumbnail}" alt="${blog.title}" class="blog-header-image">
            <h1>${blog.title}</h1>
            <div class="blog-meta">
                <span><i class="far fa-calendar-alt"></i> ${blog.date}</span>
                <span><i class="far fa-clock"></i> ${Math.ceil(content.length / 1000)} min read</span>
            </div>
            <div class="blog-content">
                ${processedContent}
            </div>
        </article>
    `;
}

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', () => {
    // Initialize blogs if empty
    if (!localStorage.getItem('blogs')) {
        createInitialBlogPosts();
    }

    // Check if we're on the blog details page
    if (window.location.pathname.includes('blog-details.html')) {
        loadBlogDetails();
    } else {
        // We're on the index page, display blogs
        displayBlogs(1);
    }
});

// Create initial blog posts if none exist
function createInitialBlogPosts() {
    const initialBlogs = [
        {
            id: 1,
            title: "Getting Started with Web Development",
            content: "Web development is an exciting journey that combines creativity with technical skills. In this blog post, we'll explore the fundamental concepts of web development and how to begin your journey. We'll cover HTML, CSS, and JavaScript basics, along with modern development tools and practices. Whether you're a complete beginner or looking to refresh your knowledge, this guide will help you understand the core concepts of web development.",
            thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            date: "February 12, 2024"
        },
        {
            id: 2,
            title: "Modern CSS Techniques",
            content: "CSS has evolved significantly over the years, introducing powerful features that make web styling more efficient and flexible. In this post, we'll dive into modern CSS techniques including Flexbox, Grid, Custom Properties, and more. Learn how to create responsive layouts and maintain clean, scalable stylesheets for your web projects.",
            thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            date: "February 11, 2024"
        },
        {
            id: 3,
            title: "JavaScript Best Practices",
            content: "JavaScript is the backbone of modern web applications. This blog post covers essential best practices for writing clean, efficient, and maintainable JavaScript code. We'll discuss topics like proper variable naming, function organization, error handling, and performance optimization techniques.",
            thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            date: "February 10, 2024"
        }
    ];
    
    localStorage.setItem('blogs', JSON.stringify(initialBlogs));
    return initialBlogs;
}

// Function to edit a blog post
function editBlog(index) {
    const blog = blogs[index];
    
    // Populate blog editor with existing blog details
    document.getElementById('blogTitle').value = blog.title;
    
    // Assuming you have a file input for image
    const imagePreview = document.getElementById('imagePreview');
    if (imagePreview) {
        imagePreview.innerHTML = `<img src="${blog.thumbnail}" alt="Blog Thumbnail">`;
    }
    
    document.getElementById('blogContent').value = blog.content;
    
    // Open the blog editor modal
    openBlogEditor();
    
    // Store the index of the blog being edited
    window.currentEditingBlogIndex = index;
}

// Function to delete a blog post
function deleteBlog(index) {
    // Confirm deletion
    const confirmDelete = confirm('Are you sure you want to delete this blog post?');
    
    if (confirmDelete) {
        // Remove the blog from the blogs array
        blogs.splice(index, 1);
        
        // Update local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogs));
        
        // Refresh blog display
        displayBlogs(1);
        
        // Show a notification
        alert('Blog post deleted successfully!');
    }
}

// Function to check if admin is logged in
function isAdminLoggedIn() {
    // Replace with actual admin login logic
    return true;
}

// Function to edit a blog post with authentication
function protectedEditBlog(index) {
    if (isAdminLoggedIn()) {
        editBlog(index);
    } else {
        alert('You need to be logged in as an admin to edit blog posts.');
    }
}

// Function to delete a blog post with authentication
function protectedDeleteBlog(index) {
    if (isAdminLoggedIn()) {
        deleteBlog(index);
    } else {
        alert('You need to be logged in as an admin to delete blog posts.');
    }
}

// Add pagination buttons to the DOM
const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination';
paginationContainer.innerHTML = `
    <button id="prevButton" onclick="navigateBlogPosts('prev')">← Previous</button>
    <span id="pageIndicator"></span>
    <button id="nextButton" onclick="navigateBlogPosts('next')">Next →</button>
`;
document.getElementById('blogContainer').parentNode.appendChild(paginationContainer);
