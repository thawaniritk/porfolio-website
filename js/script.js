// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat').forEach(el => {
    observer.observe(el);
});

// Resume download functionality
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Ritik_Resume.pdf';
    
    // Check if the resume file exists
    fetch('resume.pdf')
        .then(response => {
            if (response.ok) {
                // File exists, trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Show success message
                showNotification('Resume downloaded successfully!', 'success');
            } else {
                // File doesn't exist, show error message
                showNotification('Resume file not found. Please contact me directly.', 'error');
            }
        })
        .catch(error => {
            console.error('Error checking resume file:', error);
            showNotification('Error downloading resume. Please contact me directly.', 'error');
        });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0;
                font-size: 1.2rem;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('TWQ9Dv27hEUMnOgOR');
})();

// Contact form handling with EmailJS
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            // to_email: 'ritik11thawani@gmail.com'
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.send('service_cgcj44e', 'template_rfjr44m', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            })
            .finally(function() {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Project cards tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loaded class styles
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

// Console welcome message
console.log(`
🚀 Welcome to Ritik's Portfolio Website!
📧 Contact: ritik@example.com
💼 API Testing Automation Engineer
🔗 Built with HTML, CSS & JavaScript
`);

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('.nav-logo h2').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        showNotification('🎉 You found the easter egg! Thanks for exploring!', 'success');
        clickCount = 0;
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus on contact form
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            const nameInput = document.querySelector('#name');
            if (nameInput) {
                setTimeout(() => nameInput.focus(), 500);
            }
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #1d4ed8);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();
