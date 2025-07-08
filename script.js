// Main JavaScript for Ishrat Amin Portfolio

// Tab switching functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Store active tab in localStorage for persistence
    localStorage.setItem('activeTab', tabName);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved active tab
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        // Hide all tabs first
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.classList.remove('active');
        });
        
        // Show saved tab
        document.getElementById(savedTab).classList.add('active');
        document.querySelector(`[onclick="showTab('${savedTab}')"]`).classList.add('active');
    }
    
    // Add smooth scrolling for internal links
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
    
    // Add loading animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const tabs = ['about', 'experience', 'education', 'skills', 'projects', 'publications', 'posts'];
        const activeTab = document.querySelector('.tab-content.active').id;
        const currentIndex = tabs.indexOf(activeTab);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % tabs.length;
        } else {
            nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
        
        const nextTab = tabs[nextIndex];
        showTab(nextTab);
        
        // Update the button click simulation
        const event = { target: document.querySelector(`[onclick="showTab('${nextTab}')"]`) };
        window.event = event;
    }
});

// Contact form functionality (if needed)
function handleContactForm(event) {
    event.preventDefault();
    // Add contact form handling logic here
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Download CV functionality
function downloadCV() {
    // This would typically link to an actual PDF file
    console.log('Downloading CV...');
    // You can replace this with actual download logic
}

// Print page functionality
function printPage() {
    window.print();
}

// Copy contact info to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show temporary feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Copied to clipboard!';
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: fadeInOut 2s ease;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    });
}

// Add click handlers for contact items
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('@')) {
                window.location.href = `mailto:${text.split(' ')[1]}`;
            } else if (text.includes('+880')) {
                window.location.href = `tel:${text.split(' ')[1]}`;
            } else if (text.includes('linkedin')) {
                window.open(`https://${text.split(' ')[1]}`, '_blank');
            } else {
                copyToClipboard(text);
            }
        });
    });
});

// Skill tag interactions
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // You can add functionality to show more details about the skill
            console.log(`Clicked on skill: ${this.textContent}`);
        });
    });
});

// Search functionality (if needed)
function searchContent(query) {
    const sections = document.querySelectorAll('.section');
    const results = [];
    
    sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        if (content.includes(query.toLowerCase())) {
            results.push(section);
        }
    });
    
    return results;
}

// Theme toggle functionality (optional)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Add your analytics tracking code here
    console.log(`Event: ${eventName}`, eventData);
}

// Track tab switches
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Store active tab in localStorage for persistence
    localStorage.setItem('activeTab', tabName);
    
    // Track the tab switch
    trackEvent('tab_switch', { tab: tabName });
}

// Export functionality for data
function exportData() {
    const data = {
        name: "Ishrat Amin",
        position: "Executive - Corporate Finance",
        company: "Bengal Group of Industries",
        location: "Dhaka, Bangladesh",
        lastUpdated: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'ishrat_amin_data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}