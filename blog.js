// Blog functionality
let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
let selectedImage = null;
let showAllPosts = false;
let postsPerPage = 10; // Set to show 10 blogs
let currentPage = 1;

// Blog Navigation Variables
let currentBlogPage = 1;
const blogsPerPage = 10;

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
function displayBlogs() {
    const blogContainer = document.getElementById('blogContainer');
    
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

    // Display first 10 blogs
    const blogsToShow = blogs.slice(0, postsPerPage);
    blogsToShow.forEach(blog => {
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

    // Hide navigation buttons since we're showing fixed number of blogs
    const prevBtn = document.getElementById('prevBlogBtn');
    const nextBtn = document.getElementById('nextBlogBtn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    // Show View More button only if there are more than 10 blogs
    const viewMoreBtn = document.getElementById('viewMoreBlogsBtn');
    if (viewMoreBtn) {
        viewMoreBtn.style.display = blogs.length > postsPerPage ? 'flex' : 'none';
    }
}

// Function to view more blogs
function viewMoreBlogs() {
    showAllPosts = true;
    displayBlogs();
}

// Initialization function
function initializeBlogDisplay() {
    showAllPosts = false; // Set to false to show only 10 blogs
    displayBlogs();
}

// Ensure initialization happens after blogs are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if blogs are already in localStorage, if not, create initial blogs
    if (blogs.length === 0) {
        createInitialBlogPosts(); // Assuming this function exists to create initial blog posts
    }
    initializeBlogDisplay();
});

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
            displayBlogs();
        });
    }

    // Display initial blogs
    displayBlogs();
}

// Load blog details
function loadBlogDetails() {
    const params = new URLSearchParams(window.location.search);
    const blogId = parseInt(params.get('id'));
    const blog = blogs.find(b => b.id === blogId);
    
    if (!blog) {
        window.location.href = 'index.html';
        return;
    }

    const contentDiv = document.getElementById('blogContent');
    if (contentDiv) {
        contentDiv.innerHTML = `
            <img src="${blog.thumbnail}" alt="${blog.title}" onerror="this.src='https://via.placeholder.com/300x200'">
            <h1>${blog.title}</h1>
            <span class="blog-date">
                <i class="fas fa-calendar"></i>
                ${blog.date}
            </span>
            <div class="blog-text">${blog.content}</div>
        `;
    }
}

// Initialize edit functionality
function initializeEditFunctionality() {
    const params = new URLSearchParams(window.location.search);
    const blogId = parseInt(params.get('id'));
    const blog = blogs.find(b => b.id === blogId);

    // Edit blog
    window.editBlog = function() {
        const modal = document.getElementById('editModal');
        const editTitle = document.getElementById('editTitle');
        const editContent = document.getElementById('editContent');
        const editImagePreview = document.getElementById('editImagePreview');

        editTitle.value = blog.title;
        editContent.value = blog.content;
        editImagePreview.innerHTML = `<img src="${blog.thumbnail}" alt="Preview">`;
        selectedImage = blog.thumbnail;

        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
    };

    // Handle edit image upload
    const editImageFile = document.getElementById('editImageFile');
    if (editImageFile) {
        editImageFile.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const base64Image = await fileToBase64(file);
                    selectedImage = base64Image;
                    const editImagePreview = document.getElementById('editImagePreview');
                    if (editImagePreview) {
                        editImagePreview.innerHTML = `<img src="${base64Image}" alt="Preview">`;
                    }
                } catch (error) {
                    console.error('Error processing image:', error);
                    alert('Error processing image. Please try again.');
                }
            }
        });
    }

    // Close modal when clicking close button
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

    // Delete blog
    window.deleteBlog = function() {
        if (confirm('Are you sure you want to delete this blog post?')) {
            const index = blogs.findIndex(b => b.id === blogId);
            if (index !== -1) {
                blogs.splice(index, 1);
                localStorage.setItem('blogs', JSON.stringify(blogs));
                window.location.href = 'index.html';
            }
        }
    };

    // Handle edit form submission
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const editedBlog = blogs.find(b => b.id === blogId);
            if (editedBlog) {
                editedBlog.title = document.getElementById('editTitle').value;
                editedBlog.content = document.getElementById('editContent').value;
                if (selectedImage && selectedImage !== editedBlog.thumbnail) {
                    editedBlog.thumbnail = selectedImage;
                }
                
                localStorage.setItem('blogs', JSON.stringify(blogs));
                
                // Refresh the page to show updates
                window.location.reload();
            }
        });
    }
}

// Create initial blog posts if none exist
function createInitialBlogPosts() {
    if (blogs.length === 0) {
        const initialPosts = [
            {
                id: Date.now(),
                title: "How to Create a Stunning Portfolio Website with HTML & CSS",
                thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Creating a stunning portfolio website is essential for showcasing your work and attracting potential clients or employers. In this comprehensive guide, we'll walk through the process of building a professional portfolio website using HTML and CSS.</p>

                    <h2>1. Planning Your Portfolio Website</h2>
                    <p>Before diving into the code, it's crucial to plan your website structure:</p>
                    <ul>
                        <li>Define your target audience</li>
                        <li>Outline the sections you need (About, Projects, Contact, etc.)</li>
                        <li>Gather content and images</li>
                        <li>Create a wireframe or rough sketch</li>
                    </ul>

                    <h2>2. Setting Up the HTML Structure</h2>
                    <p>Start with a clean, semantic HTML structure:</p>
                    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Your Portfolio&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;!-- Navigation items --&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;section id="hero"&gt;&lt;/section&gt;
        &lt;section id="about"&gt;&lt;/section&gt;
        &lt;section id="projects"&gt;&lt;/section&gt;
        &lt;section id="contact"&gt;&lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </code></pre>

                    <h2>3. Styling with Modern CSS</h2>
                    <p>Use modern CSS features to create stunning designs:</p>
                    <ul>
                        <li>CSS Grid and Flexbox for layouts</li>
                        <li>CSS Variables for consistent theming</li>
                        <li>CSS Animations for engaging interactions</li>
                        <li>Media Queries for responsive design</li>
                    </ul>

                    <h2>4. Essential CSS Techniques</h2>
                    <p>Here are some key CSS techniques to enhance your portfolio:</p>
                    <pre><code>
:root {
    --primary-color: #6366f1;
    --text-color: #1f2937;
    --bg-color: #ffffff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

@media (max-width: 768px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
                    </code></pre>

                    <h2>5. Adding Interactive Elements</h2>
                    <p>Enhance user experience with interactive elements:</p>
                    <ul>
                        <li>Smooth scroll navigation</li>
                        <li>Hover effects on project cards</li>
                        <li>Form validation and feedback</li>
                        <li>Loading animations</li>
                    </ul>

                    <h2>6. Optimization and Performance</h2>
                    <p>Ensure your portfolio loads quickly and performs well:</p>
                    <ul>
                        <li>Optimize images and use appropriate formats</li>
                        <li>Minify CSS and JavaScript files</li>
                        <li>Implement lazy loading for images</li>
                        <li>Use browser caching effectively</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Building a stunning portfolio website requires attention to detail, clean code, and thoughtful design choices. Remember to regularly update your portfolio with new projects and keep the design fresh and modern.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 1,
                title: "Best Free HTML & CSS Templates for Developers",
                thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Finding the right HTML and CSS template can save you time and provide inspiration for your web development projects. In this comprehensive guide, we'll explore the best free templates available for developers in 2025.</p>

                    <h2>1. Portfolio Templates</h2>
                    <p>Showcase your work with these professional portfolio templates:</p>
                    <ul>
                        <li>Minimal Portfolio - Clean and modern design</li>
                        <li>Creative Portfolio - Perfect for designers and artists</li>
                        <li>Developer Portfolio - Focused on coding projects</li>
                        <li>Freelancer Portfolio - Ideal for service providers</li>
                    </ul>

                    <h2>2. Landing Page Templates</h2>
                    <p>Convert visitors with these effective landing page templates:</p>
                    <ul>
                        <li>Product Launch - Showcase your latest product</li>
                        <li>App Landing - Perfect for mobile applications</li>
                        <li>Service Landing - Highlight your services</li>
                        <li>Event Landing - Promote upcoming events</li>
                    </ul>

                    <h2>3. Business Templates</h2>
                    <p>Professional templates for business websites:</p>
                    <ul>
                        <li>Corporate - For established businesses</li>
                        <li>Startup - Modern and dynamic designs</li>
                        <li>Agency - Showcase your team and services</li>
                        <li>Consulting - Professional and trustworthy</li>
                    </ul>

                    <h2>4. Blog Templates</h2>
                    <p>Share your content with these blog templates:</p>
                    <ul>
                        <li>Personal Blog - Clean and readable</li>
                        <li>Magazine Style - Multiple content layouts</li>
                        <li>Tech Blog - Perfect for tutorials</li>
                        <li>Lifestyle Blog - Beautiful image layouts</li>
                    </ul>

                    <h2>5. E-commerce Templates</h2>
                    <p>Start selling online with these templates:</p>
                    <ul>
                        <li>Simple Store - Easy to customize</li>
                        <li>Fashion Store - Image-focused design</li>
                        <li>Digital Products - Clean and minimal</li>
                        <li>Marketplace - Multiple vendor support</li>
                    </ul>

                    <h2>6. Template Resources</h2>
                    <p>Find templates on these trusted platforms:</p>
                    <ul>
                        <li>GitHub - Open source templates</li>
                        <li>HTML5 UP - High-quality responsive designs</li>
                        <li>Bootstrap Themes - Built with Bootstrap</li>
                        <li>Templatemo - Free CSS templates</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Choose a template that aligns with your project goals and customize it to match your brand. Remember to check the license terms and give credit when required.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 2,
                title: "How to Make a Website Mobile-Friendly",
                thumbnail: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>In today's mobile-first world, having a mobile-friendly website is crucial. This guide will walk you through the essential steps to make your website work perfectly on all devices.</p>

                    <h2>1. Responsive Design Basics</h2>
                    <p>Start with these fundamental responsive design principles:</p>
                    <pre><code>
/* Viewport Meta Tag */
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

/* Responsive Units */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Fluid Typography */
html {
    font-size: 16px;
}

@media (max-width: 768px) {
    html {
        font-size: 14px;
    }
}
                    </code></pre>

                    <h2>2. Mobile-First Media Queries</h2>
                    <p>Implement mobile-first design with progressive enhancement:</p>
                    <pre><code>
/* Base styles for mobile */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
                    </code></pre>

                    <h2>3. Touch-Friendly Elements</h2>
                    <p>Optimize for touch interactions:</p>
                    <ul>
                        <li>Use appropriate touch target sizes (minimum 44x44px)</li>
                        <li>Add sufficient spacing between clickable elements</li>
                        <li>Implement touch-friendly navigation</li>
                        <li>Design clear call-to-action buttons</li>
                    </ul>

                    <h2>4. Performance Optimization</h2>
                    <p>Ensure fast loading on mobile devices:</p>
                    <ul>
                        <li>Optimize images with responsive sizes</li>
                        <li>Minimize HTTP requests</li>
                        <li>Enable browser caching</li>
                        <li>Use CSS and JavaScript minification</li>
                    </ul>

                    <h2>5. Mobile Navigation Patterns</h2>
                    <p>Implement user-friendly mobile navigation:</p>
                    <ul>
                        <li>Hamburger menu for small screens</li>
                        <li>Bottom navigation for important actions</li>
                        <li>Clear back-to-top buttons</li>
                        <li>Sticky headers for easy navigation</li>
                    </ul>

                    <h2>6. Testing and Optimization</h2>
                    <p>Ensure consistent experience across devices:</p>
                    <ul>
                        <li>Test on real devices</li>
                        <li>Use browser developer tools</li>
                        <li>Check loading speeds</li>
                        <li>Validate mobile usability</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Creating a mobile-friendly website requires careful planning and implementation. Regular testing and updates ensure your site remains accessible and user-friendly across all devices.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 3,
                title: "Step-by-Step Guide to Customizing Portfolio Templates",
                thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Customizing a portfolio template allows you to create a unique online presence while saving time on initial setup. This comprehensive guide will walk you through the process of transforming a basic template into your personalized portfolio.</p>

                    <h2>1. Choosing the Right Template</h2>
                    <p>Before starting customization, consider these factors:</p>
                    <ul>
                        <li>Layout compatibility with your content</li>
                        <li>Mobile responsiveness</li>
                        <li>Browser compatibility</li>
                        <li>Code quality and documentation</li>
                        <li>License terms and attribution requirements</li>
                    </ul>

                    <h2>2. Understanding the Template Structure</h2>
                    <p>Analyze these key components:</p>
                    <ul>
                        <li>HTML structure and organization</li>
                        <li>CSS styling methodology</li>
                        <li>JavaScript functionality</li>
                        <li>Asset management</li>
                    </ul>

                    <h2>3. Customizing Colors and Typography</h2>
                    <pre><code>
:root {
    /* Replace with your brand colors */
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    --text-color: #1f2937;
    --background-color: #ffffff;
}

/* Custom Typography */
body {
    font-family: 'Your-Font', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

h1, h2, h3 {
    font-family: 'Your-Heading-Font', serif;
}
                    </code></pre>

                    <h2>4. Modifying Layout and Structure</h2>
                    <p>Adapt the layout to your needs:</p>
                    <ul>
                        <li>Adjust grid systems and containers</li>
                        <li>Modify section arrangements</li>
                        <li>Update navigation structure</li>
                        <li>Customize footer layout</li>
                    </ul>

                    <h2>5. Adding Custom Features</h2>
                    <p>Enhance functionality with:</p>
                    <ul>
                        <li>Project filters and sorting</li>
                        <li>Image galleries and lightboxes</li>
                        <li>Contact forms with validation</li>
                        <li>Social media integration</li>
                    </ul>

                    <h2>6. Optimizing Performance</h2>
                    <p>Ensure fast loading times:</p>
                    <ul>
                        <li>Compress and optimize images</li>
                        <li>Minify CSS and JavaScript</li>
                        <li>Implement lazy loading</li>
                        <li>Enable browser caching</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Customizing a portfolio template requires attention to detail and understanding of web technologies. Take time to make thoughtful modifications that reflect your personal brand while maintaining performance and usability.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 4,
                title: "Essential Web Development Tools for Portfolio Creation",
                thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>The right tools can significantly improve your web development workflow. This guide covers essential tools and resources for creating professional portfolio websites.</p>

                    <h2>1. Code Editors</h2>
                    <p>Popular code editors for web development:</p>
                    <ul>
                        <li>Visual Studio Code - Extensive plugin ecosystem</li>
                        <li>Sublime Text - Fast and lightweight</li>
                        <li>Atom - Highly customizable</li>
                        <li>WebStorm - Full-featured IDE</li>
                    </ul>

                    <h2>2. Version Control</h2>
                    <p>Essential Git tools:</p>
                    <ul>
                        <li>GitHub Desktop - User-friendly interface</li>
                        <li>GitKraken - Visual Git client</li>
                        <li>SourceTree - Advanced features</li>
                        <li>Command Line Git - Direct control</li>
                    </ul>

                    <h2>3. Design Tools</h2>
                    <p>Tools for creating visuals:</p>
                    <ul>
                        <li>Figma - Collaborative design</li>
                        <li>Adobe XD - Prototyping</li>
                        <li>Sketch - Mac-only design tool</li>
                        <li>Canva - Easy graphic design</li>
                    </ul>

                    <h2>4. Development Tools</h2>
                    <p>Essential browser tools:</p>
                    <ul>
                        <li>Chrome DevTools</li>
                        <li>Firefox Developer Tools</li>
                        <li>Browser Stack - Cross-browser testing</li>
                        <li>Responsively - Responsive design testing</li>
                    </ul>

                    <h2>5. Performance Tools</h2>
                    <p>Optimize your portfolio:</p>
                    <ul>
                        <li>Google PageSpeed Insights</li>
                        <li>GTmetrix - Performance testing</li>
                        <li>WebPageTest - Detailed analysis</li>
                        <li>Lighthouse - Audit tool</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Choose tools that fit your workflow and help you create efficiently. Regular practice with these tools will improve your development speed and code quality.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 5,
                title: "10 Must-Have Features for a Professional Portfolio Website",
                thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>A professional portfolio website needs certain key features to effectively showcase your work and attract potential clients. This guide explores the essential elements every portfolio should include.</p>

                    <h2>1. Hero Section</h2>
                    <p>Create an impactful first impression:</p>
                    <ul>
                        <li>Clear value proposition</li>
                        <li>Professional photo or logo</li>
                        <li>Call-to-action button</li>
                        <li>Clean, modern design</li>
                    </ul>

                    <h2>2. Project Showcase</h2>
                    <p>Display your work effectively:</p>
                    <ul>
                        <li>High-quality project images</li>
                        <li>Detailed case studies</li>
                        <li>Clear project descriptions</li>
                        <li>Live demo links</li>
                    </ul>

                    <h2>3. About Section</h2>
                    <p>Tell your story:</p>
                    <ul>
                        <li>Professional background</li>
                        <li>Skills and expertise</li>
                        <li>Personal interests</li>
                        <li>Professional goals</li>
                    </ul>

                    <h2>4. Contact Information</h2>
                    <p>Make it easy to reach you:</p>
                    <ul>
                        <li>Contact form</li>
                        <li>Email address</li>
                        <li>Social media links</li>
                        <li>Location information</li>
                    </ul>

                    <h2>5. Technical Features</h2>
                    <p>Enhance user experience:</p>
                    <ul>
                        <li>Fast loading times</li>
                        <li>Mobile responsiveness</li>
                        <li>SEO optimization</li>
                        <li>Analytics integration</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>A well-designed portfolio with these features will help you stand out and attract potential clients or employers.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 6,
                title: "Advanced CSS Techniques for Modern Websites",
                thumbnail: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Modern websites require advanced CSS techniques to create engaging user experiences. This guide covers cutting-edge CSS features and best practices.</p>

                    <h2>1. CSS Grid Layout</h2>
                    <pre><code>
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.grid-item {
    display: grid;
    place-items: center;
    padding: 2rem;
}
                    </code></pre>

                    <h2>2. CSS Custom Properties</h2>
                    <pre><code>
:root {
    --primary-color: #4f46e5;
    --spacing-unit: 1rem;
}

.component {
    color: var(--primary-color);
    padding: calc(var(--spacing-unit) * 2);
}
                    </code></pre>

                    <h2>3. CSS Animations</h2>
                    <pre><code>
@keyframes slideIn {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-slide {
    animation: slideIn 0.5s ease-out;
}
                    </code></pre>

                    <h2>4. Responsive Design</h2>
                    <p>Modern responsive techniques:</p>
                    <ul>
                        <li>Container queries</li>
                        <li>Fluid typography</li>
                        <li>Flexible layouts</li>
                        <li>Mobile-first approach</li>
                    </ul>

                    <h2>5. Performance Optimization</h2>
                    <p>Optimize CSS for speed:</p>
                    <ul>
                        <li>Minimize specificity</li>
                        <li>Reduce redundant code</li>
                        <li>Use appropriate units</li>
                        <li>Implement critical CSS</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Master these advanced CSS techniques to create modern, efficient, and engaging websites.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 7,
                title: "SEO Best Practices for Portfolio Websites",
                thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Search Engine Optimization (SEO) is crucial for making your portfolio visible to potential clients. This guide covers essential SEO practices for portfolio websites.</p>

                    <h2>1. Technical SEO</h2>
                    <p>Optimize your website's technical aspects:</p>
                    <ul>
                        <li>Fast loading speed</li>
                        <li>Mobile optimization</li>
                        <li>Secure HTTPS connection</li>
                        <li>XML sitemap</li>
                    </ul>

                    <h2>2. On-Page SEO</h2>
                    <p>Optimize your content:</p>
                    <ul>
                        <li>Keyword research</li>
                        <li>Meta descriptions</li>
                        <li>Header tags</li>
                        <li>Image optimization</li>
                    </ul>

                    <h2>3. Content Strategy</h2>
                    <p>Create SEO-friendly content:</p>
                    <ul>
                        <li>Regular blog posts</li>
                        <li>Case studies</li>
                        <li>Portfolio updates</li>
                        <li>Industry insights</li>
                    </ul>

                    <h2>4. Link Building</h2>
                    <p>Build quality backlinks:</p>
                    <ul>
                        <li>Guest posting</li>
                        <li>Social media presence</li>
                        <li>Industry directories</li>
                        <li>Professional networks</li>
                    </ul>

                    <h2>5. Analytics and Monitoring</h2>
                    <p>Track your success:</p>
                    <ul>
                        <li>Google Analytics</li>
                        <li>Search Console</li>
                        <li>Performance metrics</li>
                        <li>User behavior</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Implementing these SEO practices will help your portfolio rank better in search results and attract more visitors.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 8,
                title: "Creating Engaging Portfolio Case Studies",
                thumbnail: "https://images.unsplash.com/photo-1454165804606-b19be8fe80f5?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Case studies are powerful tools for showcasing your work process and results. This guide will help you create compelling case studies for your portfolio.</p>

                    <h2>1. Project Overview</h2>
                    <p>Essential elements to include:</p>
                    <ul>
                        <li>Client background</li>
                        <li>Project objectives</li>
                        <li>Timeline and scope</li>
                        <li>Key challenges</li>
                    </ul>

                    <h2>2. Process Documentation</h2>
                    <p>Document your approach:</p>
                    <ul>
                        <li>Research phase</li>
                        <li>Design decisions</li>
                        <li>Development steps</li>
                        <li>Testing procedures</li>
                    </ul>

                    <h2>3. Visual Documentation</h2>
                    <p>Include relevant visuals:</p>
                    <ul>
                        <li>Before/after screenshots</li>
                        <li>Process diagrams</li>
                        <li>Mockups and wireframes</li>
                        <li>Final implementation</li>
                    </ul>

                    <h2>4. Results and Impact</h2>
                    <p>Measure success:</p>
                    <ul>
                        <li>Quantitative metrics</li>
                        <li>Client testimonials</li>
                        <li>User feedback</li>
                        <li>Business impact</li>
                    </ul>

                    <h2>5. Lessons Learned</h2>
                    <p>Share insights:</p>
                    <ul>
                        <li>Technical challenges</li>
                        <li>Problem-solving approaches</li>
                        <li>Future improvements</li>
                        <li>Key takeaways</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Well-crafted case studies demonstrate your expertise and problem-solving abilities to potential clients.</p>
                `,
                date: "February 11, 2025"
            },
            {
                id: Date.now() + 9,
                title: "Web Accessibility Guidelines for Portfolio Websites",
                thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
                content: `
                    <h2>Introduction</h2>
                    <p>Making your portfolio accessible ensures it can be used by everyone, regardless of their abilities. This guide covers essential web accessibility practices.</p>

                    <h2>1. Semantic HTML</h2>
                    <pre><code>
<!-- Use semantic elements -->
<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Project Title</h1>
        <p>Project description...</p>
    </article>
</main>
                    </code></pre>

                    <h2>2. ARIA Labels</h2>
                    <pre><code>
<button aria-label="Menu">
    <span class="icon-menu"></span>
</button>

<div role="alert" aria-live="polite">
    Form submitted successfully!
</div>
                    </code></pre>

                    <h2>3. Color Contrast</h2>
                    <p>Ensure readable content:</p>
                    <ul>
                        <li>Minimum contrast ratio: 4.5:1</li>
                        <li>Test color combinations</li>
                        <li>Avoid color-only indicators</li>
                        <li>Provide alternative indicators</li>
                    </ul>

                    <h2>4. Keyboard Navigation</h2>
                    <p>Enable keyboard access:</p>
                    <ul>
                        <li>Logical tab order</li>
                        <li>Focus indicators</li>
                        <li>Skip navigation links</li>
                        <li>Keyboard-accessible menus</li>
                    </ul>

                    <h2>5. Media Accessibility</h2>
                    <p>Make media content accessible:</p>
                    <ul>
                        <li>Alt text for images</li>
                        <li>Video captions</li>
                        <li>Audio transcripts</li>
                        <li>Descriptive text</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>Implementing accessibility features makes your portfolio available to a wider audience and demonstrates professional responsibility.</p>
                `,
                date: "February 11, 2025"
            }
        ];

        blogs = initialPosts;
        localStorage.setItem('blogs', JSON.stringify(blogs));
        displayBlogs();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('blog-details.html')) {
        loadBlogDetails();
        initializeEditFunctionality();
    } else {
        createInitialBlogPosts();
        initializeBlogFunctionality();
    }
});
