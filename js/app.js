// ========================================
// CORE APPLICATION LOGIC
// ========================================

// Function to select elements safely
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function renderSiteContent() {
    // --- Hero Section ---
    const heroSubtitle = $('.hero-subtitle');
    const heroTitle = $('.hero-title');
    const heroDesc = $('.hero-description');
    const heroCta = $('.hero .view-all-btn');

    if (heroSubtitle) heroSubtitle.textContent = siteData.hero.subtitle;
    if (heroTitle) heroTitle.innerHTML = `${siteData.hero.titleStart} <span class="gold-text shimmer-text">${siteData.hero.titleName}</span>`;
    if (heroDesc) heroDesc.textContent = siteData.hero.description;
    if (heroCta) {
        heroCta.href = siteData.hero.ctaLink;
        heroCta.innerHTML = `${siteData.hero.ctaText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>`;
    }

    // --- About Section ---
    const aboutName = $('.about-text h3');
    const aboutBio = $('#aboutBio');

    if (aboutName) aboutName.innerHTML = siteData.about.heading;

    if (aboutBio) {
        aboutBio.innerHTML = siteData.about.bio.map(text => `<p>${text}</p>`).join('');
    }

    // Update Stats
    const statYears = $('#statYears');
    const statProjects = $('#statProjects');
    const statClients = $('#statClients');

    if (statYears) {
        statYears.dataset.target = siteData.about.stats[0].number;
        statYears.nextElementSibling.textContent = siteData.about.stats[0].label;
    }
    if (statProjects) {
        statProjects.dataset.target = siteData.about.stats[1].number;
        statProjects.nextElementSibling.textContent = siteData.about.stats[1].label;
    }
    if (statClients) {
        statClients.dataset.target = siteData.about.stats[2].number;
        statClients.nextElementSibling.textContent = siteData.about.stats[2].label;
    }

    // --- Resume Section ---
    // Header
    const resumeName = $('.resume-name');
    const resumeTitle = $('.resume-title');

    if (resumeName) resumeName.textContent = siteData.personal.name;
    if (resumeTitle) resumeTitle.textContent = siteData.personal.title;

    // Resume Contact Info
    const resumeContactItems = $$('.resume-contact-item span');
    if (resumeContactItems.length >= 3) {
        resumeContactItems[0].textContent = siteData.personal.email;
        resumeContactItems[1].textContent = siteData.personal.phone;
        resumeContactItems[2].textContent = siteData.personal.location;
    }

    // Summary
    const resumeSummary = $('#resumeSummary');
    if (resumeSummary) {
        resumeSummary.innerHTML = siteData.resume.summary.map(text => `<p>${text}</p>`).join('');
    }

    // Experience
    const resumeExperience = $('#resumeExperience');
    if (resumeExperience) {
        resumeExperience.innerHTML = siteData.resume.experience.map(job => `
            <div class="resume-item">
                <div class="resume-item-header">
                    <h3 class="resume-item-title">${job.role}</h3>
                    <span class="resume-item-date">${job.period}</span>
                </div>
                <p class="resume-item-company">${job.company}</p>
                <ul class="resume-item-list">
                    ${job.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Skills
    const resumeSkills = $('#resumeSkills');
    if (resumeSkills) {
        resumeSkills.innerHTML = `<div class="skills-grid">
            ${siteData.resume.skills.map(skillGroup => `
                <div class="skill-category">
                    <h4 class="skill-category-title">${skillGroup.category}</h4>
                    <div class="skill-tags">
                        ${skillGroup.items.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>`;
    }

    // Education
    const resumeEducation = $('#resumeEducation');
    if (resumeEducation) {
        resumeEducation.innerHTML = siteData.resume.education.map(edu => `
            <div class="resume-item">
                <div class="resume-item-header">
                    <h3 class="resume-item-title">${edu.degree}</h3>
                    <span class="resume-item-date">${edu.period}</span>
                </div>
                <p class="resume-item-company">${edu.school}</p>
                <p>${edu.description}</p>
            </div>
        `).join('');
    }

    // --- Contact Section ---
    const contactEmails = $$('a[href^="mailto:"] span');
    if (contactEmails.length > 0) contactEmails[0].textContent = siteData.personal.email;
    if (contactEmails.length > 1) contactEmails[1].textContent = siteData.personal.altEmail;

    const contactPhone = $('#phoneNumber');
    if (contactPhone) contactPhone.textContent = siteData.personal.phone;

    const contactAddr = $$('.contact-details span');
    if (contactAddr.length > 0) {
        // The last one is the address usually, let's be more specific with CSS selectors in next step
        // For now, rely on text content matching or index if stable
    }

    // --- Footer ---
    const footerTagline = $('.footer-tagline');
    if (footerTagline) footerTagline.textContent = siteData.footer.tagline;

    // Update Social Links Globally
    const fbLinks = $$('a[href*="facebook"]');
    fbLinks.forEach(el => el.href = siteData.social.facebook);

    const igLinks = $$('a[href*="instagram"]');
    igLinks.forEach(el => el.href = siteData.social.instagram);

    const ghLinks = $$('a[href*="github"]');
    ghLinks.forEach(el => el.href = siteData.social.github);

    // --- AI Bot ---
    const botName = $('#botName');
    if (botName) botName.textContent = siteData.aiBot.name;

    // --- Main Skills & Education Section ---
    const mainSkillsGrid = $('#mainSkillsGrid');
    if (mainSkillsGrid) {
        mainSkillsGrid.innerHTML = `
            ${siteData.resume.skills.map(skillGroup => `
                <div class="skill-category">
                    <h4 class="skill-category-title">${skillGroup.category}</h4>
                    <div class="skill-tags">
                        ${skillGroup.items.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        `;
    }

    const mainEducationGrid = $('#mainEducationGrid');
    if (mainEducationGrid) {
        mainEducationGrid.innerHTML = siteData.resume.education.map(edu => `
            <div class="education-item">
                <h4 class="education-degree">${edu.degree}</h4>
                <span class="education-period">${edu.period}</span>
                <p class="education-school">${edu.school}</p>
                <p class="education-description">${edu.description}</p>
            </div>
        `).join('');
    }
}

// Function to scroll gallery
function scrollGallery(btn, direction) {
    if (event) event.stopPropagation();
    const container = btn.parentElement;
    const scroller = container.querySelector('.project-image-scroller');
    const scrollAmount = scroller.offsetWidth;

    scroller.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Function to create HTML for a project card
function createProjectCard(project, delay = 0) {
    let imageContent;

    // Check if image is an array (multiple images) or if there's a video
    if (Array.isArray(project.image)) {
        let mediaItems = [];
        
        // Add video FIRST if it exists
        if (project.video && project.video !== null) {
            mediaItems.push(`<video src="${project.video}" controls loop muted autoplay style="width:100%; height:100%; object-fit:cover;">Your browser does not support the video tag.</video>`);
        }
        
        // Add all images after the video
        project.image.forEach((img, index) => {
            mediaItems.push(`<img src="${img}" alt="${project.title} - Image ${index + 1}" loading="lazy">`);
        });
        
        const mediaHtml = mediaItems.join('');
        const totalCount = mediaItems.length;

        imageContent = `
            <div style="position:relative; width:100%; height:100%;">
                <div class="project-image-scroller">${mediaHtml}</div>
                <button class="gallery-nav-btn prev" onclick="scrollGallery(this, -1)">❮</button>
                <button class="gallery-nav-btn next" onclick="scrollGallery(this, 1)">❯</button>
                <div class="gallery-badge">1/${totalCount}</div>
            </div>
        `;
    }
    // Check if image is an HTML string (like <svg>)
    else if (typeof project.image === 'string' && project.image.trim().startsWith('<')) {
        imageContent = project.image;
    }
    // Assume string URL
    else {
        imageContent = `<img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;">`;
    }

    return `
        <div class="project-card reveal reveal-delay-${delay} tilt-3d fade-in-scale" 
             data-project-id="${project.id}"
             onclick="openProjectModalById(${project.id})"
             style="cursor: pointer;">
            <div class="project-image">
                ${imageContent}
            </div>
            <div class="project-content">
                <p class="project-category">${project.category}</p>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">
                    ${project.description.substring(0, 100)}...
                </p>
                <a href="#" class="project-link" onclick="event.stopPropagation(); openProjectModalById(${project.id}); return false;">
                    View Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Render Featured Projects
function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects-grid');
    if (!container) return;

    const featured = projectsData.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featured.map((p, index) => createProjectCard(p, index + 1)).join('');

    // Re-trigger animations if needed
    if (window.updateRevealElements) window.updateRevealElements();
    else if (window.revealOnScroll) window.revealOnScroll();

    // Initialize scrolling badge logic
    initGalleryBadges();
}

// Helper to update badges on scroll
function initGalleryBadges() {
    document.querySelectorAll('.project-image-scroller').forEach(scroller => {
        // Ensure event listener is not added multiple times
        if (!scroller.dataset.badgeInitialized) {
            scroller.addEventListener('scroll', () => {
                // More accurate index calculation
                const scrollPosition = scroller.scrollLeft;
                const itemWidth = scroller.offsetWidth;
                const index = Math.max(1, Math.round(scrollPosition / itemWidth) + 1);
                const badge = scroller.parentElement.querySelector('.gallery-badge');
                const total = scroller.children.length;
                if (badge) badge.textContent = `${index}/${total}`;
            });
            scroller.dataset.badgeInitialized = 'true'; // Mark as initialized
        }
        
        // Force initial badge update to show 1/X
        const badge = scroller.parentElement.querySelector('.gallery-badge');
        const total = scroller.children.length;
        if (badge && scroller.scrollLeft === 0) {
            badge.textContent = `1/${total}`;
        }
    });
}

// Render All Projects (for the modal/full view)
function renderAllProjects(projects = projectsData) {
    const container = document.getElementById('allProjectsGrid');
    const countLabel = document.getElementById('resultsCount');
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
    } else {
        container.innerHTML = projects.map((p, index) => createProjectCard(p, 1)).join('');
    }

    if (countLabel) {
        countLabel.innerHTML = `Showing <strong>${projects.length}</strong> project${projects.length !== 1 ? 's' : ''}`;
    }

    // Re-trigger animations
    if (window.updateRevealElements) window.updateRevealElements();

    // Initialize badges for these new elements
    initGalleryBadges();
}

// Open Modal by ID (helper function)
function openProjectModalById(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Populate Modal
    document.getElementById('projectModalCategory').textContent = project.category;
    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalDescription').textContent = project.description;

    // Handle image (Array, SVG, or URL) and video
    const imgContainer = document.getElementById('projectModalImage');

    if (Array.isArray(project.image)) {
        let mediaItems = [];
        
        // Add video FIRST if it exists
        if (project.video && project.video !== null) {
            mediaItems.push(`<video src="${project.video}" controls loop muted autoplay style="width:100%; height:100%; object-fit:cover; flex-shrink:0;">Your browser does not support the video tag.</video>`);
        }
        
        // Add all images after the video
        project.image.forEach((img, idx) => {
            mediaItems.push(`<img src="${img}" alt="${project.title} - Image ${idx + 1}" style="width:100%; height:100%; object-fit:cover; flex-shrink:0;">`);
        });
        
        const mediaHtml = mediaItems.join('');
        const totalCount = mediaItems.length;

        imgContainer.innerHTML = `
            <div style="position:relative; width:100%; height:100%;">
                <div class="project-image-scroller">${mediaHtml}</div>
                <button class="gallery-nav-btn prev" onclick="scrollGallery(this, -1)">❮</button>
                <button class="gallery-nav-btn next" onclick="scrollGallery(this, 1)">❯</button>
                <div class="gallery-badge">1/${totalCount}</div>
            </div>
        `;
        // Init badge logic for modal
        initGalleryBadges();
        
        // Reset scroll position to show first item (video) - multiple attempts to ensure it works
        const scroller = imgContainer.querySelector('.project-image-scroller');
        if (scroller) {
            scroller.scrollLeft = 0;
            setTimeout(() => {
                scroller.scrollLeft = 0;
                // Also update the badge manually
                const badge = imgContainer.querySelector('.gallery-badge');
                if (badge) badge.textContent = `1/${totalCount}`;
            }, 100);
            setTimeout(() => {
                scroller.scrollLeft = 0;
            }, 200);
        }
    }
    else if (typeof project.image === 'string' && project.image.startsWith('<svg')) {
        imgContainer.innerHTML = project.image;
    } else {
        imgContainer.innerHTML = `<img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;">`;
    }

    document.getElementById('projectModalLink').href = project.link;

    // Open Modal
    modal.classList.add('active');
    document.body.classList.add('project-modal-open');
}

// Initialize Projects on Load
window.addEventListener('load', () => {
    // Check if data is loaded
    if (typeof siteData === 'undefined' || typeof projectsData === 'undefined') {
        console.error('Data not loaded! Make sure js/data.js is linked.');
        return;
    }
    renderSiteContent();
    renderFeaturedProjects();
    renderAllProjects();
});

// Search and Sort Logic
const projectSearch = document.getElementById('projectSearch');
const projectSort = document.getElementById('projectSort');
let activeCategory = 'all';

function filterProjects() {
    const query = projectSearch.value.toLowerCase();
    const sortValue = projectSort.value;

    let filtered = projectsData.filter(p => {
        // Category filter
        const categoryMatch = activeCategory === 'all' || p.category === activeCategory;
        
        // Search filter
        const searchMatch = query === '' || 
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query);
        
        return categoryMatch && searchMatch;
    });

    // Sort
    if (sortValue === 'name-asc') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'name-desc') {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortValue === 'category-asc') {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortValue === 'category-desc') {
        filtered.sort((a, b) => b.category.localeCompare(a.category));
    }

    renderAllProjects(filtered);
}

if (projectSearch) projectSearch.addEventListener('input', filterProjects);
if (projectSort) projectSort.addEventListener('change', filterProjects);

// Category Filter Logic
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Update active category
        activeCategory = btn.dataset.category;
        
        // Filter projects
        filterProjects();
    });
});

// ========================================
// SPLASH SCREEN
// ========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
    }, 3000); // Splash screen duration - edit to change
});

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// MOBILE MENU
// ========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
let revealElements = document.querySelectorAll('.reveal');

window.updateRevealElements = () => {
    revealElements = document.querySelectorAll('.reveal');
    window.revealOnScroll();
};

window.revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip #all-projects as it's handled separately as a modal
        if (href === '#all-projects') {
            return; // Let the modal handler take over
        }

        if (href === '#' || href === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PHONE NUMBER COPY FUNCTIONALITY
// ========================================
const phoneContact = document.querySelector('.phone-item');
const phoneNumber = document.getElementById('phoneNumber');

// Create notification element
const copyNotification = document.createElement('div');
copyNotification.className = 'copy-notification';
copyNotification.textContent = 'Phone number copied!';
document.body.appendChild(copyNotification);

// Right-click to copy functionality
if (phoneContact && phoneNumber) {
    phoneContact.addEventListener('contextmenu', async (e) => {
        e.preventDefault();
        const phone = phoneNumber.textContent;

        try {
            await navigator.clipboard.writeText(phone);

            // Show notification
            copyNotification.classList.add('show');

            // Hide notification after 2 seconds
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = phone;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            } catch (err) {
                alert('Failed to copy phone number. Please copy manually: ' + phone);
            }
            document.body.removeChild(textArea);
        }
    });
}

// ========================================
// FOOTER TYPEWRITER ANIMATION
// ========================================
const footerLogo = document.getElementById('footerLogo');
const footerText = 'Rozel O. Ramos';
let footerCharIndex = 0;
let footerIsDeleting = false;
let footerTypingSpeed = 100;
let footerPauseTime = 2000;

function typeFooterText() {
    if (!footerLogo) return;

    if (!footerIsDeleting && footerCharIndex < footerText.length) {
        // Typing
        footerLogo.textContent = footerText.substring(0, footerCharIndex + 1);
        footerCharIndex++;
        setTimeout(typeFooterText, footerTypingSpeed);
    } else if (!footerIsDeleting && footerCharIndex === footerText.length) {
        // Finished typing, wait before deleting
        setTimeout(() => {
            footerIsDeleting = true;
            typeFooterText();
        }, footerPauseTime);
    } else if (footerIsDeleting && footerCharIndex > 0) {
        // Deleting
        footerLogo.textContent = footerText.substring(0, footerCharIndex - 1);
        footerCharIndex--;
        setTimeout(typeFooterText, footerTypingSpeed / 2);
    } else {
        // Finished deleting, restart typing
        footerIsDeleting = false;
        setTimeout(typeFooterText, 500);
    }
}

// Start typewriter animation when page loads
if (footerLogo) {
    // Start immediately when page loads
    typeFooterText();
}

// ========================================
// RESUME BUTTON HANDLING
// ========================================
const resumeBtn = document.getElementById('resumeBtn');
const resumeSection = document.getElementById('resumeSection');
const resumeCloseBtn = document.getElementById('resumeCloseBtn');
const resumeDownloadBtn = document.getElementById('resumeDownloadBtn');

function openResume() {
    if (resumeSection) {
        resumeSection.classList.add('active');
        document.body.classList.add('resume-open');
        // Smooth scroll to top of resume
        setTimeout(() => {
            resumeSection.scrollTop = 0;
        }, 100);
    }
}

function closeResume() {
    if (resumeSection) {
        resumeSection.classList.remove('active');
        document.body.classList.remove('resume-open');
    }
}

// Open resume when button is clicked
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openResume();
    });
}

// Close resume when close button is clicked
if (resumeCloseBtn) {
    resumeCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeResume();
    });
}

// Close resume when clicking outside (on overlay)
if (resumeSection) {
    resumeSection.addEventListener('click', (e) => {
        if (e.target === resumeSection) {
            closeResume();
        }
    });
}

// Close resume with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeSection && resumeSection.classList.contains('active')) {
        closeResume();
    }
});

// Download resume button functionality
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const resumeFileUrl = null; // Set to null to use print-to-PDF functionality

        if (resumeFileUrl && resumeFileUrl !== '#') {
            const link = document.createElement('a');
            link.href = resumeFileUrl;
            link.download = 'Rozel_O_Ramos_Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            const closeBtn = document.getElementById('resumeCloseBtn');
            const downloadBtn = resumeDownloadBtn;
            const actionsSection = document.querySelector('.resume-actions');

            if (closeBtn) closeBtn.style.display = 'none';
            if (downloadBtn) downloadBtn.style.display = 'none';

            window.print();

            setTimeout(() => {
                if (closeBtn) closeBtn.style.display = 'flex';
                if (downloadBtn) downloadBtn.style.display = 'inline-flex';
            }, 500);
        }
    });
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm ? contactForm.querySelector('.submit-btn') : null;

// Create notification element for form feedback
const formNotification = document.createElement('div');
formNotification.className = 'form-notification';
formNotification.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    padding: 1.5rem 2rem;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 500;
    z-index: 10000;
    opacity: 0;
    transform: translateX(400px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;
document.body.appendChild(formNotification);

function showFormNotification(message, type = 'success') {
    formNotification.textContent = message;
    formNotification.style.background = type === 'success'
        ? 'var(--gold-gradient)'
        : 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)';
    formNotification.style.color = type === 'success' ? 'var(--dark-bg)' : '#fff';

    formNotification.style.opacity = '1';
    formNotification.style.transform = 'translateX(0)';

    setTimeout(() => {
        formNotification.style.opacity = '0';
        formNotification.style.transform = 'translateX(400px)';
    }, 4000);
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        // Validation
        if (!name || !email || !message) {
            showFormNotification('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.innerHTML = 'Sending...';

            // Submit to Google Apps Script Web App
            try {
                // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
                const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyp1ZBSQ5fZHoyFMH7E7eO7kypmz25Q6VSRbeuFcSKjA6YZVhv-1DPEsObD-xf9w7Qskw/exec';

                if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') || GOOGLE_SCRIPT_URL === '') {
                    showFormNotification('Google Forms integration not configured. Please set up Google Apps Script first.', 'error');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                        submitBtn.innerHTML = originalText;
                    }
                    return;
                }

                // Submit to Google Apps Script
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Required for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,
                        timestamp: new Date().toISOString()
                    })
                });

                // Success
                showFormNotification(`Thank you ${name}! Your message has been received. I'll get back to you soon.`, 'success');
                contactForm.reset();

            } catch (error) {
                showFormNotification('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
            } finally {
                // Reset button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.innerHTML = originalText;
                }
            }
        }
    });
}

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ========================================
// PROJECT DETAIL MODAL FUNCTIONALITY
// ========================================
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');

function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.classList.remove('project-modal-open');
    }
}

// Close modal when close button is clicked
if (projectModalClose) {
    projectModalClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeProjectModal();
    });
}

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ========================================
// ALL PROJECTS SECTION - MODAL FUNCTIONALITY
// ========================================
const allProjectsSection = document.getElementById('all-projects');
const viewAllBtn = document.querySelector('a[href="#all-projects"]');
const closeAllProjectsBtn = document.getElementById('closeAllProjects');

function openAllProjects() {
    if (allProjectsSection) {
        allProjectsSection.classList.add('active');
        document.body.classList.add('modal-open');

        // Initialize projects if not already done
        const grid = document.getElementById('allProjectsGrid');
        if (grid && grid.children.length === 0) {
            renderAllProjects();
        }

        // Reset scroll position to top
        allProjectsSection.scrollTop = 0;

        // Trigger reveal animations after modal is visible
        setTimeout(() => {
            const revealElements = allProjectsSection.querySelectorAll('.reveal:not(.active)');
            revealElements.forEach((element, idx) => {
                setTimeout(() => {
                    element.classList.add('active');
                }, idx * 50);
            });

            // Focus search input
            const searchInput = document.getElementById('projectSearch');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 300);
            }
        }, 200);
    }
}

function closeAllProjects() {
    if (allProjectsSection) {
        allProjectsSection.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

// Open modal when "View All Projects" button is clicked
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAllProjects();
    });
}

// Close modal when close button is clicked
if (closeAllProjectsBtn) {
    closeAllProjectsBtn.addEventListener('click', closeAllProjects);
}

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && allProjectsSection && allProjectsSection.classList.contains('active')) {
        closeAllProjects();
    }
});

// Close modal when clicking outside
if (allProjectsSection) {
    allProjectsSection.addEventListener('click', (e) => {
        if (e.target === allProjectsSection) {
            closeAllProjects();
        }
    });
}

// ========================================
// AI CHATBOT LOGIC
// ========================================
const chatFab = document.getElementById('chatFab');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatTyping = document.getElementById('chatTyping');

let currentLang = 'en';

// Toggle Chat Window
if (chatFab) {
    chatFab.addEventListener('click', () => {
        chatWindow.classList.add('active');
        if (chatMessages.children.length === 0) {
            // Initial greeting is now bilingual since we haven't detected language yet
            const bilingualGreeting = `${siteData.aiBot.greeting.en} / ${siteData.aiBot.greeting.tl}`;
            sendBotMessage(bilingualGreeting);
        }
    });
}

if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
}

// Handle Form Submit
if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // User Message
        addUserMessage(text);
        chatInput.value = '';

        // Bot Thinking
        simulateBotResponse(text);
    });
}

function addUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message user';
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
}

function sendBotMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message bot';
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
}

function simulateBotResponse(userText) {
    chatTyping.style.display = 'block';
    scrollToBottom();

    // Auto-detect language before generating response
    currentLang = detectLanguage(userText);

    setTimeout(() => {
        chatTyping.style.display = 'none';
        const response = generateResponse(userText.toLowerCase());
        sendBotMessage(response);
    }, 1000 + Math.random() * 1000);
}

// Simple language detector
function detectLanguage(text) {
    const tagalogMarkers = ['ang', 'mga', 'sa', 'ng', 'po', 'opo', 'kumusta', 'ako', 'ikaw', 'si', 'ay', 'ba', 'na', 'mo', 'ko', 'namin', 'ninyo', 'sila', 'ano', 'saan', 'kailan', 'bakit', 'paano', 'gaano', 'magkano', 'kabilang', 'tungkol', 'para', 'kay'];

    const cleanText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const words = cleanText.split(" ");

    // Count how many tagalog markers appear
    const tagalogCount = words.filter(word => tagalogMarkers.includes(word)).length;

    // If we find tagalog markers, or the text ends with tagalog specific keywords, assume TL
    if (tagalogCount > 0) return 'tl';

    // Default to EN if no strong TL markers are found
    return 'en';
}

function generateResponse(text) {
    const botData = siteData.aiBot;

    // Clean input: remove punctuation and extra spaces
    const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");

    // Check keyword matches
    for (const res of botData.responses) {
        // Match if any keyword is present as a full word
        if (res.keywords.some(k => {
            const regex = new RegExp(`\\b${k}\\b`, 'i');
            return regex.test(cleanText);
        })) {
            return res[currentLang];
        }
    }

    return botData.fallback[currentLang];
}

function scrollToBottom() {
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
