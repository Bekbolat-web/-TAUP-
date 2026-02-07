/**
 * TAUP Medical Center - Main JavaScript File
 * Handles general functionality for all pages
 */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initBackToTop();
    initPreloader();
    initAOS();
    initMobileNav();
    initSmoothScroll();
    initAppointmentForm();
    initContactForm();
    initNewsletterForm();
    initCarousel();
    initCounters();
    initGallery();
    
    console.log('TAUP Medical Center - Main JS Initialized');
});

// Navigation initialization
function initNavigation() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#navbar ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Handle scrollspy for single page navigation
    if (document.querySelector('.scrollto')) {
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
                    document.querySelectorAll('#navbar ul li a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
}

// Back to top button
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Preloader
function initPreloader() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
}

// AOS animations
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}

// Mobile navigation toggle
function initMobileNav() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');
    
    if (mobileNavToggle && navbar) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar .nav-link').forEach(navLink => {
            navLink.addEventListener('click', function() {
                if (navbar.classList.contains('navbar-mobile')) {
                    navbar.classList.remove('navbar-mobile');
                    mobileNavToggle.classList.toggle('bi-list');
                    mobileNavToggle.classList.toggle('bi-x');
                }
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a.scrollto').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Close mobile menu if open
            const navbar = document.querySelector('#navbar');
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            if (navbar && navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                mobileNavToggle.classList.toggle('bi-list');
                mobileNavToggle.classList.toggle('bi-x');
            }
            
            // Scroll to target
            const headerHeight = document.querySelector('#header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Appointment form handling
function initAppointmentForm() {
    const appointmentForm = document.querySelector('.php-email-form');
    if (!appointmentForm) return;
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const loading = this.querySelector('.loading');
        const errorMessage = this.querySelector('.error-message');
        const sentMessage = this.querySelector('.sent-message');
        
        // Show loading
        loading.style.display = 'block';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'none';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            loading.style.display = 'none';
            
            // Check for WhatsApp contact preference
            const whatsappContact = document.getElementById('whatsappContact');
            if (whatsappContact && whatsappContact.checked) {
                const name = formData.get('name');
                const phone = formData.get('phone');
                const message = `Appointment request from ${name} (${phone}). Please confirm.`;
                const whatsappUrl = `https://wa.me/777781074272?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
            
            // Show success message
            sentMessage.style.display = 'block';
            submitButton.disabled = false;
            
            // Reset form after 3 seconds
            setTimeout(() => {
                appointmentForm.reset();
                sentMessage.style.display = 'none';
            }, 3000);
        }, 2000);
    });
}

// Contact form handling
function initContactForm() {
    const contactForms = document.querySelectorAll('.php-email-form');
    
    contactForms.forEach(form => {
        // Skip appointment form (handled separately)
        if (form.closest('#appointment')) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const loading = this.querySelector('.loading');
            const errorMessage = this.querySelector('.error-message');
            const sentMessage = this.querySelector('.sent-message');
            
            // Show loading
            loading.style.display = 'block';
            errorMessage.style.display = 'none';
            sentMessage.style.display = 'none';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                loading.style.display = 'none';
                sentMessage.style.display = 'block';
                submitButton.disabled = false;
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    sentMessage.style.display = 'none';
                }, 3000);
            }, 2000);
        });
    });
}

// Newsletter subscription
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('form input[type="submit"]');
    
    newsletterForms.forEach(submitBtn => {
        const form = submitBtn.closest('form');
        if (!form || !form.querySelector('input[type="email"]')) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show loading on button
            const originalText = submitBtn.value;
            submitBtn.value = 'Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate subscription
            setTimeout(() => {
                alert('Thank you for subscribing to TAUP Medical Center updates!');
                emailInput.value = '';
                submitBtn.value = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });
}

// Carousel initialization
function initCarousel() {
    const heroCarousel = document.querySelector('#heroCarousel');
    if (!heroCarousel) return;
    
    // Initialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(heroCarousel, {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });
    
    // Update indicators
    const indicators = heroCarousel.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            carousel.to(index);
        });
    });
}

// Counter animations
function initCounters() {
    const counters = document.querySelectorAll('.purecounter');
    if (!counters.length) return;
    
    // Check if PureCounter is available
    if (typeof PureCounter !== 'undefined') {
        new PureCounter();
    } else {
        // Fallback counter animation
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-purecounter-end')) || 0;
            const duration = parseInt(counter.getAttribute('data-purecounter-duration')) || 2000;
            const start = 0;
            const increment = target / (duration / 16); // 60fps
            
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }
}

// Gallery initialization (if any)
function initGallery() {
    // Initialize any gallery components if present
    const galleryLinks = document.querySelectorAll('.gallery-popup');
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Lightbox functionality would go here
            console.log('Gallery image clicked:', this.href);
        });
    });
}

// Emergency modal function (can be called from anywhere)
function showEmergencyModal() {
    const modalHTML = `
        <div class="modal fade" id="emergencyModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title"><i class="fas fa-ambulance me-2"></i>Emergency Assistance</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger">
                            <h6><i class="fas fa-exclamation-triangle"></i> IF THIS IS A LIFE-THREATENING EMERGENCY:</h6>
                            <ol class="mt-2">
                                <li>Call <strong>103</strong> immediately for ambulance</li>
                                <li>State your location clearly</li>
                                <li>Describe the emergency situation</li>
                                <li>Follow the operator's instructions</li>
                                <li>Do not hang up until help arrives</li>
                            </ol>
                        </div>
                        
                        <h6 class="mt-4">TAUP Emergency Contacts:</h6>
                        <div class="list-group mt-2">
                            <div class="list-group-item">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-phone text-danger fa-lg me-3"></i>
                                    <div>
                                        <strong>Emergency Line</strong>
                                        <div class="mt-1">
                                            <a href="tel:103" class="btn btn-sm btn-danger me-2">
                                                <i class="fas fa-phone"></i> Call 103
                                            </a>
                                            <a href="tel:+77781074272" class="btn btn-sm btn-outline-danger">
                                                <i class="fas fa-phone"></i> +7 778 107 42 72
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="list-group-item">
                                <div class="d-flex align-items-center">
                                    <i class="fab fa-whatsapp text-success fa-lg me-3"></i>
                                    <div>
                                        <strong>WhatsApp Emergency</strong>
                                        <div class="mt-1">
                                            <a href="https://wa.me/777781074272?text=EMERGENCY%20HELP%20NEEDED%20-%20TAUP%20Medical%20Center" 
                                               class="btn btn-sm btn-success" 
                                               target="_blank">
                                                <i class="fab fa-whatsapp"></i> WhatsApp Emergency
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="tel:103" class="btn btn-danger">
                            <i class="fas fa-phone"></i> Call 103 Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Create and show modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    const modal = new bootstrap.Modal(document.getElementById('emergencyModal'));
    modal.show();
    
    // Remove modal after hiding
    document.getElementById('emergencyModal').addEventListener('hidden.bs.modal', function() {
        modalContainer.remove();
    });
}

// WhatsApp direct chat function
function startWhatsAppChat(prefilledText = '') {
    const defaultMessage = 'Hello TAUP Medical Center, I need medical consultation';
    const message = prefilledText || defaultMessage;
    const whatsappUrl = `https://wa.me/777781074272?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// Department tab switching (for index.html)
function initDepartmentTabs() {
    const tabLinks = document.querySelectorAll('.departments .nav-tabs a');
    const tabContents = document.querySelectorAll('.departments .tab-pane');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active', 'show'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetId = this.getAttribute('data-bs-target');
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.classList.add('active', 'show');
            }
        });
    });
}

// Doctor card hover effects
function initDoctorCards() {
    const doctorCards = document.querySelectorAll('.member');
    doctorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize when window loads
window.addEventListener('load', function() {
    // Additional initializations that need full page load
    initDepartmentTabs();
    initDoctorCards();
    
    // Check for any URL hash and scroll to it
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                const headerHeight = document.querySelector('#header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }, 500);
        }
    }
});

// Export functions for use in other scripts
window.TAUP = {
    showEmergencyModal: showEmergencyModal,
    startWhatsAppChat: startWhatsAppChat,
    initSmoothScroll: initSmoothScroll
};