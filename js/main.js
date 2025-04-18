// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon(!isDark);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
}

function updateThemeIcon(isDark) {
    themeToggle.innerHTML = isDark 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        try {
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showAlert('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showAlert('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Helper function to show alerts
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => alert.remove(), 500);
    }, 3000);
}

// Loader Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Initialize Skills
const skills = [
    { icon: 'fa-code', name: 'HTML5', level: 95 },
    { icon: 'fa-css3-alt', name: 'CSS3', level: 90 },
    { icon: 'fa-js', name: 'JavaScript', level: 85 },
    { icon: 'fa-react', name: 'React', level: 80 },
    { icon: 'fa-node', name: 'Node.js', level: 75 },
    { icon: 'fa-database', name: 'MongoDB', level: 70 }
];

const skillsContainer = document.getElementById('skillsContainer');
if (skillsContainer) {
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="fab ${skill.icon} skill-icon"></i>
            <div class="skill-info">
                <h4>${skill.name}</h4>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });
}